
/* SETTING MODULE */
const { default: makeWASocket, downloadMediaMessage, makeWALegacySocket, BufferJSON, Browsers, initInMemoryStore, extractMessageContent, makeInMemoryStore, proto, delay, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, jidDecode, areJidsSameUser, PHONENUMBER_MCC, WA_DEFAULT_EPHEMERAL, relayMessage, getContentType, generateWAMessage, generateWAMessageContent, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage } = require ("baileys")
global.makeWASocket = makeWASocket
global.makeWALegacySocket = makeWALegacySocket
global.BufferJSON = BufferJSON
global.Browsers = Browsers
global.initInMemoryStore = initInMemoryStore
global.extractMessageContent = extractMessageContent
global.makeInMemoryStore = makeInMemoryStore
global.proto = proto
global.delay = delay
global.DisconnectReason = DisconnectReason
global.useMultiFileAuthState = useMultiFileAuthState
global.fetchLatestBaileysVersion = fetchLatestBaileysVersion
global.jidDecode = jidDecode
global.areJidsSameUser = areJidsSameUser
global.PHONENUMBER_MCC = PHONENUMBER_MCC
global.WA_DEFAULT_EPHEMERAL = WA_DEFAULT_EPHEMERAL
global.relayMessage = relayMessage
global.getContentType = getContentType
global.generateWAMessage = generateWAMessage
global.generateWAMessageContent = generateWAMessageContent
global.generateForwardMessageContent = generateForwardMessageContent
global.generateWAMessageFromContent = generateWAMessageFromContent
global.downloadContentFromMessage = downloadContentFromMessage
global.proto = proto
global.getContentType = getContentType
global.downloadMediaMessage = downloadMediaMessage
global.util = require("util")
global.CFonts = require("cfonts")
global.readline = require("readline")
global.pino = require("pino")
global.chalk = require("chalk")
global.NodeCache = require("node-cache")
global.fs = require("fs")
global.syntaxerror = require("syntax-error")
global.moment = require("moment-timezone")
global.FileType = require("file-type")
global.ffmpeg = require("fluent-ffmpeg")
global.crpto = require("crypto")
global.os = require("os")
global.fetch = require("node-fetch")
global.path = require("path")
global.webp = require("node-webpmux")
global.axios = require("axios")
global.proto = require("baileys").proto
global.getContentType = require("baileys").getContentType
global.downloadMediaMessage = require("baileys").downloadMediaMessage
global.exec = require("child_process").exec
global.FormData = require("form-data")
global.speed = require("performance-now")
global.path = require("path")
global.sizeFormatter = require("human-readable").sizeFormatter
global.Boom = require("@hapi/boom").Boom
global.rimraf = require("rimraf")
global.vm = require("node:vm")
global.JSDOM = require("jsdom").JSDOM
global.cheerio = require("cheerio")

/* 
FUNCTION MSG HARAP JANGAN DI UBAH 
JIKA TIDAK MAU ERROR 
*/
global.smsg = (conn, msg) => {
let M = proto.WebMessageInfo
msg = M.fromObject(msg)
if (msg.key) {
msg.id = msg.key.id
msg.isBaileys = msg.id && msg.id.length === 16 || msg.id.startsWith('3EB0') && msg.id.length === 12 || false
msg.chat = conn.decodeJid(msg.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
msg.now = msg.messageTimestamp
msg.isGroup = msg.chat.endsWith('@g.us')
msg.sender = conn.decodeJid(msg.key.fromMe && conn.user.id || msg.participant || msg.key.participant || msg.chat || '')
}
if (msg.message) {
let mtype = Object.keys(msg.message)
msg.mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype[0]) && mtype[0]) || 
(mtype.length >= 3 && mtype[1] !== 'messageContextInfo' && mtype[1]) || 
mtype[mtype.length - 1]
msg.type = getContentType(msg.message)
msg.msg = (msg.mtype == 'viewOnceMessage' ? msg.message[msg.mtype].message[getContentType(msg.message[msg.mtype].message)] : msg.message[msg.type])
if (msg.chat == 'status@broadcast' && ['protocolMessage', 'senderKeyDistributionMessage'].includes(msg.mtype)) msg.chat = (msg.key.remoteJid !== 'status@broadcast' && msg.key.remoteJid) || msg.sender
if (msg.mtype == 'protocolMessage' && msg.msg.key) {
if (msg.msg.key.remoteJid == 'status@broadcast') msg.msg.key.remoteJid = msg.chat
if (!msg.msg.key.participant || msg.msg.key.participant == 'status_me') msg.msg.key.participant = msg.sender
msg.msg.key.fromMe = conn.decodeJid(msg.msg.key.participant) === conn.decodeJid(conn.user.id)
if (!msg.msg.key.fromMe && msg.msg.key.remoteJid === conn.decodeJid(conn.user.id)) msg.msg.key.remoteJid = msg.sender
}
msg.text = msg.msg || ''
msg.mentionedJid = msg.msg?.contextInfo?.mentionedJid?.length && msg.msg.contextInfo.mentionedJid || []
let quoted = msg.quoted = msg.msg?.contextInfo?.quotedMessage ? msg.msg.contextInfo.quotedMessage : null
if (msg.quoted) {
let type = Object.keys(msg.quoted)[0]
msg.quoted = msg.quoted[type]
if (typeof msg.quoted === 'string') msg.quoted = { text: msg.quoted }
msg.quoted.mtype = type
msg.quoted.id = msg.msg.contextInfo.stanzaId
msg.quoted.chat = conn.decodeJid(msg.msg.contextInfo.remoteJid || msg.chat || msg.sender)
msg.quoted.isBaileys = msg.quoted.id && msg.quoted.id.length === 16 || false
msg.quoted.sender = conn.decodeJid(msg.msg.contextInfo.participant)
msg.quoted.text = msg.quoted.text || msg.quoted.caption || msg.quoted.contentText || ''
msg.quoted.mentionedJid = msg.quoted.contextInfo?.mentionedJid?.length && msg.quoted.contextInfo.mentionedJid || []
let vM = msg.quoted.fakeObj = M.fromObject({
key: {
fromMe: msg.quoted.fromMe,
remoteJid: msg.quoted.chat,
id: msg.quoted.id
},
message: quoted,
...(msg.isGroup ? { participant: msg.quoted.sender } : {})
})
msg.getQuotedObj = msg.getQuotedMessage = async () => {
if (!msg.quoted.id) return null
let q = M.fromObject(vM)
return smsg(conn, q)
}
if (msg.quoted.url || msg.quoted.directPath) msg.quoted.download = () => conn.downloadMediaMessage(msg.quoted)
msg.quoted.copy = () => smsg(conn, M.fromObject(M.toObject(vM)))
}
}
if (msg.msg && msg.msg.url) msg.download = (saveToFile = false) => conn.downloadM(msg.msg, msg.mtype.replace(/message/i, ''), saveToFile)
return msg
}
async function imageToWebp (media) {
const tmpFileOut = path.join(os.tmpdir(), `${crpto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
const tmpFileIn = path.join(os.tmpdir(), `${crpto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)
fs.writeFileSync(tmpFileIn, media)
await new Promise((resolve, reject) => {
ffmpeg(tmpFileIn)
.on("error", reject)
.on("end", () => resolve(true))
.addOutputOptions([
"-vcodec",
"libwebp",
"-vf",
"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
])
.toFormat("webp")
.save(tmpFileOut)
})
const buff = fs.readFileSync(tmpFileOut)
fs.unlinkSync(tmpFileOut)
fs.unlinkSync(tmpFileIn)
return buff
}

const file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update File ${__filename}`))
  delete require.cache[file]
  require(file)
})