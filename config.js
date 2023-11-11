const fs = require('fs-extra') 
 if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' }) 
  
  
 //═══════[Required Variables]════════\\ 
 global.owner = process.env.OWNER_NUMBER.split("94722477361") 
 global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority" 
 global.port= process.env.PORT || 5000 
 global.email = 'Queentharu@hotmail.com' 
 global.github = 'https://github.com/kanishkadesilva001/Blue-Panda-V2' 
 global.location = 'SriLanka LK' 
 global.gurl = 'https://chat.whatsapp.com/HEA61b7Y078Ksmz5V1989E' // add your username 
 global.sudo = process.env.SUDO || '94728127082' 
 global.devs = '94728127082'; 
 global.website = 'https://urlis.net/queen_tharu' //wa.me/+91000000000000 
 global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png' 
 module.exports = { 
   botname:   process.env.BOT_NAME === undefined ? '𝓑𝓛𝓤𝓔 𝓟𝓐𝓝𝓓𝓐 𝓥2' : process.env.BOT_NAME, 
   ownername: process.env.OWNER_NAME === undefined ? '𝕂𝔸ℕ𝕀𝕊ℍ𝕂𝔸 𝔻𝔼 𝕊𝕀𝕃𝕍𝔸' : process.env.OWNER_NAME,  
   author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'ʙʟᴜᴇ ᴘᴀɴᴅᴀ ᴠ2' : process.env.PACK_INFO.split(";")[0], 
   auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? truee : process.env.AUTO_READ_STATUS, 
   packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'ʙʟᴜᴇ ᴘᴀɴᴅᴀ ᴠ2' : process.env.PACK_INFO.split(";")[1],
   sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID, 
   autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION , 
   antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD, 
   alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
   voice  :  process.env.AUTO_VOICE === undefined ? true : process.env.AUTO_VOICE, 
   antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE, 
   readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE, 
   auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER, 
   HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX, 
   warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT, 
   disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM, 
   levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE, 
   antilink:  process.env.ANTILINK_VALUES === undefined ? 'whatsapp.com' : process.env.ANTILINK_VALUES, 
   onlygroup: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
   antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION, 
   BRANCH: 'main',  
   ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE, 
   autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO, 
   OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY, 
   heroku:  process.env.heroku === undefined ? false : process.env.heroku, 
   HEROKU: { 
     HEROKU: process.env.HEROKU ||true, 
     API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY, 
     APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME 
 }, 
   VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION, 
   LANG: process.env.THEME|| 'SECKTOR', 
   WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE 
 }; 
  
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(`Update'${__filename}'`) 
     delete require.cache[file] 
         require(file) 
 })
