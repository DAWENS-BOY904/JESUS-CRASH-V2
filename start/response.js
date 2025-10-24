/*
Richie is him t.me/hmmletts
*/
require('../setting/config')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");
const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReriyuectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediariyuInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisriyuectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

// ===================== Module =====================
const { 
    spawn: 
    spawn, 
    exec 
} = require('child_process')
const fs = require('fs')
const pino = require('pino')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const NodeCache = require("node-cache");
const axios = require('axios')
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed()
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { ocrSpace } = require("ocr-space-api-wrapper")
const sharp = require("sharp")
module.exports = rich = async (rich, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);

// ===================== Database ===========================
const Premium = JSON.parse(fs.readFileSync('./function/premium.json'))
const bankDataPath = './bankData.json';
const { protocolbug1, protocolbug2, protocolbug3, protocolbug8, protocolbug6, bulldozer, protocolbug7 } = require('./delay')
// Load bank data on startup
global.bankList = fs.existsSync(bankDataPath)
  ? JSON.parse(fs.readFileSync(bankDataPath))
  : {};

// Save function
function saveBankList() {
  fs.writeFileSync(bankDataPath, JSON.stringify(global.bankList, null, 2));
}
// ===================== Body dan Prefix =====================
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa 
  ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(budy) 
    ? budy.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] 
    : "" 
  : global.prefa ?? global.prefix

// ===================== Command Handling ==================    
const owner = JSON.parse(fs.readFileSync('./function/owner.json'))
const isCmd = budy.startsWith(prefix)
const command = isCmd ? budy.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = budy.trim().split(/ +/).slice(1)
const qtext = q = args.join(" ")
const text = m.message?.conversation || m.message?.extendedTextMessage?.text;
// ===================== User Info ===========================

const botNumber = await rich.decodeJid(rich.user.id)
const isCreator = [botNumber, ...owner]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

  

const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '50942241547@s.whatsapp.net')
  .includes(m.sender)

const isPremium = [botNumber, ...Premium]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

// ===================== Quoted Message =====================
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m

// ===================== Utility Functions =====================
const { 
    smsg,
    tanggal, 
    getTime, 
    isUrl, 
    sleep, 
    clockString, 
    runtime, 
    fetchJson, 
    getBuffer, 
    jsonformat, 
    format, 
    parseMention, 
    getRandom, 
    getGroupAdmins, 
    generateProfilePicture 
} = require('../function/storage')
const sendPollMenu = async (rich, jid) => {
  await rich.sendMessage(jid, {
    text: '📊 *Poll Menu*\n\nChoose one:',
    buttons: [
      { buttonId: 'poll_me', buttonText: { displayText: '🧠 Me' }, type: 1 },
      { buttonId: 'poll_button', buttonText: { displayText: '🔘 Button' }, type: 1 },
      { buttonId: 'poll_from', buttonText: { displayText: '📍 From' }, type: 1 },
    ],
    footer: 'Vote by tapping a button',
    headerType: 1
  });
};
// ===================== Group Info ==========================
const from = m.key.remoteJid
const sender = m.isGroup 
  ? (m.key.participant ? m.key.participant : m.participant) 
  : m.key.remoteJid

const groupMetadata = m.isGroup ? await rich.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : ""

// ===================== User Info Tambahan ==================
const pushname = m.pushName || "No Name"

// ===================== Waktu & Lokalisasi ==================
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

// ===================== MIME ==============================
    

        if (autobio) {
            rich.updateProfileStatus(`ɪ ʟᴏᴠᴇ ᴅʀᴀxᴇɴ`).catch(_ => _)
        }
        
  //========
const mime = (quoted.msg || quoted).mimetype || ''

// ===================== Exif & Media Converter ===============
const { 
    imageToWebp, 
    videoToWebp, 
    writeExifImg, 
    writeExifVid, 
    addExif 
} = require('../function/exif.js')

// ===================== Media Assets ========================
const imgCrL = fs.readFileSync("./start/media/CrL.jpg")
const image1 = fs.readFileSync("./start/media/image1.jpg")
const richieplay = fs.readFileSync("./start/media/rich.mp3")
// ===================== Access Control =====================
if (!rich.public) {
  if (!isCreator) return
}
   
// ===================== Console Logger =====================
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  }
}

// auto follow 

//=========

// ===================== Bug Functions =====================

// ===================== Custom Reply =====================



// ===================== Emoji Reaction =====================

const reaction = async (isTarget, emoji) => {
    rich.sendMessage(isTarget, {
        react: {
            text: emoji,
            key: m.key 
        } 
    });
}

// ===================== Mention Helper =====================
rich.ments = async (text) => {
    return [m.chat];
}

// ===================== Image Resizer (WIP) =================
//auto follow 

// Newsletter Channels
const channelIds = [
  "120363419768812867@newsletter",
  "120363406278870899@newsletter"
];

// Load previously followed channels
let followedChannels = new Set();
try {
  const data = fs.readFileSync('./followedChannels.json', 'utf8');
  followedChannels = new Set(JSON.parse(data));
} catch {
  console.log('No previous follow data found, starting fresh.');
}

// Newsletter follow function
function followNewsletter(channelIds) {
  try {
    const channelToFollow = channelIds[0];
    if (!followedChannels.has(channelToFollow)) {
      rich.newsletterFollow(channelToFollow); // Replace with your Baileys client
      followedChannels.add(channelToFollow);
      fs.writeFileSync('./followedChannels.json', JSON.stringify([...followedChannels]));
      console.log(`✅ Followed channel: ${channelToFollow}`);
    } else {
      console.log(`⚠️ Already followed channel: ${channelToFollow}`);
    }
  } catch (err) {
    console.error('❌ Newsletter follow error:', err);
  }
}
async function resize(image, width, height) {
  const img = await jimp.read(image)
  img.resize(width, height)
  return await img.getBufferAsync(jimp.MIME_JPEG)
}
//==============\\
if (autoReact) {
            const randomEmojis = [
                '❤️', '👍', '🎉', '😎', '🔥', '👏', '💡', '✨', '🎈', '🌟', '😊', '😍', '💯', '😅', '🥳', '🤩', '🎶', '💖', '🍀', '🌈',
                '⚡', '💥', '🌺', '🌼', '🌸', '🌻', '🐾', '💌', '💝', '🌷', '🍁', '🍃', '🌿', '🌙', '🪐', '☀️', '🌞', '🌜', '🌑',
                '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌚', '✨', '💎', '🖤', '💜', '❤️‍🔥', '💙', '💚', '💛', '🧡', '🤍', '🤎', '💗',
                '💓', '💞', '💘', '💌', '💍', '🔮', '🌍', '🌎', '🌏', '🪴', '🌵', '🌾', '🍂', '🍄', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭',
                '🍍', '🥥', '🍉', '🍊', '🍋', '🍏', '🍎', '🍍', '🍅', '🥕', '🥔', '🍠', '🌽', '🥒', '🍑', '🍋', '🍒', '🥝', '🫐', '🍜', '🍛',
                '🍝', '🍕', '🍣', '🍤', '🍖', '🍗', '🍠', '🥧', '🍩', '🍪', '🍨', '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🥨', '🥯', '🍪',
                '🍩', '🍪', '🥓', '🍔', '🥪', '🍟', '🥞', '🍣', '🍰', '🥧', '🍇', '🍉', '🥑', '🥥', '🥭', '🍅', '🥦', '🥕', '🥔', '🥗', '🥒',
                '🥥', '🍒', '🍑', '🍋', '🥭', '🍉', '🍇', '🍋', '🥝', '🫐', '🍊', '🍏', '🥕', '🍅', '🥒', '🥔', '🥥', '🍠', '🍞', '🥐', '🍩',
                '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🍪', '🍩', '🍕', '🍜', '🍚', '🍛', '🍕', '🍣', '🍤', '🍔', '🍗', '🍖', '🥓', '🥩',
                '🍿', '🎥', '🎬', '🎧', '🎮', '🎤', '🎵', '🎷', '🎺', '🎸', '🎻', '🎼', '🎶', '🎧', '🎵', '🎶', '🎤', '🎬', '🎮', '🎸', '🎹',
                '🎷', '🎺', '🎼', '🎻', '🎧', '🎮', '🎮', '🧸', '🪀', '🎨', '🖌️', '🎭', '🎪', '🎠', '🎰', '🛹', '🛷', '🏀', '⚽', '🏈', '🎱',
                '🎯', '🎳', '🏏', '🏑', '🏓', '🎾', '🛶', '🚴', '🧗', '🧘', '🏄', '🏇', '⛷️', '🏌️‍♂️', '⛹️‍♀️', '🚣', '🏆', '🎮', '🎲',
                '🎮', '🍕', '🍔', '🍟', '🍗', '🥔', '🥦', '🌽', '🥒', '🥝', '🥭', '🍍', '🍎', '🍊', '🍋', '🥭', '🥑', '🥒', '🌶️', '🍠', '🥔',
                '🍪', '🍩', '🍫', '🍫', '🍪', '🥪', '🥡', '🍜', '🍣', '🍤', '🍙', '🍚', '🍗', '🍖', '🥩', '🥓', '🥨', '🍧', '🍡', '🍪', '🍩',
                '🍜', '🍛', '🍝', '🥝', '🫐', '🍁', '🍃', '🌲', '🌳', '🌴', '🌱', '🪴', '🌾', '🌿', '🌺', '🌼', '🌻', '🌸', '🌷', '🌹', '💐',
                '🍀', '🍁', '🍃', '🌱', '🌿', '🌾', '🌸', '🌺', '🌻', '🌼', '💮', '🍂', '🍃', '🍄', '🌷', '🍁', '🌿', '🎋', '🎋', '🌹', '🌸'
            ];

            const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];

            // Send a random emoji as a reaction
            await rich.sendMessage(sender, {
                react: { text: randomEmoji, key: message.key }
            });
        }
    } catch (err) {
        console.error('Error tracking messages:', err);
    }
});



const fancy = {    
    0:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๖","c":"¢","d":"໓","e":"ē","f":"f","g":"ງ","h":"h","i":"i","j":"ว","k":"k","l":"l","m":"๓","n":"ຖ","o":"໐","p":"p","q":"๑","r":"r","s":"Ş","t":"t","u":"น","v":"ง","w":"ຟ","x":"x","y":"ฯ","z":"ຊ","A":"ค","B":"๖","C":"¢","D":"໓","E":"ē","F":"f","G":"ງ","H":"h","I":"i","J":"ว","K":"k","L":"l","M":"๓","N":"ຖ","O":"໐","P":"p","Q":"๑","R":"r","S":"Ş","T":"t","U":"น","V":"ง","W":"ຟ","X":"x","Y":"ฯ","Z":"ຊ" },
    1:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ą","b":"ც","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɠ","h":"ɧ","i":"ı","j":"ʝ","k":"ƙ","l":"Ɩ","m":"ɱ","n":"ŋ","o":"ơ","p":"℘","q":"զ","r":"ཞ","s":"ʂ","t":"ɬ","u":"ų","v":"۷","w":"ῳ","x":"ҳ","y":"ყ","z":"ʑ","A":"ą","B":"ც","C":"ƈ","D":"ɖ","E":"ɛ","F":"ʄ","G":"ɠ","H":"ɧ","I":"ı","J":"ʝ","K":"ƙ","L":"Ɩ","M":"ɱ","N":"ŋ","O":"ơ","P":"℘","Q":"զ","R":"ཞ","S":"ʂ","T":"ɬ","U":"ų","V":"۷","W":"ῳ","X":"ҳ","Y":"ყ","Z":"ʑ" },
    2:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ﾑ","b":"乃","c":"ᄃ","d":"り","e":"乇","f":"ｷ","g":"ム","h":"ん","i":"ﾉ","j":"ﾌ","k":"ズ","l":"ﾚ","m":"ﾶ","n":"刀","o":"の","p":"ｱ","q":"ゐ","r":"尺","s":"丂","t":"ｲ","u":"ひ","v":"√","w":"W","x":"ﾒ","y":"ﾘ","z":"乙","A":"ﾑ","B":"乃","C":"ᄃ","D":"り","E":"乇","F":"ｷ","G":"ム","H":"ん","I":"ﾉ","J":"ﾌ","K":"ズ","L":"ﾚ","M":"ﾶ","N":"刀","O":"の","P":"ｱ","Q":"ゐ","R":"尺","S":"丂","T":"ｲ","U":"ひ","V":"√","W":"W","X":"ﾒ","Y":"ﾘ","Z":"乙" },
    3:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"卂","b":"乃","c":"匚","d":"ᗪ","e":"乇","f":"千","g":"Ꮆ","h":"卄","i":"丨","j":"ﾌ","k":"Ҝ","l":"ㄥ","m":"爪","n":"几","o":"ㄖ","p":"卩","q":"Ɋ","r":"尺","s":"丂","t":"ㄒ","u":"ㄩ","v":"ᐯ","w":"山","x":"乂","y":"ㄚ","z":"乙","A":"卂","B":"乃","C":"匚","D":"ᗪ","E":"乇","F":"千","G":"Ꮆ","H":"卄","I":"丨","J":"ﾌ","K":"Ҝ","L":"ㄥ","M":"爪","N":"几","O":"ㄖ","P":"卩","Q":"Ɋ","R":"尺","S":"丂","T":"ㄒ","U":"ㄩ","V":"ᐯ","W":"山","X":"乂","Y":"ㄚ","Z":"乙" },
    4:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"🄰","b":"🄱","c":"🄲","d":"🄳","e":"🄴","f":"🄵","g":"🄶","h":"🄷","i":"🄸","j":"🄹","k":"🄺","l":"🄻","m":"🄼","n":"🄽","o":"🄾","p":"🄿","q":"🅀","r":"🅁","s":"🅂","t":"🅃","u":"🅄","v":"🅅","w":"🅆","x":"🅇","y":"🅈","z":"🅉","A":"🄰","B":"🄱","C":"🄲","D":"🄳","E":"🄴","F":"🄵","G":"🄶","H":"🄷","I":"🄸","J":"🄹","K":"🄺","L":"🄻","M":"🄼","N":"🄽","O":"🄾","P":"🄿","Q":"🅀","R":"🅁","S":"🅂","T":"🅃","U":"🅄","V":"🅅","W":"🅆","X":"🅇","Y":"🅈","Z":"🅉" },
    5:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Ꮧ","b":"Ᏸ","c":"ፈ","d":"Ꮄ","e":"Ꮛ","f":"Ꭶ","g":"Ꮆ","h":"Ꮒ","i":"Ꭵ","j":"Ꮰ","k":"Ꮶ","l":"Ꮭ","m":"Ꮇ","n":"Ꮑ","o":"Ꭷ","p":"Ꭾ","q":"Ꭴ","r":"Ꮢ","s":"Ꮥ","t":"Ꮦ","u":"Ꮼ","v":"Ꮙ","w":"Ꮗ","x":"ጀ","y":"Ꭹ","z":"ፚ","A":"Ꮧ","B":"Ᏸ","C":"ፈ","D":"Ꮄ","E":"Ꮛ","F":"Ꭶ","G":"Ꮆ","H":"Ꮒ","I":"Ꭵ","J":"Ꮰ","K":"Ꮶ","L":"Ꮭ","M":"Ꮇ","N":"Ꮑ","O":"Ꭷ","P":"Ꭾ","Q":"Ꭴ","R":"Ꮢ","S":"Ꮥ","T":"Ꮦ","U":"Ꮼ","V":"Ꮙ","W":"Ꮗ","X":"ጀ","Y":"Ꭹ","Z":"ፚ" },
    6:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ᗩ","b":"ᗷ","c":"ᑕ","d":"ᗪ","e":"E","f":"ᖴ","g":"G","h":"ᕼ","i":"I","j":"ᒍ","k":"K","l":"ᒪ","m":"ᗰ","n":"ᑎ","o":"O","p":"ᑭ","q":"ᑫ","r":"ᖇ","s":"ᔕ","t":"T","u":"ᑌ","v":"ᐯ","w":"ᗯ","x":"᙭","y":"Y","z":"ᘔ","A":"ᗩ","B":"ᗷ","C":"ᑕ","D":"ᗪ","E":"E","F":"ᖴ","G":"G","H":"ᕼ","I":"I","J":"ᒍ","K":"K","L":"ᒪ","M":"ᗰ","N":"ᑎ","O":"O","P":"ᑭ","Q":"ᑫ","R":"ᖇ","S":"ᔕ","T":"T","U":"ᑌ","V":"ᐯ","W":"ᗯ","X":"᙭","Y":"Y","Z":"ᘔ" },
    7:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ǟ","b":"ɮ","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɢ","h":"ɦ","i":"ɨ","j":"ʝ","k":"ӄ","l":"ʟ","m":"ʍ","n":"ռ","o":"օ","p":"ք","q":"զ","r":"ʀ","s":"ֆ","t":"ȶ","u":"ʊ","v":"ʋ","w":"ա","x":"Ӽ","y":"ʏ","z":"ʐ","A":"ǟ","B":"ɮ","C":"ƈ","D":"ɖ","E":"ɛ","F":"ʄ","G":"ɢ","H":"ɦ","I":"ɨ","J":"ʝ","K":"ӄ","L":"ʟ","M":"ʍ","N":"ռ","O":"օ","P":"ք","Q":"զ","R":"ʀ","S":"ֆ","T":"ȶ","U":"ʊ","V":"ʋ","W":"ա","X":"Ӽ","Y":"ʏ","Z":"ʐ" },
    8:{"0":"𝟶","1":"𝟷","2":"𝟸","3":"𝟹","4":"𝟺","5":"𝟻","6":"𝟼","7":"𝟽","8":"𝟾","9":"𝟿","a":"𝚊","b":"𝚋","c":"𝚌","d":"𝚍","e":"𝚎","f":"𝚏","g":"𝚐","h":"𝚑","i":"𝚒","j":"𝚓","k":"𝚔","l":"𝚕","m":"𝚖","n":"𝚗","o":"𝚘","p":"𝚙","q":"𝚚","r":"𝚛","s":"𝚜","t":"𝚝","u":"𝚞","v":"𝚟","w":"𝚠","x":"𝚡","y":"𝚢","z":"𝚣","A":"𝙰","B":"𝙱","C":"𝙲","D":"𝙳","E":"𝙴","F":"𝙵","G":"𝙶","H":"𝙷","I":"𝙸","J":"𝙹","K":"𝙺","L":"𝙻","M":"𝙼","N":"𝙽","O":"𝙾","P":"𝙿","Q":"𝚀","R":"𝚁","S":"𝚂","T":"𝚃","U":"𝚄","V":"𝚅","W":"𝚆","X":"𝚇","Y":"𝚈","Z":"𝚉" },
    9:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝙖","b":"𝙗","c":"𝙘","d":"𝙙","e":"𝙚","f":"𝙛","g":"𝙜","h":"𝙝","i":"𝙞","j":"𝙟","k":"𝙠","l":"𝙡","m":"𝙢","n":"𝙣","o":"𝙤","p":"𝙥","q":"𝙦","r":"𝙧","s":"𝙨","t":"𝙩","u":"𝙪","v":"𝙫","w":"𝙬","x":"𝙭","y":"𝙮","z":"𝙯","A":"𝘼","B":"𝘽","C":"𝘾","D":"𝘿","E":"𝙀","F":"𝙁","G":"𝙂","H":"𝙃","I":"𝙄","J":"𝙅","K":"𝙆","L":"𝙇","M":"𝙈","N":"𝙉","O":"𝙊","P":"𝙋","Q":"𝙌","R":"𝙍","S":"𝙎","T":"𝙏","U":"𝙐","V":"𝙑","W":"𝙒","X":"𝙓","Y":"𝙔","Z":"𝙕" },
    10:{"0":"𝟎","1":"𝟏","2":"𝟐","3":"𝟑","4":"𝟒","5":"𝟓","6":"𝟔","7":"𝟕","8":"𝟖","9":"𝟗","a":"𝐚","b":"𝐛","c":"𝐜","d":"𝐝","e":"𝐞","f":"𝐟","g":"𝐠","h":"𝐡","i":"𝐢","j":"𝐣","k":"𝐤","l":"𝐥","m":"𝐦","n":"𝐧","o":"𝐨","p":"𝐩","q":"𝐪","r":"𝐫","s":"𝐬","t":"𝐭","u":"𝐮","v":"𝐯","w":"𝐰","x":"𝐱","y":"𝐲","z":"𝐳","A":"𝐀","B":"𝐁","C":"𝐂","D":"𝐃","E":"𝐄","F":"𝐅","G":"𝐆","H":"𝐇","I":"𝐈","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝐌","N":"𝐍","O":"𝐎","P":"𝐏","Q":"𝐐","R":"𝐑","S":"𝐒","T":"𝐓","U":"𝐔","V":"𝐕","W":"𝐖","X":"𝐗","Y":"𝐘","Z":"𝐙" },
    11:{"0":"𝟬","1":"𝟭","2":"𝟮","3":"𝟯","4":"𝟰","5":"𝟱","6":"𝟲","7":"𝟳","8":"𝟴","9":"𝟵","a":"𝗮","b":"𝗯","c":"𝗰","d":"𝗱","e":"𝗲","f":"𝗳","g":"𝗴","h":"𝗵","i":"𝗶","j":"𝗷","k":"𝗸","l":"𝗹","m":"𝗺","n":"𝗻","o":"𝗼","p":"𝗽","q":"𝗾","r":"𝗿","s":"𝘀","t":"𝘁","u":"𝘂","v":"𝘃","w":"𝘄","x":"𝘅","y":"𝘆","z":"𝘇","A":"𝗔","B":"𝗕","C":"𝗖","D":"𝗗","E":"𝗘","F":"𝗙","G":"𝗚","H":"𝗛","I":"𝗜","J":"𝗝","K":"𝗞","L":"𝗟","M":"𝗠","N":"𝗡","O":"𝗢","P":"𝗣","Q":"𝗤","R":"𝗥","S":"𝗦","T":"𝗧","U":"𝗨","V":"𝗩","W":"𝗪","X":"𝗫","Y":"𝗬","Z":"𝗭" },
    12: {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝘢","b":"𝘣","c":"𝘤","d":"𝘥","e":"𝘦","f":"𝘧","g":"𝘨","h":"𝘩","i":"𝘪","j":"𝘫","k":"𝘬","l":"𝘭","m":"𝘮","n":"𝘯","o":"𝘰","p":"𝘱","q":"𝘲","r":"𝘳","s":"𝘴","t":"𝘵","u":"𝘶","v":"𝘷","w":"𝘸","x":"𝘹","y":"𝘺","z":"𝘻","A":"𝘈","B":"𝘉","C":"𝘊","D":"𝘋","E":"𝘌","F":"𝘍","G":"𝘎","H":"𝘏","I":"𝘐","J":"𝘑","K":"𝘒","L":"𝘓","M":"𝘔","N":"𝘕","O":"𝘖","P":"𝘗","Q":"𝘘","R":"𝘙","S":"𝘚","T":"𝘛","U":"𝘜","V":"𝘝","W":"𝘞","X":"𝘟","Y":"𝘠","Z":"𝘡" },
    13:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"α","b":"Ⴆ","c":"ƈ","d":"ԃ","e":"ҽ","f":"ϝ","g":"ɠ","h":"ԋ","i":"ι","j":"ʝ","k":"ƙ","l":"ʅ","m":"ɱ","n":"ɳ","o":"σ","p":"ρ","q":"ϙ","r":"ɾ","s":"ʂ","t":"ƚ","u":"υ","v":"ʋ","w":"ɯ","x":"x","y":"ყ","z":"ȥ","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z" },
    14:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"₳","b":"฿","c":"₵","d":"Đ","e":"Ɇ","f":"₣","g":"₲","h":"Ⱨ","i":"ł","j":"J","k":"₭","l":"Ⱡ","m":"₥","n":"₦","o":"Ø","p":"₱","q":"Q","r":"Ɽ","s":"₴","t":"₮","u":"Ʉ","v":"V","w":"₩","x":"Ӿ","y":"Ɏ","z":"Ⱬ","A":"₳","B":"฿","C":"₵","D":"Đ","E":"Ɇ","F":"₣","G":"₲","H":"Ⱨ","I":"ł","J":"J","K":"₭","L":"Ⱡ","M":"₥","N":"₦","O":"Ø","P":"₱","Q":"Q","R":"Ɽ","S":"₴","T":"₮","U":"Ʉ","V":"V","W":"₩","X":"Ӿ","Y":"Ɏ","Z":"Ⱬ" },
    15:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"å","b":"ß","c":"¢","d":"Ð","e":"ê","f":"£","g":"g","h":"h","i":"ï","j":"j","k":"k","l":"l","m":"m","n":"ñ","o":"ð","p":"þ","q":"q","r":"r","s":"§","t":"†","u":"µ","v":"v","w":"w","x":"x","y":"¥","z":"z","A":"Ä","B":"ß","C":"Ç","D":"Ð","E":"È","F":"£","G":"G","H":"H","I":"Ì","J":"J","K":"K","L":"L","M":"M","N":"ñ","O":"Ö","P":"þ","Q":"Q","R":"R","S":"§","T":"†","U":"Ú","V":"V","W":"W","X":"×","Y":"¥","Z":"Z" },
    16:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"α","b":"в","c":"¢","d":"∂","e":"є","f":"ƒ","g":"g","h":"н","i":"ι","j":"נ","k":"к","l":"ℓ","m":"м","n":"η","o":"σ","p":"ρ","q":"q","r":"я","s":"ѕ","t":"т","u":"υ","v":"ν","w":"ω","x":"χ","y":"у","z":"z","A":"α","B":"в","C":"¢","D":"∂","E":"є","F":"ƒ","G":"g","H":"н","I":"ι","J":"נ","K":"к","L":"ℓ","M":"м","N":"η","O":"σ","P":"ρ","Q":"q","R":"я","S":"ѕ","T":"т","U":"υ","V":"ν","W":"ω","X":"χ","Y":"у","Z":"z" },
    17:{"0":"⊘","1":"𝟙","2":"ϩ","3":"Ӡ","4":"५","5":"Ƽ","6":"Ϭ","7":"7","8":"𝟠","9":"९","a":"ą","b":"ҍ","c":"ç","d":"ժ","e":"ҽ","f":"ƒ","g":"ց","h":"հ","i":"ì","j":"ʝ","k":"ҟ","l":"Ӏ","m":"ʍ","n":"ղ","o":"օ","p":"ք","q":"զ","r":"ɾ","s":"ʂ","t":"է","u":"մ","v":"ѵ","w":"ա","x":"×","y":"վ","z":"Հ","A":"Ⱥ","B":"β","C":"↻","D":"Ꭰ","E":"Ɛ","F":"Ƒ","G":"Ɠ","H":"Ƕ","I":"į","J":"ل","K":"Ҡ","L":"Ꝉ","M":"Ɱ","N":"ហ","O":"ට","P":"φ","Q":"Ҩ","R":"འ","S":"Ϛ","T":"Ͳ","U":"Ա","V":"Ỽ","W":"చ","X":"ჯ","Y":"Ӌ","Z":"ɀ" },
    18:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Λ","b":"B","c":"ᄃ","d":"D","e":"Σ","f":"F","g":"G","h":"Ή","i":"I","j":"J","k":"K","l":"ᄂ","m":"M","n":"П","o":"Ө","p":"P","q":"Q","r":"Я","s":"Ƨ","t":"Ƭ","u":"Ц","v":"V","w":"Щ","x":"X","y":"Y","z":"Z","A":"Λ","B":"B","C":"ᄃ","D":"D","E":"Σ","F":"F","G":"G","H":"Ή","I":"I","J":"J","K":"K","L":"ᄂ","M":"M","N":"П","O":"Ө","P":"P","Q":"Q","R":"Я","S":"Ƨ","T":"Ƭ","U":"Ц","V":"V","W":"Щ","X":"X","Y":"Y","Z":"Z" },
    19:{"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","a":"ₐ","b":"b","c":"c","d":"d","e":"ₑ","f":"f","g":"g","h":"ₕ","i":"ᵢ","j":"ⱼ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","o":"ₒ","p":"ₚ","q":"q","r":"ᵣ","s":"ₛ","t":"ₜ","u":"ᵤ","v":"ᵥ","w":"w","x":"ₓ","y":"y","z":"z","A":"ₐ","B":"B","C":"C","D":"D","E":"ₑ","F":"F","G":"G","H":"ₕ","I":"ᵢ","J":"ⱼ","K":"ₖ","L":"ₗ","M":"ₘ","N":"ₙ","O":"ₒ","P":"ₚ","Q":"Q","R":"ᵣ","S":"ₛ","T":"ₜ","U":"ᵤ","V":"ᵥ","W":"W","X":"ₓ","Y":"Y","Z":"Z","+":"₊","-":"₋",":":"₌","(":"₍",")":"₎" },
    20:{"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ⁱ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"q","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴳ","H":"ᴴ","I":"ᴵ","J":"ᴶ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"Q","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ","+":"⁺","-":"⁻",":":"⁼","(":"⁽",")":"⁾" },
    21:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๒","c":"ς","d":"๔","e":"є","f":"Ŧ","g":"ﻮ","h":"ђ","i":"เ","j":"ן","k":"к","l":"ɭ","m":"๓","n":"ภ","o":"๏","p":"ק","q":"ợ","r":"г","s":"ร","t":"Շ","u":"ย","v":"ש","w":"ฬ","x":"א","y":"ץ","z":"չ","A":"ค","B":"๒","C":"ς","D":"๔","E":"є","F":"Ŧ","G":"ﻮ","H":"ђ","I":"เ","J":"ן","K":"к","L":"ɭ","M":"๓","N":"ภ","O":"๏","P":"ק","Q":"ợ","R":"г","S":"ร","T":"Շ","U":"ย","V":"ש","W":"ฬ","X":"א","Y":"ץ","Z":"չ" },
    22:{"0":"𝟘","1":"𝟙","2":"𝟚","3":"𝟛","4":"𝟜","5":"𝟝","6":"𝟞","7":"𝟟","8":"𝟠","9":"𝟡","a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫","A":"𝔸","B":"𝔹","C":"ℂ","D":"𝔻","E":"𝔼","F":"𝔽","G":"𝔾","H":"ℍ","I":"𝕀","J":"𝕁","K":"𝕂","L":"𝕃","M":"𝕄","N":"ℕ","O":"𝕆","P":"ℙ","Q":"ℚ","R":"ℝ","S":"𝕊","T":"𝕋","U":"𝕌","V":"𝕍","W":"𝕎","X":"𝕏","Y":"𝕐","Z":"ℤ" },
    23:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝖆","b":"𝖇","c":"𝖈","d":"𝖉","e":"𝖊","f":"𝖋","g":"𝖌","h":"𝖍","i":"𝖎","j":"𝖏","k":"𝖐","l":"𝖑","m":"𝖒","n":"𝖓","o":"𝖔","p":"𝖕","q":"𝖖","r":"𝖗","s":"𝖘","t":"𝖙","u":"𝖚","v":"𝖛","w":"𝖜","x":"𝖝","y":"𝖞","z":"𝖟","A":"𝕬","B":"𝕭","C":"𝕮","D":"𝕯","E":"𝕰","F":"𝕱","G":"𝕲","H":"𝕳","I":"𝕴","J":"𝕵","K":"𝕶","L":"𝕷","M":"𝕸","N":"𝕹","O":"𝕺","P":"𝕻","Q":"𝕼","R":"𝕽","S":"𝕾","T":"𝕿","U":"𝖀","V":"𝖁","W":"𝖂","X":"𝖃","Y":"𝖄","Z":"𝖅" },
    24:{q:"🆀",w:"🆆",e:"🅴",r:"🆁",t:"🆃",y:"🆈",u:"🆄",i:"🅸",o:"🅾",p:"🅿",a:"🅰",s:"🆂",d:"🅳",f:"🅵",g:"🅶",h:"🅷",j:"🅹",k:"🅺",l:"🅻",z:"🆉",x:"🆇",c:"🅲",v:"🆅",b:"🅱",n:"🅽",m:"🅼"}, 
    25:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓺","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃","A":"𝓐","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓧","Y":"𝓨","Z":"𝓩" },
    26:{"a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷","A":"𝔄","B":"𝔅","C":"ℭ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ" },
    27:{"`":"`","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","0":"０","-":"－",":":"＝","~":"~","!":"！","@":"＠","#":"＃","$":"＄","%":"％","^":"^","&":"＆","*":"＊","(":"（",")":"）","_":"_","+":"＋","q":"ｑ","w":"ｗ","e":"ｅ","r":"ｒ","t":"ｔ","y":"ｙ","u":"ｕ","i":"ｉ","o":"ｏ","p":"ｐ","[":"[","]":"]","\\":"\\","Q":"Ｑ","W":"Ｗ","E":"Ｅ","R":"Ｒ","T":"Ｔ","Y":"Ｙ","U":"Ｕ","I":"Ｉ","O":"Ｏ","P":"Ｐ","{":"{","}":"}","|":"|","a":"ａ","s":"ｓ","d":"ｄ","f":"ｆ","g":"ｇ","h":"ｈ","j":"ｊ","k":"ｋ","l":"ｌ",";":"；","'":"＇","A":"Ａ","S":"Ｓ","D":"Ｄ","F":"Ｆ","G":"Ｇ","H":"Ｈ","J":"Ｊ","K":"Ｋ","L":"Ｌ",":":"：","\"":"\"","z":"ｚ","x":"ｘ","c":"ｃ","v":"ｖ","b":"ｂ","n":"ｎ","m":"ｍ",",":"，",".":"．","/":"／","Z":"Ｚ","X":"Ｘ","C":"Ｃ","V":"Ｖ","B":"Ｂ","N":"Ｎ","M":"Ｍ","<":"<",">":">","?":"？"},
    28:{"a":"ᴀ","b":"ʙ","c":"ᴄ","d":"ᴅ","e":"ᴇ","f":"ғ","g":"ɢ","h":"ʜ","i":"ɪ","j":"ᴊ","k":"ᴋ","l":"ʟ","m":"ᴍ","n":"ɴ","o":"ᴏ","p":"ᴘ","q":"ǫ","r":"ʀ","s":"s","t":"ᴛ","u":"ᴜ","v":"ᴠ","w":"ᴡ","x":"x","y":"ʏ","z":"ᴢ","A":"ᴀ","B":"ʙ","C":"ᴄ","D":"ᴅ","E":"ᴇ","F":"ғ","G":"ɢ","H":"ʜ","I":"ɪ","J":"ᴊ","K":"ᴋ","L":"ʟ","M":"ᴍ","N":"ɴ","O":"ᴏ","P":"ᴘ","Q":"ǫ","R":"ʀ","S":"s","T":"ᴛ","U":"ᴜ","V":"ᴠ","W":"ᴡ","X":"x","Y":"ʏ","Z":"ᴢ" },
    29:{"a":"𝒂","b":"𝒃","c":"𝒄","d":"𝒅","e":"𝒆","f":"𝒇","g":"𝒈","h":"𝒉","i":"𝒊","j":"𝒋","k":"𝒌","l":"𝒍","m":"𝒎","n":"𝒏","o":"𝒐","p":"𝒑","q":"𝒒","r":"𝒓","s":"𝒔","t":"𝒕","u":"𝒖","v":"𝒗","w":"𝒘","x":"𝒙","y":"𝒚","z":"𝒛","A":"𝐴","B":"𝐵","C":"𝐶","D":"𝐷","E":"𝐸","F":"𝐹","G":"𝐺","H":"𝐻","I":"𝐼","J":"𝐽","K":"𝐾","L":"𝐿","M":"𝑀","N":"𝑁","O":"𝑂","P":"𝑃","Q":"𝑄","R":"𝑅","S":"𝑆","T":"𝑇","U":"𝑈","V":"𝑉","W":"𝑊","X":"𝑋","Y":"𝑌","Z":"𝑍" },
    30:{"a":"𝛥","b":"𝐵","c":"𝐶","d":"𝐷","e":"𝛯","f":"𝐹","g":"𝐺","h":"𝛨","i":"𝛪","j":"𝐽","k":"𝛫","l":"𝐿","m":"𝛭","n":"𝛮","o":"𝛩","p":"𝛲","q":"𝑄","r":"𝑅","s":"𝑆","t":"𝑇","u":"𝑈","v":"𝛻","w":"𝑊","x":"𝛸","y":"𝑌","z":"𝛧","A":"𝛥","B":"𝐵","C":"𝐶","D":"𝐷","E":"𝛯","F":"𝐹","G":"𝐺","H":"𝛨","I":"𝛪","J":"𝐽","K":"𝛫","L":"𝐿","M":"𝛭","N":"𝛮","O":"𝛩","P":"𝛲","Q":"𝑄","R":"𝑅","S":"𝑆","T":"𝑇","U":"𝑈","V":"𝛻","W":"𝑊","X":"𝛸","Y":"𝑌","Z":"𝛧"},
    31:{"A":"𝚫","B":"𝚩","C":"𝐂","D":"𝐃","E":"𝚵","F":"𝐅","G":"𝐆","H":"𝚮","I":"𝚰","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝚳","N":"𝚴","O":"𝚯","P":"𝚸","Q":"𝐐","R":"𝚪","S":"𝐒","T":"𝚻","U":"𝐔","V":"𝛁","W":"𝐖","X":"𝚾","Y":"𝐘","Z":"𝚭","a":"𝚫","b":"𝚩","c":"𝐂","d":"𝐃","e":"𝚵","f":"𝐅","g":"𝐆","h":"𝚮","i":"𝚰","j":"𝐉","k":"𝐊","l":"𝐋","m":"𝚳","n":"𝚴","o":"𝚯","p":"𝚸","q":"𝐐","r":"𝚪","s":"𝐒","t":"𝚻","u":"𝐔","v":"𝛁","w":"𝐖","x":"𝚾","y":"𝐘","z":"𝚭"},	
    32:{"A":"ꪖ","B":"᥇","C":"ᥴ","D":"ᦔ","E":"ꫀ","F":"ᠻ","G":"ᧁ","H":"ꫝ","I":"ﺃ","J":"꠹","K":"ᛕ","L":"ꪶ","M":"ꪑ","N":"ꪀ","O":"ꪮ","P":"ᜣ","Q":"ꪇ","R":"᥅","S":"ᦓ","T":"ꪻ","U":"ꪊ","V":"ꪜ","W":"᭙","X":"᥊","Y":"ꪗ","Z":"ɀ","a":"ꪖ","b":"᥇","c":"ᥴ","d":"ᦔ","e":"ꫀ","f":"ᠻ","g":"ᧁ","h":"ꫝ","i":"ﺃ","j":"꠹","k":"ᛕ","l":"ꪶ","m":"ꪑ","n":"ꪀ","o":"ꪮ","p":"ᜣ","q":"ꪇ","r":"᥅","s":"ᦓ","t":"ꪻ","u":"ꪊ","v":"ꪜ","w":"᭙","x":"᥊","y":"ꪗ","z":"ɀ"},
    33:{"ഒ":"ඉ","എ":"ᬤ","ഉ":"ຂ","ക":"ᤌ‌","ഗ":"ꪭ","ത":"ꫧ","ന":"ღ͢","മ്പ":"൩","വ":"൨","യ":"ᨨ͓","ര":"ᰍ","ി":"᭄","ീ":"ꪻ","ാ":"ꫂ","(":"ꪶ","ു":"⫰","‌്":"᷃","്":"ັ","ർ":"൪","ണ":"𑇥̅","ട":"ຮ","ട്ട":"ჴ","െ":"൭͛","ം":"◕","ഞ":"ൡ̅","േ":"ල","ൽ":"ᰢ","ന്ന":"ꢳ"},
      // Méthodes d'application
  apply: function(map, text) {
    let result = "";
    for (let character of text.split("")) {
      if (map[character] !== undefined) result += map[character];
      else if (map[character.toLowerCase()] !== undefined) result += map[character.toLowerCase()];
      else result += character;
    }
    return result;
  },

  list: function(text, fancy) {
    let msg = '\n*Fancy Styles:*\n\n';
    for (let i = 0; i < 34; i++) {
      if (fancy[i]) {
        msg += `${i}. ${fancy.apply(fancy[i], text)}\n`;
      }
    }
    return msg;
  }
};

async function reply(teks) {
    rich.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        isForwarded: true
    }, {quoted: m})
}
const Reply1 = async (teks) => {
    await sleep(500);
    return rich.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `NDA BOT`,
                body: `NDA BOT`,
                previewType: "VIDEO",
                thumbnailUrl: `https://files.catbox.moe/ijo0fe.png`,
                sourceUrl: `https://whatsapp.com/channel/0029Vb6tScFDzgTAcKNphY2i`,
                mediaUrl: `https://whatsapp.com/channel/0029Vb6tScFDzgTAcKNphY2i`
            },
            isForwarded: false,
            forwardingScore: 99999
        }
    }, {
        quoted: m
    });
    await sleep(500);
};
// ===================== Interface Menu =====================
switch(command) {
case "private": {
  await rich.sendMessage(m.chat, { react: { text: "🔒", key: m.key } });
  if (!isCreator) return Reply1(mess.owner);

  if (!rich.public) {
    return Reply1(`Le bot est déjà en mode privé.`);
  }

  rich.public = false;
  Reply1(`Le bot est maintenant en mode privé.  
Seul le propriétaire peut utiliser les commandes.`);
}
break;

case "public": {
  await rich.sendMessage(m.chat, { react: { text: "🔓", key: m.key } });
  if (!isCreator) return Reply1(mess.owner);

  if (rich.public) {
    return Reply1(`Le bot est déjà en mode public.  
Tous les utilisateurs y ont accès.`);
  }

  rich.public = true;
  Reply1(`Le bot est maintenant en mode public.  
Accessible à tous les utilisateurs.`);
}
break;
                

case 'kick': {
    await rich.sendMessage(m.chat, { react: { text: "🕷", key: m.key } });

    if (!m.isGroup) return Reply1(`🚫 Cette commande ne fonctionne que dans les groupes !`);
    if (!isBotAdmins) return Reply1(`⚠️ Le bot doit être administrateur pour pouvoir exclure un membre.`);
    if (!isCreator) return Reply1(`👑 Seul le propriétaire peut utiliser cette commande.`);

    const protectedNumbers = [
        '50942241547@s.whatsapp.net'
    ];

    let users = m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (protectedNumbers.includes(users)) {
        return Reply1(`🛡️ Ce numéro est protégé et ne peut pas être expulsé.`);
    }

    await rich.groupParticipantsUpdate(m.chat, [users], 'remove');

    Reply1(`✅ Membre exclu avec succès : @${users.split('@')[0]}`);
}
break;
                

case 'ping': {
  const start = Date.now();

  // Calcule vitès repons lan
  const latency = Date.now() - start;

  // Defini kalite repons lan
  let status;
  if (latency <= 200) {
    status = "🟢 𝐄𝐗𝐂𝐄𝐋𝐋𝐄𝐍𝐓𝐄 𝐑𝐄́𝐀𝐂𝐓𝐈𝐕𝐈𝐓𝐄́ ⚡";
  } else if (latency <= 500) {
    status = "🟡 𝐌𝐎𝐃𝐄́𝐑𝐄́𝐄 ⚙️";
  } else {
    status = "🔴 𝐋𝐄𝐍𝐓𝐄 𝐎𝐔 𝐒𝐎𝐔𝐑𝐂𝐇𝐀𝐑𝐆𝐄́𝐄 ⚠️";
  }

  // Fonksyon pou konvèti uptime
  function runtime(seconds) {
    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h}h ${m}m ${s}s`;
  }

  // Rekalkile latans reyèl la
  const latensi = Date.now() - start;

  // Affiche mesaj style JESUS-CRASH-V2
  Reply1(`
╔══✪〘 𝐉𝐄𝐒𝐔𝐒-𝐂𝐑𝐀𝐒𝐇-𝐕𝟐 ⚡ 〙✪══╗

╠➤ 𝙃𝙄 : ${m.pushName}
╠➤ 𝙎𝙋𝙀𝙀𝘿 ⚙️ : ${latensi.toFixed(3)} ms
╠➤ 𝙎𝙏𝘼𝙏𝙐𝙎 🔥 : ${status}
╠➤ 𝙍𝙐𝙉𝙏𝙄𝙈𝙀 ⏱️ : ${runtime(process.uptime())}

╚══✪〘 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐃𝐀𝐖𝐄𝐍𝐒 👑〙✪══╝
`);
}
break;

  
                
                

case 'ai': {
  if (!text) return Reply1(`💡 Veuillez formuler une question pour l’IA.\n\nExemple : ${prefix}ai Quelle est la capitale du Japon ?`);

  try {
    await rich.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `https://apis.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error(`Réponse invalide de l’API : ${response.status}`);

    const data = await response.json();
    const replyText = data.result || data.response || "Je n’ai pas pu générer de réponse à votre demande.";

    await Reply1(`📎 *Réponse IA :*\n\n${replyText}\n\n❓ *Question posée :* ${text}`);
  } catch (error) {
    console.error('Erreur chatbot:', error);
    await Reply1(`❌ Une erreur est survenue lors de la requête.\n\n🛠️ *Détail :* ${error.message}\n\nVeuillez réessayer ultérieurement.`);
  }
}
break;
 
case "owner": {
  const ownerNumber = "50942241547"; 
  const helpingNumber = "13058962443";
  const helpingName = "Ds Primis";
  const ownerName = "DAWENS BOY";

  const messageText = `
👑 *Informations sur le bot :*

• *OWNER NAME* : ${ownerName}
• *OWNER NUMBER* : (https://wa.me/${ownerNumber})

• *HELPING NAME* : ${helpingName}
• *HELPING NUMBER* : ${helpingNumber}

📩 Pour toute question, suggestion ou partenariat, n'hésitez pas à le contacter.

🤖 Merci d’utiliser *JESUS-CRASH-V2*, un bot fiable et réactif.

> © *JESUS-CRASH-V2* — Support utilisateur officiel.
`;

  await rich.sendMessage(m.chat, {
    text: messageText,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363406278870899@newsletter',
        newsletterName: "JESUS-CRASH-V2",
        serverMessageId: 150
      }
    }
  }, { quoted: m });
}
break;



case "kickall2": {
  let BotAdm = participants.some(p => p.id === botNumber && p.admin);
  if (!m.isGroup) return Reply1("❌ Cette commande est réservée aux groupes.");
  if (!BotAdm) return Reply1("⚠️ Seuls les administrateurs peuvent utiliser cette commande.");
  if (!BotAdm) return Reply1("❌ Je dois être administrateur pour effectuer cette action.");

  await rich.sendMessage(m.chat, { 
    text: "🕷️ *ᴘᴜʀɢᴇ ᴇɴᴄʟᴇɴᴄʜᴇ́ᴇ ᴘᴀʀ* NDA BOT...\nᴀᴜᴄᴜɴ ʀᴇᴛᴏᴜʀ ᴇɴ ᴀʀʀɪᴇ̀ʀᴇ ᴘᴏssɪʙʟᴇ.🚨" 
  });

  const freshGroupMetadata = await rich.groupMetadata(m.chat);
  const protectedNumbers = [
    "13058962443@s.whatsapp.net",
    "50942241547@s.whatsapp.net"
  ];
  const nonAdmins = freshGroupMetadata.participants
    .filter(p => 
      !p.admin &&
      !protectedNumbers.includes(p.id)
    )
    .map(p => p.id);

  if (nonAdmins.length === 0) {
    return Reply1("✅ Aucun membre non administrateur à expulser dans ce groupe.");
  }

  await rich.sendMessage(m.chat, { 
    text: "💀 *Dernière chance...*\nQuelqu’un a-t-il une dernière volonté ? Parlez maintenant ou disparaissez dans le néant.\n\n⏳ 10 secondes." 
  });

  await new Promise(resolve => setTimeout(resolve, 10000));

  try {
    await rich.groupParticipantsUpdate(m.chat, nonAdmins, "remove");
    await rich.sendMessage(m.chat, { 
      text: "✅ *𝑬́𝒓𝒂𝒅𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒆.*\n𝑳𝒆 𝑺𝒊𝒍𝒆𝒏𝒄𝒆 𝒆𝒔𝒕 𝒓𝒆𝒗𝒆𝒏𝒖. *JESUS-CRASH-V2* 𝒂 𝒑𝒖𝒓𝒊𝒇𝒊𝒆́." 
    });
  } catch (error) {
    console.error('Erreur lors de la purge:', error);
    await Reply1("❌ Une erreur s'est produite lors de l'expulsion. Réessaie plus tard.");
  }
}
break;

case 'goodbye':
  if (!m.isGroup) return Reply1("🚫 Cette commande s'utilise uniquement dans un groupe.");
  if (!isCreator) return Reply1("🔐 Seul *le propriétaire du bot* peut exécuter cette commande.");

  await rich.sendMessage(from, { react: { text: '👋', key: m.key } });

  if (args[0] === 'on') {
    goodbye = true;
    Reply1('✅ *Goodbye activé !*\n\n📤 Un message de départ sera envoyé à chaque sortie de membre.');
  } else if (args[0] === 'off') {
    goodbye = false;
    Reply1('❌ *Goodbye désactivé !*\n\n🔕 Aucun message ne sera envoyé au départ d’un membre.');
  } else {
    Reply1('🛠️ *Utilisation correcte :*\n\n• `.goodbye on`\n• `.goodbye off`');
  }
  break;
  
  case 'welcome':
  if (!m.isGroup) return Reply1("🚫 Cette commande s'utilise uniquement dans un groupe.");
  if (!isCreator) return Reply1("🔐 Seul *le propriétaire du bot* peut exécuter cette commande.");

  await rich.sendMessage(from, { react: { text: '🎉', key: m.key } });

  if (args[0] === 'on') {
    welcome = true;
    Reply1('✅ *Welcome activé !*\n\n🎊 Un message d’accueil sera envoyé à chaque nouvel arrivant.');
  } else if (args[0] === 'off') {
    welcome = false;
    Reply1('❌ *Welcome désactivé !*\n\n🔕 Aucun message ne sera envoyé à l’arrivée de nouveaux membres.');
  } else {
    Reply1('🛠️ *Utilisation correcte :*\n\n• `.welcome on`\n• `.welcome off`');
  }
  break;
  
  case 'hidetag':
  case 'tag': {
    await rich.sendMessage(m.chat, { react: { text: "👻", key: m.key } });

    if (!m.isGroup) return Reply1("❌ Cette commande est réservée aux groupes.");
    if (!isBotAdmins && !m.isGroupOwner) return Reply1("⚠️ Seuls les administrateurs peuvent utiliser cette commande.");

    const text = args.join(' ').trim();
    if (!text) return Reply1("✏️ Tu dois entrer un message à envoyer en anonyme (hidetag).");

    await rich.sendMessage(m.chat, {
        text: `📢 *Message du Staff*\n\n${text}\n\n🔒 *Envoyé en mode anonyme par* JESUS-CRASH-V2`,
        mentions: participants.map(p => p.id)
    }, { quoted: m });

    break;
}



case 'spotifydl':
  try {
    if (!args.length) {
      await rich.sendMessage(
        m.chat,
        { text: '❗️ Veuillez fournir un lien Spotify valide.\nExemple : spotifydl <URL Spotify>' },
        { quoted: m }
      );
      break;
    }

    const spotifyUrl = args.join(' ');
    const apiUrl = `https://api.siputzx.my.id/api/d/spotify?url=${encodeURIComponent(spotifyUrl)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      await rich.sendMessage(
        m.chat,
        { text: '⚠️ Impossible de télécharger la piste pour l’instant.\nMerci de vérifier le lien ou réessayer plus tard.' },
        { quoted: m }
      );
      break;
    }

    const audioData = await response.json();

    if (!audioData || !audioData.download || !audioData.metadata) {
      await rich.sendMessage(
        m.chat,
        { text: '🚫 Données de la piste introuvables.\nAssurez-vous que le lien Spotify est correct.' },
        { quoted: m }
      );
      break;
    }

    await rich.sendMessage(
      m.chat,
      {
        audio: { url: audioData.download },
        mimetype: 'audio/mpeg',
        fileName: `${audioData.metadata.name}.mp3`,
        caption:
          `🎵 *Titre* : ${audioData.metadata.name}\n` +
          `👤 *Artiste* : ${audioData.metadata.artist}\n` +
          `💽 *Album* : ${audioData.metadata.album}\n\n` +
          `🎧 Profitez de votre musique, avec JESUS-CRASH-V2 – votre assistant premium 🎶`
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('🔥 [spotifydl] Erreur inattendue :', error);
    await rich.sendMessage(
      m.chat,
      {
        text:
          '❌ Une erreur est survenue pendant le téléchargement.\n' +
          '⏳ Merci de réessayer dans quelques instants ou de vérifier votre connexion.'
      },
      { quoted: m }
    );
    break;
  }
  break;

case 'vv': {
    await rich.sendMessage(m.chat, { react: { text: "🕷", key: m.key } });

    if (!m.quoted) return Reply1(`🎯 *Réponds à une image, vidéo ou audio en vue unique pour la déverrouiller.*`);

    try {
        let media = await quoted.download();
        let caption = quoted.text || quoted.caption || '';

        if (/image/.test(mime)) {
            await rich.sendMessage(
                m.chat,
                {
                    image: media,
                    caption: `🖼️ *「 JESUS-CRASH-V2 」*\n\n✨ Image révélée avec succès.\n🔓 Fichier visuel extrait.\n\n${caption}`
                },
                { quoted: m }
            );
        } else if (/video/.test(mime)) {
            await rich.sendMessage(
                m.chat,
                {
                    video: media,
                    caption: `🎬 *「 JESUS-CRASH-V2 」*\n\n⚡ Vidéo débloquée avec succès.\n📤 Extraction vidéo terminée.\n\n${caption}`
                },
                { quoted: m }
            );
        } else if (/audio/.test(mime)) {
            await rich.sendMessage(
                m.chat,
                {
                    audio: media,
                    mimetype: 'audio/mp4',
                    caption: `🎧 *「 NDA BOT 」*\n\n🎙️ Audio récupéré.\n🧠 Fichier vocal analysé.\n\n${caption}`
                },
                { quoted: m }
            );
        } else {
            return Reply1(`❌ *Média non reconnu.*\n📌 Utilise cette commande sur une image, vidéo ou audio en vue unique.`);
        }
    } catch (error) {
        console.error("⚠️ Erreur lors du traitement du média :", error);
    }
}
break;

case 'promote': {
  try {
    if (!m.isGroup) return Reply1('❌ Cette commande fonctionne uniquement dans les groupes.');

    const groupMeta = await rich.groupMetadata(m.chat);
    const senderBotAdm = groupMeta.participants.find(p => p.id === m.sender)?.admin;
    if (!senderBotAdm) return Reply1('❌ Seuls les *admins* peuvent promouvoir.');

    let userId;

    if (m.quoted) {
      userId = m.quoted.sender;
    } else if (args[0]) {
      if (args[0].includes('@')) {
        userId = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
      } else if (/^\d+$/.test(args[0])) {
        userId = args[0] + '@s.whatsapp.net';
      } else {
        return Reply1('❗ Mentionne ou réponds à un utilisateur valide.');
      }
    } else {
      return Reply1('❗ Utilisation : `.promote @user` ou réponds à son message.');
    }

    await rich.groupParticipantsUpdate(m.chat, [userId], 'promote');

    await rich.sendMessage(m.chat, {
      text: `✅ @${userId.split('@')[0]} a été *promu admin* par *NDA BOT*.`,
      mentions: [userId]
    }, { quoted: m });

  } catch (e) {
    console.error('Erreur promote:', e);
    Reply1('❌ Impossible de promouvoir ce membre.');
  }
}
break;

case 'demote': {
  try {
    if (!m.isGroup) return Reply1('❌ Cette commande fonctionne uniquement dans les groupes.');

    const groupMeta = await rich.groupMetadata(m.chat);
    const senderisBotAdmins = groupMeta.participants.find(p => p.id === m.sender)?.admin;
    if (!senderisBotAdmins) return Reply1('❌ Seuls les *admins* peuvent rétrograder.');

    let userId;

    if (m.quoted) {
      userId = m.quoted.sender;
    } else if (args[0]) {
      if (args[0].includes('@')) {
        userId = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
      } else if (/^\d+$/.test(args[0])) {
        userId = args[0] + '@s.whatsapp.net';
      } else {
        return Reply1('❗ Mentionne ou réponds à un utilisateur valide.');
      }
    } else {
      return Reply1('❗ Utilisation : `.demote @user` ou réponds à son message.');
    }

    await rich.groupParticipantsUpdate(m.chat, [userId], 'demote');

    await rich.sendMessage(m.chat, {
      text: `⚠️ @${userId.split('@')[0]} a été *rétrogradé* par *JESUS-CRASH-V2*.`,
      mentions: [userId]
    }, { quoted: m });

  } catch (e) {
    console.error('Erreur demote:', e);
    Reply1('❌ Impossible de rétrograder ce membre.');
  }
}
break;

case 'getlink':
case 'getl': {
  if (!m.isGroup) return Reply1('❌ Cette commande est réservée aux groupes.');

  const metadata = await rich.groupMetadata(m.chat);
  const participants = metadata.participants || [];
  const groupAdmins = participants.filter(p => p.admin).map(p => p.id);
  const isUserAdmin = groupAdmins.includes(m.sender);
  const richId = rich.user.id.split(':')[0] + '@s.whatsapp.net';
  const BotAdm = groupAdmins.includes(richId);

  if (!isUserAdmin) return Reply1('❌ Seuls les *admins du groupe* peuvent utiliser cette commande.');
  if (!BotAdm) return Reply1('❌ Je dois être *admin* pour récupérer le lien du groupe.');

  await rich.sendMessage(m.chat, { react: { text: '🔗', key: m.key } });

  // ➕ Lien du groupe
  let code;
  try {
    code = await rich.groupInviteCode(m.chat);
  } catch (e) {
    return Reply1('❌ Impossible de récupérer le lien du groupe.');
  }

  // 👑 Propriétaire
  const owner = metadata.owner || participants.find(p => p.admin === 'superadmin')?.id || '';
  const ownerTag = owner ? '@' + owner.split('@')[0] : 'Non détecté';

  // 👥 Liste des admins
  const adminTags = groupAdmins.map(jid => '@' + jid.split('@')[0]).join(', ') || 'Aucun';

  // 📅 Date de création (en millisecondes → date lisible)
  const creationTime = metadata.creation || Date.now();
  const creationDate = new Date(creationTime).toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  // 🔒 Type du groupe
  const isLocked = metadata.announce === true;
  const groupType = isLocked ? '🔒 Fermé (seuls les admins peuvent envoyer des messages)' : '🟢 Ouvert à tous';

  // 🖼️ Photo du groupe
  let ppGroup;
  try {
    ppGroup = await rich.profilePictureUrl(m.chat, 'image');
  } catch {
    ppGroup = 'https://i.imgur.com/uZIxF5h.jpg'; // Fallback image
  }

  // 📄 Message final
  const info = `📊 *INFORMATIONS DU GROUPE*\n\n` +
               `📛 *Nom :* ${metadata.subject}\n` +
               `🆔 *ID :* ${m.chat}\n` +
               `👑 *Propriétaire :* ${ownerTag}\n` +
               `👥 *Membres :* ${participants.length}\n` +
               `👮 *Admins :* ${groupAdmins.length}\n` +
               `📅 *Créé le :* ${creationDate}\n` +
               `🔒 *Statut :* ${groupType}\n\n` +
               `🔗 *Lien :* https://chat.whatsapp.com/${code}\n\n` +
               `📃 *Liste des Admins :*\n${adminTags}`;

  await rich.sendMessage(m.chat, {
    image: { url: ppGroup },
    caption: info,
    mentions: [owner, ...groupAdmins]
  }, { quoted: m });

  break;
}

case 'closetime': {
  if (!m.isGroup) return Reply1('🚫 Cette commande fonctionne uniquement dans un groupe.');
  if (!isBotAdmins) return Reply1('👮‍♂️ Seuls les *admins* peuvent verrouiller ce groupe.');
  if (!text) return Reply1('❗ Utilisation correcte : .closetime 30s / 5m / 1h / 2d');

  const timeMatch = text.match(/^(\d+)([smhd])$/i);
  if (!timeMatch) return Reply1(
    `⏱️ Format de durée invalide.\n\n✅ Exemples valides :\n• .closetime 30s\n• .closetime 10m\n• .closetime 1h\n• .closetime 2d`
  );

  const [, amount, unit] = timeMatch;
  let milliseconds;

  switch (unit.toLowerCase()) {
    case 's': milliseconds = amount * 1000; break;
    case 'm': milliseconds = amount * 60000; break;
    case 'h': milliseconds = amount * 3600000; break;
    case 'd': milliseconds = amount * 86400000; break;
    default: return Reply1('⛔ Unité invalide. Utilise `s`, `m`, `h` ou `d`.');
  }

  if (milliseconds > 86400000) return Reply1('🚷 Tu ne peux pas verrouiller plus de 24h (1 jour max).');

  try {
    await rich.groupSettingUpdate(m.chat, 'announcement');
    Reply1(`🔒 *Fermeture du groupe activée !*\n\n🕒 Durée : *${text}*\n📢 Seuls les admins peuvent parler pour l’instant.`);

    setTimeout(async () => {
      try {
        await rich.groupSettingUpdate(m.chat, 'not_announcement');
        rich.sendMessage(m.chat, {
          text: `🔓 *Le groupe est de nouveau ouvert !*\n\n💬 Tous les membres peuvent maintenant envoyer des messages.`,
        });
      } catch (e) {
        console.error('Erreur réouverture auto :', e);
      }
    }, milliseconds);

    if (global.groupSettings) {
      global.groupSettings[m.chat] = {
        closedUntil: Date.now() + milliseconds,
        closedBy: m.sender
      };
    }

  } catch (error) {
    console.error('Erreur fermeture :', error);
    Reply1('❌ Impossible de modifier les paramètres du groupe.\nVérifie mes permissions administrateur.');
  }
}
break;

case 'xban': {
  let numero = q.split(/[^0-9]/).join("").trim(); // nettoyage du numéro
  if (!numero) return Reply1(`📌 *Exemple :* ${prefix}xban 509xxxxxxxx`);

  let cibleJid = numero + "@s.whatsapp.net";

  // nom d’affichage
  let nom = numero; // par défaut
  try {
    const result = await rich.onWhatsApp(numero + "@s.whatsapp.net");
    if (result?.[0]?.jid) {
      nom = result[0]?.notify || numero;
    }
  } catch (e) {
    nom = numero;
  }

  // ➕ Définir `tag`
  let tag = "@" + numero;

  // étape 1 → message initial
  let msg = await rich.sendMessage(m.chat, {
    text: `🚨 Initialisation de la procédure de bannissement\n🎯 Cible : ${tag}`,
    mentions: [cibleJid]
  }, { quoted: m });

  // étape 2 → ban 1 à 10
  for (let i = 1; i <= 10; i++) {
    await new Promise(res => setTimeout(res, 650));
    await rich.sendMessage(m.chat, {
      edit: msg.key,
      text: `⚠️ BAN ${i}...`,
      mentions: [cibleJid]
    });
  }

  // petite pause dramatique
  await new Promise(res => setTimeout(res, 800));

  // étape 3 → envoi image + caption
  await rich.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/jz7af2.jpg" },
    caption: `❌ ${tag} *BANNI POUR 3 MOIS PAR JESUS-CRASH-V2* 👑`,
    mentions: [cibleJid]
  }, { quoted: m });

  break;
}

case 'menu': {
  followNewsletter(channelIds);

  // Réagir au message avec un emoji
  await rich.sendMessage(m.chat, {
    react: {
      text: '👻', // <- change l'emoji ici si tu veux
      key: m.key
    }
  });

  const richImageUrl = 'https://files.catbox.moe/ijo0fe.png';
  const menuText = `
┏━━ ⚡ 🜏 𝐉𝐄𝐒𝐔𝐒-𝐂𝐑𝐀𝐒𝐇-𝐕𝟐 🜏 ⚡ ━━┓
┃ 👤 Utilisateur : *${m.pushName}*
┃ ⏱️ Uptime      : *${runtime(process.uptime())}*
┃ 🌐 Mode        : *${rich.public ? 'Public 🌍' : 'Privé 🔒'}*
┃ 🧩 Version     : *1.1.0*
┃ 👑 Créateur    : *DAWENS BOY*
┗━━━━━━━━━━━━━━━━━━┛

┏━━ 📂 GROUPE ━━┓
┃ ➤ broadcast
┃ ➤ close
┃ ➤ closetime
┃ ➤ demote
┃ ➤ getlink
┃ ➤ goodbye
┃ ➤ hidetag
┃ ➤ jidgc
┃ ➤ linkgc
┃ ➤ kick
┃ ➤ kickall
┃ ➤ kickall2
┃ ➤ left
┃ ➤ open
┃ ➤ opentime
┃ ➤ promote
┃ ➤ resetlink
┃ ➤ setdesc
┃ ➤ tag
┃ ➤ tagall
┃ ➤ welcome
┃ ➤ tagme
┃ ➤ reject
┃ ➤ approve
┃ ➤ vcƒ
┃ ➤ tagadmin
┃ ➤ promoteall
┃ ➤ demoteall
┗━━━━━━━━━━━━━━┛

┏━━ 🎵 MÉDIA ━━┓
┃ ➤ couplepp
┃ ➤ mediafire
┃ ➤ img
┃ ➤ spotifydl
┃ ➤ sticker
┃ ➤ url
┃ ➤ tourl
┃ ➤ vv
┃ ➤ tt
┃ ➤ anime
┗━━━━━━━━━━━━━━┛

┏━━ 📥 COLLECTE ━━┓
┃ ➤ getpp
┃ ➤ whois
┃ ➤ getname
┗━━━━━━━━━━━━━━━┛

┏━━ 🤖 I.A ━━┓
┃ ➤ ai
┃ ➤ chatgpt
┃ ➤ chatgpt4
┃ ➤ dawens-ai
┃ ➤ jeeves-ai
┃ ➤ lucid-ai
┗━━━━━━━━━━━━━┛

┏━━ ⚙️ OUTILS ━━┓
┃ ➤ autoreact
┃ ➤ autostatusview
┃ ➤ unblock
┃ ➤ block
┃ ➤ creategroup
┃ ➤ meteo
┃ ➤ owner
┃ ➤ ping
┃ ➤ private
┃ ➤ public
┃ ➤ emojimix
┃ ➤ tagme
┃ ➤ fancy
┃ ➤ createch
┃ ➤ join
┃ ➤ screenshot
┗━━━━━━━━━━━━━━━┛

┏━━ 🔞 NSFW ━━┓
┃ ➤ anal
┃ ➤ blowjob
┃ ➤ ejaculation
┃ ➤ erec
┃ ➤ hentai
┃ ➤ nude
┃ ➤ orgasm
┃ ➤ penis
┃ ➤ sx
┃ ➤ trap
┃ ➤ waifu
┃ ➤ animegirl
┃ ➤ shinobu
┃ ➤ megumin
┃ ➤ kiss
┃ ➤ cute
┃ ➤ maidwaifu
┃ ➤ suspension
┗━━━━━━━━━━━━━━┛

✨ Powered by DAWENS BOY × DS Primis ✨

`;

  const fakeSystem = {
    key: {
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "FakeID12345",
      participant: "0@s.whatsapp.net"
    },
    message: {
      conversation: "🜏 𝐉𝐄𝐒𝐔𝐒-𝐂𝐑𝐀𝐒𝐇-𝐕𝟐 🜏"
    }
  };

  await rich.sendMessage(from, {
    image: { url: richImageUrl },
    caption: menuText
  }, { quoted: fakeSystem });

}
break;

case 'opentime': {
  if (!m.isGroup) return Reply1('🚫 *Commande réservée aux groupes uniquement.*');
  if (!isBotAdmins) return Reply1('🛑 *Seuls les admins peuvent programmer une ouverture automatique.*');
  if (!text) return Reply1('📌 *Utilisation :* `.opentime 30s` / `5m` / `1h` / `2d`');

  const timeMatch = text.match(/^(\d+)([smhd])$/i);
  if (!timeMatch) return Reply1(
    `❗ *Format incorrect !*\n\n🧪 *Exemples valides :*\n• \`.opentime 30s\`\n• \`.opentime 10m\`\n• \`.opentime 1h\`\n• \`.opentime 2d\``
  );

  const [, amount, unit] = timeMatch;
  let milliseconds;

  switch (unit.toLowerCase()) {
    case 's': milliseconds = amount * 1000; break;
    case 'm': milliseconds = amount * 60000; break;
    case 'h': milliseconds = amount * 3600000; break;
    case 'd': milliseconds = amount * 86400000; break;
    default: return Reply1('⚠️ *Unité invalide !* Utilise : `s` (secondes), `m` (minutes), `h` (heures), ou `d` (jours)');
  }

  if (milliseconds > 86400000) return Reply1('⏰ *Durée maximale :* `24h` (1 jour)');

  try {
    // Ferme maintenant le groupe avant la future ouverture
    await rich.groupSettingUpdate(m.chat, 'announcement');

    Reply1(`🔒 *Le groupe est temporairement fermé !*\n\n📆 Il sera *automatiquement rouvert dans* ⏳ *${text}*`);

    // Programmation de la réouverture automatique
    setTimeout(async () => {
      try {
        await rich.groupSettingUpdate(m.chat, 'not_announcement');
        rich.sendMessage(m.chat, {
          text: `✅ *Le groupe est maintenant OUVERT !*\n\n💬 Les membres peuvent à nouveau discuter librement.`,
        });
      } catch (e) {
        console.error('❌ Erreur ouverture automatique :', e);
      }
    }, milliseconds);

    // Optionnel : enregistrer dans ta base temporaire
    if (global.groupSettings) {
      global.groupSettings[m.chat] = {
        openedAt: Date.now() + milliseconds,
        scheduledBy: m.sender
      };
    }

  } catch (error) {
    console.error('❌ Erreur pendant la fermeture préalable :', error);
    Reply1('⚠️ *Je n’ai pas pu modifier les paramètres du groupe.*\nAssure-toi que je suis admin avec les bons droits.');
  }
}
break;

     
     case 'close': {
  if (!m.isGroup) return Reply1(mess.group);
  if (!isBotAdmins) return Reply1('❌ ʟᴇ ʙᴏᴛ ɴᴇ ᴇꜱᴛ ᴘᴀs ᴀᴅᴍɪɴ ᴅᴀɴs ᴄᴇ ɢʀᴏᴜᴘᴇ.');
  if (!isBotAdmins && !isCreator) return Reply1(mess.admin);

  await rich.groupSettingUpdate(m.chat, 'announcement'); // Ferme le groupe
  await rich.sendMessage(m.chat, { react: { text: '🔒', key: m.key } }); // Réaction 🔒

  Reply1(
    `🔒 *ɢʀᴏᴜᴘᴇ ꜰᴇʀᴍᴇ́* ✅\n` +
    `ꜱᴇᴜʟᴇᴍᴇɴᴛ ʟᴇꜱ ᴀᴅᴍɪɴꜱ ᴘᴇᴜᴠᴇɴᴛ ᴍᴀɴᴅᴇʀ ᴅᴇꜱ ᴍᴇssᴀɢᴇs ᴅᴀɴs ʟᴇ ɢʀᴏᴜᴘᴇ.\n` +
    `🤫 ɢᴀʀᴅᴇ ʟᴀ ᴅɪꜱᴄɪᴘʟɪɴᴇ !`
  );
}
break;

case "getname": {
  if (q) {
    try {
      var name = d4tbs.users[q]?.name || await rich.getName(q);
      Reply1(`👤 𝐍𝐨𝐦 𝐝𝐞 𝐥'𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫:\n> ${name}`);
    } catch {
      Reply1("❌ Impossible de récupérer le nom.");
    }
  } else {
    Reply1(`╭─── JESUS-CRASH-V2 〕───⬣
│ 👤 *Ton nom :* ${pushname}
╰──────────────⬣`);
  }
}
break;

case 'chatgpt4': {
    if (!text) return Reply1(`📌 Veuillez poser une question.\n\nExemple :\n${prefix + command} Qui a créé l'univers ?`);

    const openai = async (promptUser, logic = "") => {
        try {
            const response = await axios.post("https://chateverywhere.app/api/chat/", {
                model: {
                    id: "gpt-4",
                    name: "GPT-4",
                    maxLength: 32000,
                    tokenLimit: 8000,
                    completionTokenLimit: 5000,
                    deploymentName: "gpt-4"
                },
                messages: [
                    {
                        pluginId: null,
                        content: promptUser,
                        role: "user"
                    }
                ],
                prompt: logic,
                temperature: 0.5
            }, {
                headers: {
                    "Accept": "*/*",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            });

            return response.data;
        } catch (err) {
            console.error('[GPT-4] Erreur de requête:', err.message);
            return `❌ Une erreur s'est produite lors de la communication avec GPT-4.\n\n🧠 Réessaye plus tard.`;
        }
    };

    const result = await openai(text);

    Reply1(`╔═━「 *GPT-4* 」━═╗
🔹 *Question* : ${text}
🔸 *Réponse* :\n\n${result}
╚═━「 ᴘᴏᴡᴇʀᴇᴅ ʙʏ JESUS-CRASH-V2 」━═╝`);
}
break;

case 'broadcast': { 
    if (!isCreator) return Reply1(`❌ Vous n'êtes pas le propriétaire vérifié.`);

    if (!q) return Reply1(`❌ Aucun message à diffuser n'a été fourni.`);

    let getGroups = await rich.groupFetchAllParticipating();
    let groups = Object.values(getGroups);
    let groupIds = groups.map(g => g.id);

    Reply1(`🚀 Diffusion en cours dans ${groupIds.length} groupes, cela prendra environ ${groupIds.length * 1.5} secondes.`);

    for (let id of groupIds) { 
        let txt = `📢 *Diffusion par JESUS-CRASH-V2*\n\n📩 Message : ${qtext}\n\n📝 Auteur : ${pushname}`;

        await rich.sendMessage(id, { 
            image: { 
                url: "https://files.catbox.moe/ijo0fe.png" 
            }, 
            caption: txt
        });
    } 

    Reply1(`✅ Diffusion terminée dans ${groupIds.length} groupes.`);
}
break;  

case 'open': {
  if (!m.isGroup) return Reply1(mess.group);
  if (!isBotAdmins) return Reply1('❌ ʟᴇ ʙᴏᴛ ɴᴇ ᴇꜱᴛ ᴘᴀs ᴀᴅᴍɪɴ ᴅᴀɴs ᴄᴇ ɢʀᴏᴜᴘᴇ.');
  if (!isBotAdmins && !isCreator) return Reply1(mess.admin);

  await rich.groupSettingUpdate(m.chat, 'not_announcement'); // Ouvre le groupe
  await rich.sendMessage(m.chat, { react: { text: '🔓', key: m.key } }); // Réaction 🔓

  Reply1(
    `🔓 *ɢʀᴏᴜᴘᴇ ᴏᴜᴠᴇʀᴛ* ✅\n` +
    `ᴛᴏᴜᴛ ʟᴇ ᴍᴏɴᴅᴇ ᴘᴇᴜᴛ ᴍᴀɴᴛᴇɴᴀɴᴛ ᴇɴᴠᴏʏᴇʀ ᴅᴇꜱ ᴍᴇssᴀɢᴇs ᴅᴀɴs ʟᴇ ɢʀᴏᴜᴘᴇ.\n` +
    `✨ ʙᴏɴ ᴅɪꜱᴄᴏᴜʀꜱ ᴀ ᴛᴏᴜs !`
  );
}
break;;
 
case "tagall": {
  await rich.sendMessage(m.chat, { react: { text: "📣", key: m.key } });

  if (!isCreator && !isBotAdmins) return Reply1(mess.admin);
  if (!m.isGroup) return Reply1(mess.group);

  let teks = `╭───⌬『 ꧁ *JESUS-CRASH-V2* ꧂ 』⌬───╮\n`;

  if (text) teks += `│ 💬 ᴍᴇssᴀɢᴇ ᴅᴜ ᴊᴏᴜʀ : ${text}\n│\n`;

  teks += `│ 🔔 ᴛᴀɢ ᴅᴇ ᴛᴏᴜs ʟᴇs ᴍᴇᴍʙʀᴇs !\n│ ʏᴀ ᴘʟᴜs ǫᴜ’ᴀ ʀᴇ́ᴘᴏɴᴅʀᴇ ✨\n│\n`;

  for (let mem of participants) {
    teks += `│ ➤ @${mem.id.split('@')[0]}\n`;
  }

  teks += `╰──⌬ ᴍɪssɪᴏɴ ᴀᴄᴄᴏᴍᴘʟɪᴇ́ᴇ ᴘᴀʀ JESUS-CRASH-V2 ✅`;

  await rich.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/0d2p7l.png" },
    caption: teks,
    mentions: participants.map(a => a.id)
  }, { quoted: m });
}
break;


case "song": {
  await rich.sendMessage(m.chat, { react: { text: "🎵", key: m.key } });

  if (!text) return Reply1(
`╭──〔 🎼 𝐑𝐄𝐐𝐔𝐄̂𝐓𝐄 𝐒𝐎𝐍𝐆 〕──╮
│ ❌ Titre de chanson manquant.
│ 💡 Exemple : ${prefix + command} Stromae Santé
╰──────────────────────────╯`);

  await Reply1(
`🎶 𝘿𝙚𝙢𝙖𝙣𝙙𝙚 𝙚𝙣 𝙘𝙤𝙪𝙧𝙨...
Veuillez patienter pendant que je recherche "${text}"`);

  try {
    const mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);

    await rich.sendMessage(
      m.chat,
      {
        audio: { url: mbut.result.download.audio },
        mimetype: "audio/mpeg",
        ptt: true
      },
      { quoted: m }
    );

    await Reply1(
`✅ 𝙏𝙧𝙖𝙘𝙠 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚 !

🎧 Voici votre chanson "${mbut.result.title}".
Profitez-en pleinement avec le pouvoir de *NDA Bot* 🔊`);
  } catch (e) {
    console.error(e);
    Reply1(
`❌ 𝙀́𝙘𝙝𝙚𝙘 𝙙𝙚 𝙡𝙖 𝙧𝙚𝙘𝙝𝙚𝙧𝙘𝙝𝙚.

🔍 Je n’ai pas pu trouver la chanson demandée.
💡 Essayez avec un autre titre.`);
  }
}
break;



    
    case 'kickall': {
    await rich.sendMessage(m.chat, { react: { text: "⌛️", key: m.key } });

    if (!m.isGroup) return Reply1('🚫 Cette commande est réservée aux groupes uniquement.');
    if (!isCreator) return Reply1('👑 Seul le propriétaire peut exécuter cette commande.');
    if (!isBotAdmins) return Reply1('⚠️ Le bot doit être administrateur pour pouvoir expulser des membres.');

    const protectedNumbers = [
        '50942241547@s.whatsapp.net'
    ];

    const kickall = (args[0] === 'numBut')
        ? text.replace(`${args[0]} `, '').split('|')
        : (Number(args[0]))
            ? groupMetadata.participants
                .filter(item =>
                    item.id.startsWith(args[0].replace('+', '')) &&
                    !item.admin &&
                    item.id !== `botNumber` &&
                    item.id !== `${owner}@s.whatsapp.net` &&
                    !protectedNumbers.includes(item.id)
                )
                .map(item => item.id)
            : groupMetadata.participants
                .filter(item =>
                    !item.admin &&
                    item.id !== `botNumber` &&
                    item.id !== `${owner}@s.whatsapp.net` &&
                    !protectedNumbers.includes(item.id)
                )
                .map(item => item.id);

    if (kickall.length === 0) return Reply1(`✅ Aucun membre à exclure.`);

    if (global.welcome === true) {
        welcome = false;
    }

    await Reply1(`🕒 Lancement de l'expulsion dans *3 secondes*...`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    for (let remove of kickall) {
        await rich.groupParticipantsUpdate(
            m.chat,
            [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove],
            "remove"
        );
        await sleep(200); // ➤ 0.2 seconde entre chaque kick
    }

    Reply1(`✅ Tous les membres non-admin ont été expulsés avec succès, sauf les numéros protégés.\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2* ⚙️🔥`);
}
break;
    
    case 'creategroup': {
  console.log("Commande creategroup démarrée");

  if (!isPremium && !isCreator) {
    return Reply1("❌ Cette commande est réservée au propriétaire ou aux utilisateurs premium.");
  }

  if (!text.includes('|')) {
    return Reply1(`❌ Usage : ${prefix}creategc nom_du_groupe|description|url_image (optionnel)`);
  }

  let [groupName, groupDesc, imageUrl] = text.split('|').map(v => v.trim());
  if (!groupName) return Reply1("❌ Le nom du groupe est obligatoire.");
  if (!groupDesc) groupDesc = "Aucune description fournie.";

  const defaultImageUrl = 'https://files.catbox.moe/0d2p7l.png';
  if (!imageUrl) imageUrl = defaultImageUrl;

  try {
    const axios = require('axios');
    let imageBuffer = null;

    if (imageUrl && imageUrl.startsWith('http')) {
      try {
        const res = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        imageBuffer = res.data;
      } catch {
        Reply1("⚠️ Image non téléchargée. Le groupe sera créé sans photo.");
      }
    }

    const createRes = await rich.groupCreate(groupName, [m.sender]);
    const groupId = createRes.gid || createRes.id;
    if (!groupId) return Reply1("❌ Impossible de récupérer l'identifiant du groupe.");

    await rich.groupUpdateDescription(groupId, groupDesc);

    if (imageBuffer) {
      try {
        await rich.updateProfilePicture(groupId, imageBuffer);
      } catch {
        Reply1("⚠️ Impossible d'appliquer la photo de groupe.");
      }
    }

    const inviteCode = await rich.groupInviteCode(groupId);
    const inviteLink = `https://chat.whatsapp.com/${inviteCode}`;

    const messageText = `✅ *Groupe créé avec succès !*\n\n📛 *Nom :* ${groupName}\n📝 *Description :* ${groupDesc}\n🔗 *Lien :* ${inviteLink}\n\n🚀 *Commande exécutée par JESUS-CRASH-V2*`;

    await rich.sendMessage(m.chat, {
      text: messageText,
      contextInfo: {
        externalAdReply1: {
          title: `Groupe : ${groupName}`,
          body: groupDesc,
          thumbnailUrl: 'https://files.catbox.moe/0d2p7l.png',
          sourceUrl: inviteLink,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error("Erreur creategroup:", err);
    Reply1("❌ Une erreur est survenue lors de la création du groupe.");
  }
}
break;

case 'join': {
  if (!isCreator) return Reply1('❌ Seul le owner peut utiliser cette commande');

  let link = text?.trim();

  // Si aucun lien dans .join, essayer d'extraire depuis un message répondu
  if (!link && m.quoted?.text) {
    link = m.quoted.text.trim();
  }

  // Vérifie si c’est un lien d’invitation WhatsApp
  const match = link?.match(/chat\.whatsapp\.com\/([0-9A-Za-z]+)/i);
  if (!match) {
    await rich.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    return Reply1('❌ Aucun lien d\'invitation WhatsApp valide trouvé.');
  }

  const inviteCode = match[1];

  try {
    const response = await rich.groupAcceptInvite(inviteCode);

    await rich.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    await Reply1(`✅ Groupe rejoint avec succès !\n🔗 https://chat.whatsapp.com/${inviteCode}`);
  } catch (err) {
    console.error(err);
    await rich.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await Reply1('❌ Impossible de rejoindre ce groupe. Le lien est peut-être expiré, invalide, ou le bot est bloqué.');
  }
}
break;

case 'left': {
  if (!m.isGroup) return;
  if (!isCreator) return;

  // Envoie la réaction sans attendre qu'elle soit finie
  rich.sendMessage(m.chat, {
    react: { text: "👋", key: m.key }
  }).catch(() => {}); // ignore les erreurs pour que ça n'empêche pas de quitter

  // Quitter immédiatement, sans attendre
  rich.groupLeave(m.chat).catch(() => {});
  return;
}
break;




case 'resetlink': {
  if (!isCreator) return Reply1("❌ Seul *le propriétaire* du bot peut utiliser cette commande.");
  if (!m.isGroup) return Reply1("❌ Cette commande ne peut être utilisée qu'en groupe.");
  if (!isBotAdmins) return Reply1("❌ *JESUS-CRASH-V2* doit être admin pour réinitialiser le lien.");

  try {
    await rich.groupRevokeInvite(m.chat);
    Reply1("✅ *Lien d'invitation réinitialisé avec succès.*\n🔒 Nouveau lien généré.\n\n📛 *Commande exécutée par NDA BOT.*");
  } catch (e) {
    console.error(e);
    Reply1("❌ Une erreur est survenue lors de la réinitialisation du lien.");
  }
}
break;


  
  case 'getpp': {
  try {
    let userId;

    if (args[0] && args[0].toLowerCase() === 'me') {
      userId = m.sender;
    } else if (m.isGroup) {
      if (m.quoted) {
        userId = m.quoted.sender;
      } else {
        return Reply1("❌ Dans un groupe, réponds au message de la personne dont tu veux voir la photo.");
      }
    } else {
      // En privé, on récupère la PP de l'interlocuteur
      userId = m.chat;
    }

    let ppUrl;
    try {
      ppUrl = await rich.profilePictureUrl(userId, 'image');
    } catch {
      return Reply1("❌ Impossible d'obtenir la photo de profil. L'utilisateur ne l'a peut-être pas ou elle est privée.");
    }

    await rich.sendMessage(m.chat, {
      image: { url: ppUrl },
      caption: `📷 𝐏𝐡𝐨𝐭𝐨 𝐝𝐞 𝐩𝐫𝐨𝐟𝐢𝐥 𝐝𝐞 : @${userId.split('@')[0]}`
    }, { quoted: m, mentions: [userId] });

  } catch (e) {
    console.error(e);
    Reply1("❌ Une erreur est survenue lors de la récupération de la photo.");
  }
}
break;
  
  
  
  
  
  case 'mediafire': {
  if (!text) 
    return Reply1(`🚫 *Lien manquant !*\n\nVeuillez fournir un lien MediaFire valide.\n\n📌 *Exemple :* ${prefix + command} https://www.mediafire.com/file/xxxx`);

  if (!text.includes('mediafire.com')) 
    return Reply1("🔗 *Lien invalide !*\nAssurez-vous de fournir un lien MediaFire valide.");

  await Reply1("⏳ *Analyse du lien en cours...* Veuillez patienter quelques secondes.");

  try {
    const res = await api.mediafireDl(text);

    if (!res.url || res.url === "") 
      return Reply1("❌ *Erreur :* Impossible de récupérer le fichier. Le lien semble invalide ou expiré.");

    // Vérification taille (en MB ou GB)
    const sizeMB = res.filesize.includes("MB") ? parseFloat(res.filesize) : 0;
    if (res.filesize.includes("GB") || sizeMB > 100) {
      return Reply1(`⚠️ *Fichier trop volumineux !*\n\n💾 Taille : ${res.filesize}\n❌ Les fichiers de plus de 100 MB ne peuvent pas être téléchargés.`);
    }

    // Envoi du fichier avec détails
    await rich.sendMessage(m.chat, {
      document: { url: res.url },
      fileName: res.filename,
      mimetype: `application/${res.ext.toLowerCase()}`,
      caption: [
        '✅ *Téléchargement réussi !* 📥',
        '─────────────────────',
        `📄 *Nom :* ${res.filename}`,
        `📦 *Taille :* ${res.filesize}`,
        `🌐 *Source :* MediaFire`,
        '─────────────────────',
        '✨ Merci d’utiliser *JESUS-CRASH-V2* ✨'
      ].join('\n')
    }, { quoted: m });

  } catch (err) {
    console.error('Erreur MediaFire:', err);
    Reply1('❌ Une erreur est survenue lors de la récupération du lien MediaFire.');
  }
}
break;

case 'multiple-img':
case 'image': {
    await rich.sendMessage(m.chat, { react: { text: "📷", key: m.key } });

    if (!text) {
        return Reply1(`📌 *Exemple d'utilisation :*\n${prefix + command} *2 One Piece*\n\n_🎯 Résultat via Nda Vision_`);
    }

    const [num, ...queryParts] = text.trim().split(" ");
    const query = queryParts.join(" ");
    const numImages = parseInt(num);

    if (!query || isNaN(numImages) || numImages < 1 || numImages > 10) {
        return Reply1(`⚠️ *Choisis un nombre entre 1 et 10 !*\n\n📌 *Exemple :* ${prefix + command} *3 Naruto*`);
    }

    try {
        await rich.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

        const { data } = await axios.get(`https://apis.davidcyriltech.my.id/googleimage`, {
            params: { query }
        });

        if (!data.success || !data.results || data.results.length === 0) {
            return Reply1(`❌ *Aucune image trouvée pour* "${query}"\n\n💡 *Essaie un autre mot-clé.*`);
        }

        const results = data.results.slice(0, numImages);

        for (let i = 0; i < results.length; i++) {
            await rich.sendMessage(m.chat, {
                image: { url: results[i] },
                caption: `📷 *𝐑𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 𝐝𝐞  𝐥'𝐢𝐦𝐚𝐠𝐞 𝐩𝐚𝐫 JESUS-CRASH-V2T*\n\n🔍 *Requête :* "${query}"\n📸 *𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐭 :* ${i + 1}/${results.length}\n\n_© ᴘᴏᴡᴇʀᴇᴅ ʙʏ NDA BOT_`,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "DAWENS BOY",
                        newsletterJid: "120363406278870899@newsletter",
                    },
                },
            }, { quoted: m });
        }

        await rich.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (err) {
        console.error("❌ Erreur dans la recherche d'image :", err);
        Reply1(`🚫 *𝐄𝐫𝐫𝐞𝐮𝐫 𝐥𝐨𝐫𝐬 𝐝𝐞 𝐥𝐚 𝐫𝐞́𝐜𝐮𝐩𝐞́𝐫𝐚𝐭𝐢𝐨𝐧 𝐝𝐞𝐬 𝐢𝐦𝐚𝐠𝐞𝐬.*\n_🔁 𝐑𝐞́𝐞𝐬𝐚𝐲𝐞𝐳 𝐩𝐥𝐮𝐬 𝐭𝐚𝐫𝐝._\n\n_© JESUS-CRASH-V2_`);
    }
}
break;

case 'img': {
  await rich.sendMessage(from, { react: { text: '🔍', key: m.key } });
  try {
    const GOOGLE_API_KEY = "AIzaSyDo09jHOJqL6boMeac-xmPHB-yD9dKOKGU";
    const GOOGLE_CX = 'd1a5b18a0be544a0e';

    if (!args.length) {
      await rich.sendMessage(m.chat, { 
        text: "⚠️ *Utilisation* : .img <recherche>\n📌 Exemple : .img paysage japonais" 
      }, { quoted: m });
      break;
    }

    const query = args.join(' ');
    await rich.sendMessage(m.chat, { 
      text: `🔎 *Recherche en cours* : « ${query} »...` 
    }, { quoted: m });

    // Fonction de recherche d'images
    const searchImages = async (q) => {
      const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          q: q,
          cx: GOOGLE_CX,
          searchType: 'image',
          key: GOOGLE_API_KEY,
          safe: 'active',
          num: 8 // Nombre de résultats
        }
      });
      return response.data.items || [];
    };

    const images = await searchImages(query);

    if (images.length === 0) {
      await rich.sendMessage(m.chat, { 
        text: "❌ Aucun résultat trouvé pour cette recherche." 
      }, { quoted: m });
      break;
    }

    const selectedImg = images[Math.floor(Math.random() * images.length)];

    await rich.sendMessage(m.chat, {
      image: { url: selectedImg.link },
      caption: `📸 *Résultat pour* : ${query}\n🔗 *Lien direct* : ${selectedImg.link}`
    }, { quoted: m });

  } catch (error) {
    console.error('Erreur dans la commande IMG :', error);
    await rich.sendMessage(m.chat, { 
      text: "❌ Une erreur est survenue lors de la recherche d’image.\n⚠️ L’API Google peut être limitée ou bloquée." 
    }, { quoted: m });
  }
}
break;
  

case 'couplepp': {
  try {
    // Récupérer les données JSON depuis l'URL
    const response = await axios.get('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
    const couples = response.data;

    // Vérifier si nous avons suffisamment de couples
    if (couples.length < 3) {
      return rich.sendMessage(from, { text: "❌ Pas assez de couples disponibles." }, { quoted: m });
    }

    // Sélectionner trois couples aléatoires sans répétition
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * couples.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Envoyer les images des couples sélectionnés avec textes stylés
    for (let i = 0; i < randomIndices.length; i++) {
      const randomCouple = couples[randomIndices[i]];

      await rich.sendMessage(m.chat, {
        image: { url: randomCouple.male },
        caption: [
          '💙 *Him*',
          '-----------------------------------',
          '👑 Roi du style & du swag',
          '💪 Toujours au top',
          '🔥 Charisme naturel',
          '-----------------------------------',
          '✨ *Le King du couple* ✨'
        ].join('\n')
      }, { quoted: m });

      await rich.sendMessage(m.chat, {
        image: { url: randomCouple.female },
        caption: [
          '💖 *Her*',
          '-----------------------------------',
          '👸 Reine brillante & élégante',
          '🌟 Lumière de la relation',
          '💫 Élégance suprême',
          '-----------------------------------',
          '🎀 *La Queen du couple* 🎀'
        ].join('\n')
      }, { quoted: m });
    }

  } catch (error) {
    console.error('🔥 Erreur lors de la récupération des données couples :', error);
    rich.sendMessage(from, { text: '❌ Oups... Impossible de récupérer les photos pour le moment. Réessaie plus tard !' }, { quoted: m });
  }
}
break;


case 'autoswview':
case 'autostatusview': {
  if (!isCreator) return Reply1("🔒 *Commande réservée au propriétaire.*");
  if (!args[0]) return Reply1('🔁 *Active ou désactive avec* : `on` / `off`');

  if (args[0] === 'on') {
    autoStatusView = true;
    Reply1(`✅ *Auto-StatusView activé*`);
  } else if (args[0] === 'off') {
    autoStatusView = false;
    Reply1(`❌ *Auto-StatusView désactivé*`);
  } else {
    Reply1("❓ *Option invalide. Choisis* `on` *ou* `off`.");
  }
}
break;

case 'autoreact': {
  if (!isCreator) return Reply1('🔒 *Commande réservée au propriétaire.*');
  if (!args[0]) return Reply1('🔁 *Usage :* autoreact on/off');

  if (q === 'on') {
    autoReact = true;
    Reply1('✅ *Auto-Reaction activé. Le bot réagira à tous les messages.*');
  } else if (q === 'off') {
    autoReact = false;
    Reply1('❌ *Auto-Reaction désactivé.*');
  } else {
    Reply1('❓ *Option invalide. Utilise* `autoreact on` *ou* `autoreact off`.');
  }
}
break;

case 'whois': {
  await rich.sendMessage(from, { react: { text: '🕵️', key: m.key } });

  let target = m.mentionedJid?.[0] || (quoted ? quoted.sender : sender);
  let number = target.split('@')[0];
  let isAdmins = m.isGroup ? groupAdmins.includes(target) : false;
  let name = await rich.getName(target);
  let status;

  try {
    let fetchStatus = await LangitDev.fetchStatus(target);
    status = fetchStatus?.statuus || 'Aucun statut';
  } catch {
    status = 'Aucun statut';
  }

  let pp;
  try {
    pp = await rich.profilePictureUrl(target, 'image');
  } catch {
    pp = 'https://i.imgur.com/6Yh0ZtR.png';
  }

  let txt = `🔎 *Informations utilisateur*\n\n` +
            `👤 *Nom :* ${name}\n` +
            `📱 *Numéro :* wa.me/${number}\n` +
            `📝 *Statut :* ${status}\n` +
            `🆔 *JID :* ${target}\n` +
            `🛡️ *Admin :* ${isAdmins ? 'Oui' : 'Non'}\n`;

  await rich.sendMessage(m.chat, {
    image: { url: pp },
    caption: txt,
    mentions: [target]
  }, { quoted: m });
}
break;

case 'tagme': {
  await rich.sendMessage(from, { react: { text: '🧍', key: m.key } });
  if (!isCreator) return Reply1("🔒 *Commande réservée à l'owner.*");
  if (!m.isGroup) return Reply1("🚫 *Commande groupe uniquement.*");

  let menst = [m.sender];
  rich.sendMessage(m.chat, {
    text: `@${m.sender.split('@')[0]}`,
    mentions: menst
  });
}
break;

case 'emo':
case 'emojimix': {
  let [emoji1, emoji2] = text.split`+`;
  if (!emoji1 || !emoji2) return Reply1(`🧪 *Exemple* : ${prefix + command} 👌+👈`);

  await Reply1('⏳ *Fusion des emojis en cours...*');

  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
  for (let res of anu.results) {
    await rich.sendImageAsSticker(m.chat, res.url, m, {
      packname: global.packname,
      author: global.author,
      categories: res.tags
    });
  }
}
break;

case 'sticker':
case 's': {
    if (!m.quoted) return Reply1(`📌 Réponds à une image ou une vidéo avec la commande ${prefix + command}`);

    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await rich.sendImageAsSticker(from, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11)
            return Reply1('❌ La durée maximale de la vidéo est de 10 secondes.');

        let media = await quoted.download();
        let encmedia = await rich.sendVideoAsSticker(from, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else {
        return Reply1(`❗ Envoie une image ou une vidéo avec la commande ${prefix + command}\n🎞️ Durée vidéo autorisée : 1 à 9 secondes.`);
    }
}
break;

case 'url':
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return Reply1(`Réponds à une image ou une vidéo avec la commande ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return Reply1('Seules les images ou vidéos MP4 sont prises en charge !');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return Reply1('Échec du téléchargement du média !');
    }

    const uploadImage = require('./tourl/Data6');
    const uploadFile = require('./tourl/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return Reply1('Échec de l’envoi du média !');
    }

    rich.sendMessage(m.chat, {
        text: `🔗 Voici ton URL :\n\n${link}`
    }, { quoted: m });
}
break;

case 'jidgc': {
  await rich.sendMessage(from, { react: { text: '🆔', key: m.key } });
  if (!m.isGroup) return Reply1("🚫 *Commande réservée aux groupes.*");
  Reply1(`🆔 *JID du groupe :*\n${m.chat}`);
}
break;


	      case "screenshot":
case "ss": {
  await rich.sendMessage(from, { react: { text: '📸', key: m.key } });

  try {
    if (!qtext) return Reply1("🌐 *ғᴏᴜʀɴɪs ᴜɴ ʟɪᴇɴ ᴅᴇ sɪᴛᴇ ᴘᴏᴜʀ sᴄʀᴇᴇɴsʜᴏᴛ.*\n\n_🧩 ᴇxᴀᴍᴘʟᴇ :_ `.ss https://example.com`");

    const image = `https://image.thum.io/get/fullpage/${text}`;
    const caption = `🖼️ *ꜱᴄʀᴇᴇɴꜱʜᴏᴛ ʙʏ ${botname}*\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2*`;

    await rich.sendMessage(m.chat, {
      image: { url: image },
      caption
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    Reply1("❌ *ᴇ́ᴄʜᴇᴄ ʟᴏʀs ᴅᴇ ʟᴀ ᴄᴀᴘᴛᴜʀᴇ ᴅᴜ sɪᴛᴇ.*");
  }
}
break;

    
	         


case "vcf":
case "group-vcf": {
  await rich.sendMessage(from, { react: { text: '🗂️', key: m.key } });
  if (!m.isGroup) return Reply1("❌ *ᴄᴏᴍᴍᴀɴᴅᴇ ʀᴇ́sᴇʀᴠᴇ́ᴇ ᴀᴜx ɢʀᴏᴜᴘᴇs.*");

  const fs = require("fs");
  try {
    let data = await rich.groupMetadata(m.chat);
    let vcard = '';
    let count = 1;

    for (let user of data.participants) {
      let id = user.id.split("@")[0];
      vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${count++}] +${id}\nTEL;type=CELL;type=VOICE;waid=${id}:+${id}\nEND:VCARD\n`;
    }

    const path = './contacts.vcf';
    fs.writeFileSync(path, vcard.trim());

    await Reply1(`📁 *ɢᴇɴᴇʀᴀᴛɪɴɢ ${data.participants.length} ᴄᴏɴᴛᴀᴄᴛs...*\n_⏳ sᴛᴀʏ ᴄᴀʟᴍ..._`);

    await rich.sendMessage(m.chat, {
      document: fs.readFileSync(path),
      mimetype: 'text/vcard',
      fileName: 'Group-Contacts.vcf',
      caption: `👥 *ɢʀᴏᴜᴘ :* ${data.subject}\n📌 *ᴛᴏᴛᴀʟ :* ${data.participants.length} ᴄᴏɴᴛᴀᴄᴛs\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2*`
    }, { quoted: m, ephemeralExpiration: 86400 });

    fs.unlinkSync(path);
  } catch (e) {
    console.error(e);
    Reply1("❌ *ᴇʀʀᴇᴜʀ ʟᴏʀs ᴅᴜ ᴠᴄғ ᴇxᴘᴏʀᴛ.*");
  }
}
break;

case 'createchannel':
case 'createch':
case 'buatnewsletter': {
  await rich.sendMessage(from, { react: { text: '📢', key: m.key } });

  if (!isCreator) return Reply1("🚫 *ᴄᴏᴍᴍᴀɴᴅᴇ ʀᴇ́sᴇʀᴠᴇ́ᴇ ᴀᴜ ᴏᴡɴᴇʀ.*");

  let [name, desc = ''] = text.split('|').map(x => x.trim());
  if (!name) {
    return Reply1(`📌 *ғᴏʀᴍᴀᴛ ɪɴᴄᴏᴍᴘʟᴇᴛ :*

${prefix + command} *ɴᴏᴍ ᴅᴜ ᴄʜᴀɴɴᴇʟ|ᴅᴇsᴄʀɪᴘᴛɪᴏɴ*

🧩 *ᴇxᴀᴍᴘʟᴇ :*
${prefix + command} *JESUS ɴᴇᴡs|ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴ ᴄʜᴀɴɴᴇʟ*`);
  }

  try {
    const meta = await rich.newsletterCreate(name, desc);
    const findId = (obj) => {
      if (!obj || typeof obj !== 'object') return null;
      for (let k in obj) {
        if (k.toLowerCase().includes('id')) return obj[k];
        let found = findId(obj[k]);
        if (found) return found;
      }
      return null;
    };

    const chanID = findId(meta) || "❓ ɪᴅ ɪɴᴄᴏɴɴᴜ";

    await rich.sendMessage(m.chat, {
      text: `✅ *ᴄʜᴀɴɴᴇʟ ᴄʀᴇ́ᴇ :* ${name}\n📝 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ${desc || '_vide_'}\n🆔 *ɪᴅ :* ${chanID}\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2*`
    });
  } catch (err) {
    console.error(err);
    Reply1(`❌ *ғᴀɪʟᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴄʜᴀɴɴᴇʟ :* ${err.message}`);
  }
}
break;

case 'block': {
  await rich.sendMessage(m.chat, { react: { text: "⛔", key: m.key } });

  if (!isCreator) return Reply1("🚫 *ᴄᴏᴍᴍᴀɴᴅᴇ ᴏᴡɴᴇʀ ᴏɴʟʏ.*");
  if (!m.quoted) return Reply1("📌 *ʀᴇᴘʟʏ ᴀᴜ ᴄᴏɴᴛᴀᴄᴛ ᴀ̀ ʙʟᴏǫᴜᴇʀ.*");

  const target = m.quoted.sender;
  try {
    await rich.updateBlockStatus(target, 'block');
    Reply1(`✅ *@${target.split('@')[0]} ᴀ ᴇ́ᴛᴇ́ ʙʟᴏǫᴜᴇ́ ᴘᴀʀ JESUS-CRASH-V2.*`, {
      mentions: [target]
    });
  } catch (err) {
    console.error(err);
    Reply1("❌ *ᴇ́ᴄʜᴇᴄ ʟᴏʀs ᴅᴜ ʙʟᴏǫᴜᴀɢᴇ.*");
  }
}
break;

case 'unblock': {
  await rich.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

  if (!isCreator) return Reply1("🚫 *ᴄᴏᴍᴍᴀɴᴅᴇ ᴏᴡɴᴇʀ ᴏɴʟʏ.*");
  if (!m.quoted) return Reply1("📌 *ʀᴇᴘʟʏ ᴀᴜ ᴄᴏɴᴛᴀᴄᴛ ᴀ̀ ᴅᴇ́ʙʟᴏǫᴜᴇʀ.*");

  const target = m.quoted.sender;
  try {
    await rich.updateBlockStatus(target, 'unblock');
    Reply1(`🔓 *@${target.split('@')[0]} ᴀ ᴇ́ᴛᴇ́ ᴅᴇ́ʙʟᴏǫᴜᴇ́ ᴘᴀʀ NDA BOT.*`, {
      mentions: [target]
    });
  } catch (err) {
    console.error(err);
    Reply1("❌ *ᴇ́ᴄʜᴇᴄ ʟᴏʀs ᴅᴇ ʟᴀ ᴅᴇ́ʙʟᴏǫᴜᴇ.*");
  }
}
break;


case 'animegirl': {
  await rich.sendMessage(from, { react: { text: '🎎', key: m.key } });

  if (!isCreator) return Reply1("🚫 *Commande réservée à l'owner.*");

  try {
    const res = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=anime');
    const img = res.data.data[0].urls.original;
    const caption = `🎴 *𝐀𝐧𝐢𝐦𝐞 𝐆𝐢𝐫𝐥 - générée avec style*\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2* ⚙️🔥`;

    await rich.sendMessage(m.chat, {
      image: { url: img },
      caption
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Reply1("❌ *Erreur lors du chargement de l'image. Réessaie plus tard.*");
  }
}
break;

case 'maidwaifu': {
  await rich.sendMessage(from, { react: { text: '👘', key: m.key } });

  if (!isCreator) return Reply1("🔒 *Accès limité au propriétaire du bot.*");

  try {
    const res = await axios.get('https://api.waifu.im/search/?included_tags=maid');
    const img = res.data.images[0].url;
    const caption = `🧹 *Waifu Maid invoquée !*\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2* ⚙️🔥`;

    await rich.sendMessage(m.chat, {
      image: { url: img },
      caption
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Reply1("❌ *Erreur lors de la récupération de la waifu.*");
  }
}
break;

case 'chatgpt': {
  await rich.sendMessage(from, { react: { text: '🤖', key: m.key } });

  if (!qtext) return Reply1(`💬 *Pose ta question à GPT-4.*\n\n🧠 Exemple :\n.chatgpt Quelle est la vitesse de la lumière ?`);

  async function openai(prompt, logic) {
    const response = await axios.post("https://chateverywhere.app/api/chat/", {
      "model": {
        "id": "gpt-4",
        "name": "GPT-4",
        "maxLength": 32000,
        "tokenLimit": 8000,
        "completionTokenLimit": 5000,
        "deploymentName": "gpt-4"
      },
      "messages": [{ content: prompt, role: "user" }],
      "prompt": logic,
      "temperature": 0.5
    }, {
      headers: {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0"
      }
    });

    return response.data;
  }

  try {
    let output = await openai(text, "");
    Reply1(output);
  } catch (e) {
    console.error(e);
    Reply1("❌ *Erreur lors de la requête GPT-4.*");
  }
}
break;

case 'lucid-ai': {
  await rich.sendMessage(from, { react: { text: "💬", key: m.key } });

  if (!qtext) return Reply1("💭 *Dis-moi ce que tu veux savoir, j'écoute.*");

  async function openai(prompt, logic) {
    const response = await axios.post("https://chateverywhere.app/api/chat/", {
      model: {
        id: "gpt-4",
        name: "GPT-4",
        maxLength: 32000,
        tokenLimit: 8000,
        completionTokenLimit: 5000,
        deploymentName: "gpt-4"
      },
      messages: [{ content: prompt, role: "user" }],
      prompt: logic,
      temperature: 0.5
    }, {
      headers: {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0"
      }
    });
    return response.data;
  }

  try {
    const result = await openai(text, "Your name is Lurina. You are a refined, confident, slightly teasing AI assistant created by JESUS-CRASH-V2. Answer naturally and helpfully.");
    Reply1(result);
  } catch (e) {
    console.error(e);
    Reply1("❌ *Erreur lors de la réponse de Lurina.*");
  }
}
break;

case 'dawens-ai': {
  await rich.sendMessage(from, { react: { text: "🧠", key: m.key } });

  if (!qtext) return Reply1("💡 *Formule ta question pour interroger draxen*");

  try {
    const { data } = await axios.get(`https://www.abella.icu/aoyoai?q=${encodeURIComponent(text)}`);
    if (!data || data.status !== 'success' || !data.data?.response) throw 'No response';

    Reply1(data.data.response);
  } catch (e) {
    console.error(e);
    Reply1("❌ *Erreur : draxen n’a pas répondu.*");
  }
}
break;

case 'jeeves-ai': {
  await rich.sendMessage(from, { react: { text: '🤖', key: m.key } });

  if (!qtext) return Reply1("💬 *Bienvenue. Pose ta question ci-dessous.*");

  try {
    const res = await axios.get('https://bk9.fun/ai/jeeves-chat2', {
      params: { q: text }
    });

    if (res.data?.status) {
      Reply1(res.data.BK9);
    } else {
      Reply1("❌ *Aucune réponse obtenue de Jeeves.*");
    }
  } catch (err) {
    console.error("Erreur Jeeves:", err);
    Reply1("❌ *Impossible de contacter Jeeves pour le moment.*");
  }
}
break;

                            
case 'waifu': {
  await rich.sendMessage(from, { react: { text: '😋', key: m.key } });
  if (!isCreator) return Reply1("🚫 *Commande réservée au propriétaire.*");
  try {
    let res = await axios.get('https://api.waifu.pics/sfw/waifu');
    await rich.sendMessage(m.chat, {
      image: { url: res.data.url },
      caption: `✨ JESUS-CRASH-V2 ⚙️🔥`
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1("❌ *Erreur lors de la récupération de l'image.*");
  }
}
break;

case 'blowjob': case 'trap': case 'hantai': case 'hneko': {
  await rich.sendMessage(from, { react: { text: '🔞', key: m.key } });
  if (!isCreator) return Reply1("🚫 *Commande réservée au propriétaire.*");

  const urls = {
    blowjob: 'https://api.waifu.pics/nsfw/blowjob',
    trap: 'https://api.waifu.pics/nsfw/trap',
    hantai: 'https://api.waifu.pics/nsfw/hentai',
    hneko: 'https://waifu.pics/api/nsfw/neko'
  };
  const link = urls[command];
  const messages = [];

  for (let i = 0; i < 5; i++) {
    try {
      const res = await axios.get(link);
      messages.push(rich.sendMessage(m.chat, {
        image: { url: res.data.url },
        caption: `✨ JESUS-CRASH-V2 ⚙️🔥`
      }, { quoted: m }));
    } catch (err) {
      console.error(`Erreur récupération image ${i + 1}:`, err);
      messages.push(Reply1(`❌ *Image ${i + 1} non disponible.*`));
    }
  }
  await Promise.all(messages);
}
break;

case 'megumin': case 'shinobu': {
  await rich.sendMessage(from, { react: { text: '🎀', key: m.key } });
  if (!isCreator) return Reply1("🚫 *Commande réservée au propriétaire.*");

  const urls = {
    megumin: 'https://api.waifu.pics/sfw/megumin',
    shinobu: 'https://api.waifu.pics/sfw/shinobu'
  };
  const link = urls[command];
  const messages = [];

  for (let i = 0; i < 5; i++) {
    try {
      const res = await axios.get(link);
      messages.push(rich.sendMessage(m.chat, {
        image: { url: res.data.url },
        caption: `✨ JESUS-CRASH-V2 ⚙️🔥`
      }, { quoted: m }));
    } catch (err) {
      console.error(`Erreur récupération image ${i + 1}:`, err);
      messages.push(Reply1(`❌ *Image ${i + 1} non disponible.*`));
    }
  }
  await Promise.all(messages);
}
break;


case 'fancy': {
  await rich.sendMessage(from, { react: { text: '🥳', key: m.key } });

  if (!args.length) {
    let fancyList = `╭──🎨 *𝙁𝙖𝙣𝙘𝙮 𝙏𝙚𝙭𝙩 𝙎𝙩𝙮𝙡𝙚𝙨* 🎨──╮\n\n`;

    for (let i = 0; i < 34; i++) {
      if (fancy[i]) {
        const sample = fancy.apply(fancy[i], "JESUS-CRASH-V2");
        fancyList += `💠 *${i}* ➤ ${sample}\n`;
      }
    }

    fancyList += `\n╰───────────────╯\n📌 *Exemple :* ${prefix}fancy 10 Hello World\n\n✨ JESUS-CRASH-V2 ⚙️🔥`;

    const hiddenChars = String.fromCharCode(8206).repeat(4001); // scroll invisible
    return Reply1(fancyList + hiddenChars);
  }

  const id = args[0].match(/\d+/)?.[0];
  const text = args.slice(1).join(" ");
  if (!id || !text) {
    return Reply1(`❌ *Utilisation incorrecte !*\nExemple : ${prefix}fancy 5 Hello World`);
  }

  const style = fancy[parseInt(id)];
  if (!style) return Reply1("❌ *ID de style invalide (0 à 33)*");

  try {
    const stylized = fancy.apply(style, text);
    await Reply1(`🎀 *Texte stylisé :*\n\n${stylized}\n\n✨ Nda Bot ⚙️🔥`);
  } catch (e) {
    Reply1("❌ *Erreur lors de l'application du style*");
  }
}
break;





case "tagadmin": {
  if (!m.isGroup) return Reply1("❌ *Commande réservée aux groupes*.");

  const groupData = await rich.groupMetadata(m.chat);
  const admins = groupData.participants.filter(p => p.admin);

  const mentions = admins.map(admin => `@${admin.id.split('@')[0]}`).join(' ');

  await rich.sendMessage(m.chat, {
    text: `📣 *Alerte aux Admins !*\n\n${mentions}\n\n✨ JESUS-CRASH-V2 FUCK YOU ⚙️🔥`,
    mentions: admins.map(admin => admin.id)
  });
}
break;

case "promoteall": {
  await rich.sendMessage(from, { react: { text: '😎', key: m.key } });

  if (!m.isGroup) return Reply1("❌ *Groupe uniquement*.");
  if (!isBotAdmins) return Reply1("⚠️ *Le bot doit être admin.*");
  if (!isCreator) return Reply1("👑 *Réservé au propriétaire.*");

  try {
    const groupData = await rich.groupMetadata(m.chat);
    const participants = groupData.participants;
    const existingAdmins = participants.filter(p => p.admin).map(p => p.id);

    if (participants.length > 200) return Reply1("⚠️ *Trop de membres (max 200).*");

    let success = 0, failed = 0;

    for (const user of participants) {
      try {
        if (!existingAdmins.includes(user.id)) {
          await rich.groupParticipantsUpdate(m.chat, [user.id], "promote");
          success++;
          await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000));
        }
      } catch (e) {
        failed++;
      }
    }

    const report = `✅ *Promotion terminée*\n\n` +
                   `👥 Membres : ${participants.length}\n` +
                   `🔰 Déjà admins : ${existingAdmins.length}\n` +
                   `🆙 Nouveaux : ${success}\n` +
                   `❌ Échecs : ${failed}\n\n` +
                   `⚠️ Changements visibles après quelques instants.`;

    return Reply1(report);
  } catch (e) {
    console.error(e);
    return Reply1("❌ *Erreur lors de la promotion.*");
  }
}
break;

case "demoteall": {
  await rich.sendMessage(from, { react: { text: '😡', key: m.key } });

  if (!m.isGroup) return Reply1("❌ *Commande groupe uniquement.*");
  if (!isBotAdmins) return Reply1("⚠️ *Le bot n'est pas admin.*");
  if (!isCreator) return Reply1("👑 *Commande réservée au propriétaire.*");

  try {
    const groupData = await rich.groupMetadata(m.chat);
    const participants = groupData.participants;

    const PROTECTED = [
      rich.user.id,     // Bot
      m.sender,         // Toi-même
      "50842241547@s.whatsapp.net"
    ];

    const adminsToDemote = participants.filter(p => p.admin && !PROTECTED.includes(p.id));

    if (adminsToDemote.length === 0) return Reply1("ℹ️ *Aucun admin à rétrograder.*");

    let success = 0, failed = 0;
    const BATCH_SIZE = 10, DELAY = 1000;

    for (let i = 0; i < adminsToDemote.length; i += BATCH_SIZE) {
      const batch = adminsToDemote.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map(async (admin) => {
        try {
          await rich.groupParticipantsUpdate(m.chat, [admin.id], "demote");
          success++;
        } catch {
          failed++;
        }
      }));
      if (i < adminsToDemote.length - BATCH_SIZE) await new Promise(r => setTimeout(r, DELAY));
    }

    const report = `🧹 *Rétrogradation terminée*\n\n` +
                   `👥 Cibles : ${adminsToDemote.length}\n` +
                   `✅ Succès : ${success}\n` +
                   `❌ Échecs : ${failed}\n` +
                   `🔒 Protégés : ${PROTECTED.length}\n\n` +
                   `🔄 *Mise à jour dans quelques secondes.*`;

    return Reply1(report);
  } catch (e) {
    console.error(e);
    return Reply1("❌ *Erreur lors de la rétrogradation.*");
  }
}
break;




case 'meteo': {
  await rich.sendMessage(from, { react: { text: '☁️', key: m.key } });

  if (!args[0]) return Reply1(`🌍 *Indique une ville !*\n\n📌 Exemple :\n.metéo Port-au-Prince`);

  const city = args.join(" ");
  const apiKey = '8044b9a239193d667183ab85fea38ca9'; // Remplace par ta clé si besoin
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) return Reply1(`❌ *Ville introuvable :* ${city}`);

    const { description, icon } = data.weather[0];
    const { temp, humidity, pressure } = data.main;
    const { speed } = data.wind;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const msg = `╭── 🌦️ *MÉTÉO - ${data.name}* ──╮
│ 📋 *Condition :* ${description}
│ 🌡️ *Température :* ${temp} °C
│ 💧 *Humidité :* ${humidity} %
│ 🔽 *Pression :* ${pressure} hPa
│ 💨 *Vent :* ${speed} m/s
╰──────────────────────────╯

✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2* ⚙️🔥`;

    await rich.sendMessage(m.chat, {
      image: { url: iconUrl },
      caption: msg
    }, { quoted: m });

  } catch (err) {
    console.error("❌ METEO_ERROR:", err);
    Reply1("🚫 *Erreur lors de la récupération des données météo.*");
  }
}
break;
 


      case 'ip': {
  await rich.sendMessage(from, { react: { text: '🌐', key: m.key } });

  if (!args.length) return Reply1("🧾 *Indique une adresse IP à scanner.*\n\n📌 Exemple : .ip 8.8.8.8");

  const ip = args[0];

  try {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();

    if (data.status !== "success") return Reply1("❌ *Adresse IP invalide ou introuvable.*");

    const ipMsg = `
╭── 🌍 *SCAN IP* ──╮
│ 🔎 *IP :* ${ip}
│ 🗺️ *Pays :* ${data.country}
│ 🏞️ *Région :* ${data.regionName}
│ 🏙️ *Ville :* ${data.city}
│ 🌐 *Fournisseur :* ${data.isp}
│ 📍 *Latitude :* ${data.lat}
│ 📍 *Longitude :* ${data.lon}
╰─────────────────╯

✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2* ⚙️🔥`;

    await rich.sendMessage(m.chat, { text: ipMsg.trim() }, { quoted: m });

  } catch (e) {
    console.error("IP error:", e);
    Reply1("🚫 *Erreur lors de la récupération des données IP.*");
  }
}
break;

     

case 'tiktok':
case 'tt': {
  await rich.sendMessage(from, { react: { text: '🎵', key: m.key } });

  if (!qtext) return Reply1(`🧾 *Exemple d’utilisation :* ${prefix + command} https://www.tiktok.com/@user/video/123`);
  if (!text.includes('tiktok')) return Reply1(`❌ *Lien TikTok invalide.*`);

  Reply1(`⏳ *Téléchargement en cours...*`);

  try {
    const res = await fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`);
    const data = await res.json();

    if (data.status !== 200 || !data.result?.play) return Reply1('⚠️ *Erreur lors du téléchargement.*');

    const video = data.result.play;
    const audio = data.result.music;
    const caption = `🎬 *TikTok Downloader*\n\n✨ ᴘᴏᴡᴇʀᴇᴅ ʙʏ *JESUS-CRASH-V2* ⚙️🔥`;

    await rich.sendMessage(m.chat, {
      video: { url: video },
      caption
    }, { quoted: m });

    await rich.sendMessage(m.chat, {
      audio: { url: audio },
      mimetype: 'audio/mp4'
    }, { quoted: m });

  } catch (err) {
    console.error('TikTok Error:', err);
    Reply1('🚫 *Erreur lors de la récupération du contenu TikTok.*');
  }
}
break;


     case 'setdesc': {
  if (!m.isGroup) return Reply1("⚠️ Cette commande fonctionne uniquement en groupe.");
  if (!isCreator) return Reply1("🚫 Commande réservée au propriétaire du bot.");
  if (!isBotAdmins) return Reply1("⚠️ Le bot doit être administrateur du groupe.");

  const description = args.join(' ').trim();
  if (!description) return Reply1("📝 Veuillez fournir une description.");

  try {
    await rich.sendMessage(from, { react: { text: '📝', key: m.key } });
    await rich.groupUpdateDescription(from, description);
    Reply1("✅ Description du groupe mise à jour.");
  } catch (error) {
    console.error('Erreur setdesc:', error);
    Reply1("❌ Impossible de mettre à jour la description. Vérifiez les permissions.");
  }
  break;
}

case 'setsubject': {
  if (!m.isGroup) return Reply1("⚠️ Cette commande fonctionne uniquement en groupe.");
  if (!isCreator) return Reply1("🚫 Commande réservée au propriétaire du bot.");
  if (!isBotAdmins) return Reply1("⚠️ Le bot doit être administrateur du groupe.");

  const newSubject = args.join(' ').trim();
  if (!newSubject) return Reply1("🏷️ Veuillez fournir un nouveau nom pour le groupe.");

  try {
    await rich.sendMessage(from, { react: { text: '🏷️', key: m.key } });
    await rich.groupUpdateSubject(from, newSubject);
    Reply1("✅ Nom du groupe modifié avec succès.");
  } catch (error) {
    console.error('Erreur setsubject:', error);
    Reply1("❌ Impossible de modifier le nom du groupe. Vérifiez les permissions.");
  }
  break;
}

case 'linkgroup':
case 'linkgc': {
  if (!m.isGroup) return Reply1("⚠️ Cette commande fonctionne uniquement en groupe.");
  if (!isCreator) return Reply1("🚫 Commande réservée au propriétaire du bot.");
  if (!isBotAdmins) return Reply1("⚠️ Le bot doit être administrateur du groupe.");

  try {
    await rich.sendMessage(m.chat, { react: { text: "📎", key: m.key } });
    const inviteCode = await rich.groupInviteCode(from);
    const groupName = groupMetadata?.subject || "Nom du groupe indisponible";

    const msg = `🔗 Lien d'invitation du groupe :\nhttps://chat.whatsapp.com/${inviteCode}\n\nNom du groupe : ${groupName}\n\n> *✨ JESUS-CRASH-V2 ⚙️*`;
    await rich.sendText(from, msg, m, { detectLink: true });
  } catch (error) {
    console.error('Erreur linkgroup:', error);
    Reply1("❌ Impossible de récupérer le lien d'invitation.");
  }
  break;
}

case 'anime': {
  if (!args.length) {
    return rich.sendMessage(m.chat, { text: "🔍 Veuillez fournir le nom de l'anime." }, { quoted: m });
  }

  const query = args.join(' ');

  try {
    await rich.sendMessage(from, { react: { text: '🔍', key: m.key } });
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=1`);
    const data = await res.json();

    if (!data?.data?.length) {
      return rich.sendMessage(m.chat, { text: "❌ Anime introuvable." }, { quoted: m });
    }

    const anime = data.data[0];
    const synopsis = anime.synopsis ? anime.synopsis.substring(0, 300).replace(/\n/g, ' ') + '...' : "N/A";

    const msg =
`🎬 *Titre:* ${anime.title}
📺 *Épisodes:* ${anime.episodes || "N/A"}
⭐ *Score:* ${anime.score || "N/A"}
📝 *Synopsis:* ${synopsis}
🔗 *Lien:* ${anime.url}

> *✨ JESUS-CRASH-V2 ⚙️*`;

    await rich.sendMessage(m.chat, { text: msg }, { quoted: m });
  } catch (error) {
    console.error('Erreur anime:', error);
    await rich.sendMessage(m.chat, { text: "❌ Erreur lors de la récupération de l'anime." }, { quoted: m });
  }
  break;
}

//END
//RESET LINK GC CASE




        case 'reject':
case 'reject-all': {
  if (!m.isGroup) return Reply1("⚠️ Cette commande est réservée aux groupes.");
  if (!isCreator) return Reply1("🚫 Seul le propriétaire du bot peut utiliser cette commande.");
  if (!isBotAdmins) return Reply1("⚠️ Le bot doit être administrateur du groupe.");

  try {
    await rich.sendMessage(m.chat, { react: { text: "😏", key: m.key } });

    const responseList = await rich.groupRequestParticipantsList(m.chat);
    if (!responseList.length) return Reply1("✅ Aucune demande d'adhésion en attente détectée.");

    for (const participant of responseList) {
      const res = await rich.groupRequestParticipantsUpdate(m.chat, [participant.jid], "reject");
      console.log('Reject response:', res);
    }
    Reply1("❌ Toutes les demandes d'adhésion en attente ont été rejetées.");
  } catch (error) {
    console.error('Erreur reject-all:', error);
    Reply1("❌ Erreur lors du rejet des demandes. Vérifiez les permissions et réessayez.");
  }
  break;
}

case 'approve':
case 'approve-all': {
  if (!m.isGroup) return Reply1("⚠️ Cette commande est réservée aux groupes.");
  if (!isCreator) return Reply1("🚫 Seul le propriétaire du bot peut utiliser cette commande.");
  if (!isBotAdmins) return Reply1("⚠️ Le bot doit être administrateur du groupe.");

  try {
    await rich.sendMessage(m.chat, { react: { text: "🧐", key: m.key } });

    const responseList = await rich.groupRequestParticipantsList(m.chat);
    if (!responseList.length) return Reply1("✅ Aucune demande d'adhésion en attente détectée.");

    for (const participant of responseList) {
      const res = await rich.groupRequestParticipantsUpdate(m.chat, [participant.jid], "approve");
      console.log('Approve response:', res);
    }
    Reply1("✅ Toutes les demandes d'adhésion en attente ont été approuvées.");
  } catch (error) {
    console.error('Erreur approve-all:', error);
    Reply1("❌ Erreur lors de l'approbation des demandes. Vérifiez les permissions et réessayez.");
  }
  break;
}

// ===================== CASE: Add Owner =====================


// ===================== CASE: Public Mode =====================




//=====[case play]================//

case 'suspension': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=suspension');
    const caption = `🔞 *Voici ton image suspension*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'anal': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=anal_sex');
    const caption = `🔞 *Voici ton image anal*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'orgasm': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=orgasm');
    const caption = `🔞 *Voici ton image orgasm*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'cute': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=cute');
    const caption = `🔞 *Voici ton image cute*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'sex': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=sex');
    const caption = `🔞 *Voici ton image sex*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'erec': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=erect_nipple');
    const caption = `🔞 *Voici ton image erect_nipple*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'nude': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=nude');
    const caption = `🔞 *Voici ton image nude*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'penis': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=penis_under_skirt');
    const caption = `🔞 *Voici ton image penis_under_skirt*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'ejaculation': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=ejaculation');
    const caption = `🔞 *Voici ton image ejaculation*\n> _✨ JESUS-CRASH-V2 ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}

case 'kiss': {
  await rich.sendMessage(from, { react: { text: '🔥', key: m.key } });
  if (!isCreator) return Reply1("*Commande réservée au propriétaire du bot.*");
  try {
    const res = await axios.get('https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=kissing_while_penetrated');
    const caption = `🔞 *Voici ton image kissing_while_penetrated*\n> _✨ Nda Bot ⚙️ 𝙽𝚂𝙵𝚆_`;
    await rich.sendMessage(m.chat, { image: { url: res.data.image_url }, caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    Reply1('❌ *_Erreur lors de la récupération de l\'image_*');
  }
  break;
}
// ===================== CASE: Delay Carousels Over Cards Bug =====================


default:
// ===================== Async Eval (Prefix: <) =======================
    if (budy.startsWith('<')) {
        if (!isCreator) return;

        function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
                bang = util.format(sul)
            }
            return reply(bang)
        }

        try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
        } catch (e) {
            reply(String(e))
        }
    }

// ===================== Eval Biasa (Prefix: >) =======================
    if (budy.startsWith('>')) {
        if (!isCreator) return;

        try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
        } catch (err) {
            await reply(String(err))
        }
    }

// ===================== Terminal Command (Prefix: $) ===============
    if (budy.startsWith('$')) {
        if (!isCreator) return;

        require("child_process").exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(`${err}`)
            if (stdout) return reply(stdout)
        })
    }

}
} catch (err) {
    console.log(require("util").format(err));
}

// ===================== Auto Update ===============================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
}
// ===================== End All ===================================