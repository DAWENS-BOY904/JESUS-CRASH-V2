const fs = require('fs')

//========== CONFIG PRINCIPALE ==========//
global.owner = ['50942241547'] // Numéros propriétaires
global.ownernumber = '50942241547'
global.CREATOR_JIDS = [
  '50942241547@s.whatsapp.net', // Ton premier numéro
  '50942241547@s.whatsapp.net'  // Ton deuxième numéro
];
global.ownername = 'Dawens'
global.creator = "50942241547@s.whatsapp.net" // JID WhatsApp
global.DEVELOPER = ["50942241547"]
global.OWNER_NAME = "@Mr_Da67"

global.BOT_NAME = "JESUS-CRASH-V2"
global.botname = "JESUS-CRASH-V2"
global.botName = "JESUS-CRASH-V2"
global.creatorName = "Dawens"
global.author = "Dawens"

global.footer = "✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *Dawens-ᴛᴇᴄʜ* 👑"
global.version = "V2"
global.themeemoji = '🩸'
global.bankowner = "MOSES"
global.location = "Haïti"

//========== MÉDIAS ET LIENS ==========//
global.thumbnail = 'https://files.catbox.moe/ijo0fe.png'
global.gambar = "https://files.catbox.moe/0d2p7l.png"
global.link = "https://whatsapp.com/channel/0029Vb6tScFDzgTAcKNphY2i"

//========== STICKERS ==========//
global.packname = "sᴛɪᴄᴋᴇʀ"
global.author = "ᴄʀᴇᴇ ᴘᴀʀ DAWENS BOY"

//========== COMPORTEMENT ==========//
global.prefa = ['','!','.','#','&']
global.xprefix = '.'
global.status = false // true = self mode
global.autoRecording = true
global.autobio = true //auto update bio
global.autoTyping = true
global.autorecordtype = true
global.autoread = false
global.anti92 = true
global.autoswview = true

//========== MESSAGES ==========//
global.onlyowner = `⛔ Seuls les propriétaires peuvent utiliser cette fonction.
Demande à DAWENS si tu veux les accès.`

global.database = `📌 Pour être ajouté dans la base de données, contacte *DAWENS*.`

global.mess = {
    wait: "```🕐 PATIENTE UN INSTANT...```",
    success: "✅ Fait avec succès.",
    on: "✅ JESUS-CRASH-V2 est actif",
    off: "❌ JESUS-CRASH-V2 est inactif",
    prem: "🔐 Cette commande est réservée aux utilisateurs *Premium*.",
    query: {
        text: "❓ Tu n’as pas mis de texte.",
        link: "❓ Il manque le lien.",
    },
    error: {
        fitur: "⚠️ Erreur dans cette fonction. Contacte le dev (Dawens) pour correction.",
    },
    only: {
        group: "❌ Fonction utilisable uniquement dans un *groupe*.",
        private: "❌ Fonction utilisable uniquement en *privé*.",
        owner: "⛔ Fonction réservée à *Dawens*.",
        admin: "⛔ Tu dois être *admin du groupe*.",
        badmin: "❌ Le bot n’est pas admin, impossible d’exécuter.",
        premium: "🔐 Cette fonction est réservée aux utilisateurs premium de JESUS-CRASH-V2.",
    }
}

global.hituet = 0
//==================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
