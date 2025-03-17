require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "255734980103"
global.owner2 = "255758868502"
global.namaowner = "Lazack28"
global.botname = "KLEE DEV"
//======== Setting Bot & Link ========//
global.namabot = "Klee Dev" 
global.namabot2 = "Klee Dev"
global.foother = "© Klee dev - lazack28"
global.idsaluran = false
global.linkgc = 'https://whatsapp.com/channel/0029ValRlNGCXC3EussN4b2E'
global.linksaluran = "https://home.lazackorganisation.my.id"
global.linkyt = 'https://whatsapp.com/channel/0029ValRlNGCXC3EussN4b2E'
global.linktele = 'https://whatsapp.com/channel/0029ValRlNGCXC3EussN4b2E'
global.packname = "Klee dev Official"
global.author = "Lazack"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false
global.owneroff = false


//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "oooh my there is error please contact lazack28",
"done": "Done kid ✅", 
"wait": "Bot searching . . .", 
"group": "*• Group Only*", 
"private": "*• Private Chat*", 
"admin": "*• Admin Only*", 
"adminbot": "*• Bot Admin*", 
"owner": "*• Owner Only*", 
"developer": "*• Developer Only* "
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
