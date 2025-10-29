const fs = require('fs');
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const path = require('path');
const os = require('os')
const yts = require('yt-search');
const { ytdl } = require('./lib/scrape/scrape-ytdl');
const startpairing = require('./rentbot');
const { BOT_TOKEN } = require('./token');
    const adminFilePath = './adminID.json';
const bannedPath = './lib2/pairing/banned.json';
// Helper to format runtime duration
const ITEMS_PER_PAGE = 10;
const pagedListPairs = {}; // In-memory cache for each admin
// Track when bot started
const botStartTime = Date.now();

// Check if adminID.json exists, if not, create it with your ID
if (!fs.existsSync(adminFilePath)) {
  const defaultAdmin = [String(process.env.OWNER_ID || '7011781863')]; // fallback if OWNER_ID is not set
  fs.writeFileSync(adminFilePath, JSON.stringify(defaultAdmin, null, 2));
}
// Handle listpair pagination

const userStore = './lib2/pairing/users.json';

function trackUser(id) {
  const users = JSON.parse(fs.readFileSync(userStore));
  if (!users.includes(id)) {
    users.push(id);
    fs.writeFileSync(userStore, JSON.stringify(users, null, 2));
  }
}
const adminIDs = JSON.parse(fs.readFileSync(adminFilePath, 'utf8'));
const bot = new Telegraf(BOT_TOKEN);
const premium_file = './premium.json';
let premiumUsers = [];

try {
  if (fs.existsSync(premium_file)) {
    premiumUsers = JSON.parse(fs.readFileSync(premium_file, 'utf-8'));
  } else {
    fs.writeFileSync(premium_file, JSON.stringify([]));
  }
} catch (error) {
  console.error('Failed to load premium users:', error);
}
const userStates = {};
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getPushName(ctx) {
  return ctx.from.first_name || ctx.from.username || "User";
}
function sendListPairPage(ctx, userID, pageIndex) {
  const pairedDevices = pagedListPairs[userID];
  const totalPages = Math.ceil(pairedDevices.length / ITEMS_PER_PAGE);
  const start = pageIndex * ITEMS_PER_PAGE;
  const currentPage = pairedDevices.slice(start, start + ITEMS_PER_PAGE);

  const pageText = currentPage.map((id, i) =>
    `*${start + i + 1}.* \`ID:\` ${id}`
  ).join('\n');

  const navButtons = [];
  if (pageIndex > 0) navButtons.push({ text: '⬅️ Back', callback_data: `listpair_page_${pageIndex - 1}` });
  if (pageIndex < totalPages - 1) navButtons.push({ text: '➡️ Next', callback_data: `listpair_page_${pageIndex + 1}` });

  ctx.deleteMessage().catch(() => {});
  ctx.reply(`*Paired Bots (Page ${pageIndex + 1}/${totalPages}):*\n\n${pageText}`, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: navButtons.length ? [navButtons] : []
    }
  });
}
function sendDelPairPage(ctx, userID, pageIndex) {
  const pairedDevices = pagedListPairs[userID];
  const totalPages = Math.ceil(pairedDevices.length / ITEMS_PER_PAGE);
  const start = pageIndex * ITEMS_PER_PAGE;
  const currentPage = pairedDevices.slice(start, start + ITEMS_PER_PAGE);

  const keyboard = currentPage.map(id => [
    { text: `🗑️ ${id}`, callback_data: `delpair_${id}` }
  ]);

  const navButtons = [];
  if (pageIndex > 0) navButtons.push({ text: '⬅️ Back', callback_data: `delpair_page_${pageIndex - 1}` });
  if (pageIndex < totalPages - 1) navButtons.push({ text: '➡️ Next', callback_data: `delpair_page_${pageIndex + 1}` });

  if (navButtons.length) keyboard.push(navButtons);

  const text = `🧾 *Delete Paired Devices (Page ${pageIndex + 1}/${totalPages}):*\n\nTap a device ID to delete.`;

  ctx.deleteMessage().catch(() => {});
  ctx.reply(text, {
    parse_mode: 'Markdown',
    reply_markup: { inline_keyboard: keyboard }
  });
}
function formatRuntime(seconds) {
  const pad = (s) => (s < 10 ? '0' + s : s);
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
}
bot.command('runtime', async (ctx) => {
  const uptime = Math.floor((Date.now() - botStartTime) / 1000);
  ctx.reply(`⚡ Le bot est actif depuis : *${formatRuntime(uptime)}*`, {
    parse_mode: 'Markdown'
  });
});

bot.start((ctx) => {
  const pushname = getPushName(ctx);
  const userId = ctx.from.id;

  trackUser(userId); // Enregistrer l'utilisateur pour la diffusion

  ctx.replyWithPhoto('https://files.catbox.moe/ijo0fe.png', {
    caption: `👋 Yo ${pushname},

✨ Bienvenue dans JESUS CRASH V2 ⚙️🔥  
Le système hybride le plus avancé.

┏━━━⟪ 📡 𝙎𝙏𝘼𝙏𝙐𝙏 𝘿𝙐 𝙎𝙔𝙎𝙏È𝙈𝙀 ⟫━━━┓
┃ 🤖 𝗕𝗼𝘁          : ${BOT_NAME}
┃ 👑 𝗣𝗿𝗼𝗽𝗿𝗶é𝘁𝗮𝗶𝗿𝗲 : ${OWNER_NAME}
┃ 🚨 𝗩𝗲𝗿𝘀𝗶𝗼𝗻     : 2.0.0
┃ 📅 𝗗𝗮𝘁𝗲        : ${new Date().toLocaleString()}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛

╭━⟪ 🧬 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐄𝐒 𝐉𝐄𝐒𝐔𝐒 ⟫━━━╮
┋⬡⟣──────────────────⟢
┋⚙️  /pair ➛ ᴄᴏɴɴᴇᴄᴛ ᴅᴇᴠɪᴄᴇ
┋💀  /delpair ➛ ʀᴇᴍᴏᴠᴇ ᴅᴇᴠɪᴄᴇ
┋🧾  /listpair ➛ ᴠɪᴇᴡ ᴀʟʟ ᴅᴇᴠɪᴄᴇs
┋🚫  /ban ➛ Bannir un utilisateur
┋🌐  /runtime ➛ ᴠɪᴇᴡ ᴜᴘᴛɪᴍᴇ
╰─────────────╶╶···
DAWENS n'a pas de femme😭

📡 𝗔𝗰𝗰è𝘀 𝗮𝘂𝘅 𝗕𝗼𝘁𝘀 𝗔𝘀𝘀𝗼𝗰𝗶é𝘀 :
🔗 [DAWENS904_bot](https://t.me/DAWENS904_bot)`,
    parse_mode: 'HTML',
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.button.callback('INFO 👤', 'info_bot'),
        Markup.button.url('🌐 telegrame', 'https://t.me/dawens_boy') // Remplace par ton vrai lien si tu veux
      ]
    ])
  });
});
bot.command('menu', (ctx) => {
  const pushname = getPushName(ctx);

  ctx.replyWithPhoto('https://files.catbox.moe/ijo0fe.png', {
    caption: `👋 Salut ${pushname},

✨ Bienvenue dans JESUS CRASH V2 ⚙️🔥  
Le système hybride le plus avancé.

┏━━━⟪ 📡 𝙎𝙏𝘼𝙏𝙐𝙏 𝘿𝙐 𝙎𝙔𝙎𝙏È𝙈𝙀 ⟫━━━┓
┃ 🤖 𝗕𝗼𝘁          : ${BOT_NAME}
┃ 👑 𝗣𝗿𝗼𝗽𝗿𝗶é𝘁𝗮𝗶𝗿𝗲 : ${OWNER_NAME}
┃ 🚨 𝗩𝗲𝗿𝘀𝗶𝗼𝗻     : 1.1.0
┃ 📅 𝗗𝗮𝘁𝗲        : ${new Date().toLocaleString()}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛

╭━⟪ 🧬 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐄𝐒 𝐉𝐄𝐒𝐔𝐒 ⟫━━━╮
┋⬡⟣──────────────────⟢
┋⚙️  /pair ➛ ᴄᴏɴɴᴇᴄᴛ ᴅᴇᴠɪᴄᴇ
┋💀  /delpair ➛ ʀᴇᴍᴏᴠᴇ ᴅᴇᴠɪᴄᴇ
┋🧾  /listpair ➛ ᴠɪᴇᴡ ᴀʟʟ ᴅᴇᴠɪᴄᴇs
┋🚫  /ban ➛ Bannir un utilisateur
┋🌐  /runtime ➛ ᴠɪᴇᴡ ᴜᴘᴛɪᴍᴇ
╰─────────────╶╶···
DAWENS n'a pas de femme😭

📡 𝗔𝗰𝗰è𝘀 𝗮𝘂𝘅 𝗕𝗼𝘁𝘀 𝗔𝘀𝘀𝗼𝗰𝗶é𝘀 :
🔗 [DAWENS904_bot](https://t.me/DAWENS904_bot)`,
    parse_mode: 'HTML',
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.button.callback('INFO 👤', 'info_bot'),
        Markup.button.url('🌐 telegrame', 'https://t.me/dawens_boy') // Remplace par ton vrai lien si tu veux
      ]
    ])
  });
});

// Info button
bot.action('info_bot', (ctx) => {
  ctx.reply('ce bot est créé par dawens boy 🧍\n abonné vous a ma chaîne pour me supporté https://t.me/dawens_boy');
});
bot.action('search_song', (ctx) => {
    userStates[ctx.from.id] = 'attend pour ton son';
    ctx.reply('écrit le nom de la chanson que vous voulez recherché..');
});

bot.command('pair', async (ctx) => {
  try {
    const userId = ctx.from.id;

    // Ban check
    const banned = JSON.parse(fs.readFileSync(bannedPath, 'utf-8'));
    if (banned.includes(userId)) {
      return ctx.reply('⛔ Vous êtes banni de ce service.');
    }

    // Channel membership check
    const channelUsernames = ['@dawens_boy'];
    let joinedAllChannels = true;
    for (const channel of channelUsernames) {
      try {
        const member = await ctx.telegram.getChatMember(channel, userId);
        if (['left', 'kicked'].includes(member.status)) {
          joinedAllChannels = false;
          break;
        }
      } catch {
        joinedAllChannels = false;
        break;
      }
    }

    if (!joinedAllChannels) {
      return ctx.reply(
        `🚫 Accès refusé\n\nPour utiliser cette fonctionnalité, rejoins *notre chaîne officielle Telegram*.`,
        {
          parse_mode: 'Markdown',
          reply_markup: {
            inline_keyboard: [
              [{ text: '🔗 Rejoindre @dawens_boy', url: 'https://t.me/dawens_boy' }],
              [{ text: '✅ J\'ai rejoint', callback_data: 'check_join' }]
            ]
          }
        }
      );
    }
 // User joined → request TikTok photo
  userStates[userId] = 'waiting_tiktok_photo';
  ctx.reply('📸 Send a photo of the TikTok account you followed for verification.');
});

// Handle photo for TikTok verification
bot.on('photo', async (ctx) => {
  try {
    const userId = ctx.from.id;

    if (userStates[userId] === 'waiting_tiktok_photo') {
      // Chwazi dènye foto a (pi gwo rezolisyon)
      const photo = ctx.message.photo[ctx.message.photo.length - 1];
      const fileId = photo.file_id;

      // Kreye folder si li pa egziste
      const dirPath = './tiktok_proofs/temp';
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Folder created: ${dirPath}`);
      }

      // Telechaje foto a
      const fileLink = await ctx.telegram.getFileLink(fileId);
      const response = await fetch(fileLink.href);
      const buffer = Buffer.from(await response.arrayBuffer());

      // Sove foto a
      await fs.promises.writeFile(`${dirPath}/${userId}.jpg`, buffer);
      console.log(`Saved TikTok proof for user ${userId} at ${dirPath}/${userId}.jpg`);

      ctx.reply('✅ Verification complete! You can continue.');
      delete userStates[userId];
    }
  } catch (error) {
    console.error('Error saving TikTok photo:', error);
    ctx.reply('❌ An error occurred while downloading the TikTok photo. Please try again.');
  }
});

// Handle “I joined” button
bot.action('check_join', async (ctx) => {
  const userId = ctx.from.id;
  const joined = await checkTelegramJoin(userId);

  if (joined) {
    await ctx.answerCbQuery('✅ You have already joined our channel, now send a photo of your TikTok.');
    userStates[userId] = 'waiting_tiktok_photo';
  } else {
    await ctx.answerCbQuery('❌ You haven’t joined the channel yet.', { show_alert: true });
  }
});

    // Phone number validation
    const text = ctx.message.text.split(' ')[1];
    if (!text) {
      return ctx.reply('❗ Veuillez entrer un numéro valide.\n\n*Exemple :* `/pair 509XXXXXX`', { parse_mode: 'Markdown' });
    }

    if (/[a-z]/i.test(text)) {
      return ctx.reply('❌ Aucun caractère alphabétique autorisé.');
    }

    if (!/^\d{7,15}(\|\d{1,10})?$/.test(text)) {
      return ctx.reply('❌ Format invalide. Utilisez `509xxxxxxxxxx` ou `509xxxxxxxxxx|1234`.', { parse_mode: 'Markdown' });
    }

    if (text.startsWith('0')) {
      return ctx.reply('⚠️ Les numéros commençant par 0 ne sont pas autorisés.');
    }

    const target = text.split("|")[0];
    const Xreturn = ctx.message.reply_to_message
      ? ctx.message.reply_to_message.from.id
      : target.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    if (!Xreturn) {
      return ctx.reply("❌ Ce numéro n'existe pas sur WhatsApp.");
    }

    const countryCode = text.slice(0, 3);
    const prefixxx = text.slice(0, 1);
    if (["252", "201", ".", "0"].includes(countryCode) || prefixxx === "0") {
      return ctx.reply("❌ Ce code pays n'est pas supporté.");
    }

    // Pairing limit check
    const pairingFolder = './lib2/pairing';
    const pairedUsersFromJson = fs.readdirSync(pairingFolder).filter(file => file.endsWith('@s.whatsapp.net')).length;
    if (pairedUsersFromJson >= 100) {
      return ctx.reply("⚠️ Limite atteinte. Réessaye plus tard ou contacte @boanybot.");
    }

    // Begin pairing
    await startpairing(Xreturn);
    await sleep(4000);

    const cuObj = JSON.parse(fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8'));
    await sleep(3000);

    // Send pairing code
    await ctx.reply(`🔗 *Code de liaison* : \`${cuObj.code}\``, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true
    });

    // Expiry message after 5 mins
    setTimeout(async () => {
      const expiry = await ctx.reply('⏳ *Ce code de connexion a expiré.* Générez-en un nouveau si nécessaire.', {
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      });
      setTimeout(() => {
        ctx.deleteMessage(expiry.message_id).catch(() => {});
      }, 10 * 1000);
    }, 5 * 60 * 1000);

  } catch (error) {
    console.error('Error in /pair command:', error);
    ctx.reply('❌ Une erreur est survenue. Veuillez réessayer.');
  }
});

bot.on('callback_query', async (query) => {
  const userId = query.from.id;
  const data = query.data;

  if (data === 'check_join') {
    const channelUsernames = ['@dawens_boy'];
    let joinedAllChannels = true;

    for (const channel of channelUsernames) {
      try {
        const member = await bot.telegram.getChatMember(channel, userId);
        if (['left', 'kicked'].includes(member.status)) {
          joinedAllChannels = false;
          break;
        }
      } catch {
        joinedAllChannels = false;
        break;
      }
    }

    if (joinedAllChannels) {
      await bot.telegram.answerCbQuery(query.id, {
        text: '✅ Tu as rejoint la chaîne. Réessaie /pair.',
        show_alert: true
      });
    } else {
      await bot.telegram.answerCbQuery(query.id, {
        text: '❌ Tu n’as pas encore rejoint la chaîne.',
        show_alert: true
      });
    }
  }
});
bot.command('listpair', async (ctx) => {
  const userID = ctx.from.id.toString();

  if (!adminIDs.includes(userID)) {
    return ctx.reply(`⛔ Accès refusé.\nContacte ${OWNER_NAME} en privé pour acheter l'accès.`);
  }

  const pairingPath = './lib2/pairing';
  if (!fs.existsSync(pairingPath)) return ctx.reply('❌ Aucun appareil lié trouvé.');

  const entries = fs.readdirSync(pairingPath, { withFileTypes: true });
  const pairedDevices = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

  if (pairedDevices.length === 0) return ctx.reply('❌ Aucun appareil lié trouvé.');

  pagedListPairs[userID] = pairedDevices;
  sendListPairPage(ctx, userID, 0);
});
bot.command('deluser', async (ctx) => {
  const userID = ctx.from.id.toString();

  if (!adminIDs.includes(userID)) {
    return ctx.reply(`❌ Vous n'êtes pas autorisé à utiliser cette commande.\nSeul ${OWNER_NAME} peut y accéder.`);
  }

  const pairingPath = './lib2/pairing';
  if (!fs.existsSync(pairingPath)) return ctx.reply('⚠️ Aucun appareil jumelé trouvé.');

  const entries = fs.readdirSync(pairingPath, { withFileTypes: true });
  const pairedDevices = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

  if (pairedDevices.length === 0) return ctx.reply('⚠️ Aucun appareil jumelé trouvé.');

  pagedListPairs[userID] = pairedDevices;
  sendDelPairPage(ctx, userID, 0);
});

bot.on('callback_query', async (ctx) => {
  const userID = ctx.from.id.toString();
  const data = ctx.callbackQuery.data;

  if (!adminIDs.includes(userID)) return ctx.answerCbQuery('⛔ Vous n\'êtes pas autorisé.');

  // Navigation listpair
  if (data.startsWith('listpair_page_')) {
    const page = parseInt(data.split('_')[2]);
    await ctx.answerCbQuery();
    return sendListPairPage(ctx, userID, page);
  }

  // Navigation delpair
  if (data.startsWith('delpair_page_')) {
    const page = parseInt(data.split('_')[2]);
    await ctx.answerCbQuery();
    return sendDelPairPage(ctx, userID, page);
  }

  // Suppression ID jumelé
  if (data.startsWith('delpair_')) {
    const idToDelete = data.replace('delpair_', '');
    const targetPath = `./lib2/pairing/${idToDelete}`;

    if (!fs.existsSync(targetPath)) {
      return ctx.answerCbQuery('❌ ID introuvable ou déjà supprimé.', { show_alert: true });
    }

    fs.rmSync(targetPath, { recursive: true, force: true });

    const list = pagedListPairs[userID] || [];
    pagedListPairs[userID] = list.filter(id => id !== idToDelete);

    await ctx.answerCbQuery('✅ Supprimé avec succès.');
    sendDelPairPage(ctx, userID, 0);
  }
});
bot.command('broadcast', async (ctx) => {
  const senderId = ctx.from.id;
  const message = ctx.message.text.split(' ').slice(1).join(' ');

  if (!adminIDs.includes(senderId.toString())) {
    return ctx.reply('❌ Vous n\'êtes pas autorisé à utiliser cette commande.');
  }

  if (!message) {
    return ctx.reply('⚠️ Veuillez fournir un message à diffuser.\nExemple : /broadcast Bonjour à tous !');
  }

  const users = JSON.parse(fs.readFileSync('./lib2/pairing/users.json'));

  let success = 0;
  let failed = 0;

  for (const userId of users) {
    try {
      await ctx.telegram.sendMessage(userId, `📢 *Message de diffusion :*\n\n${message}`, {
        parse_mode: 'Markdown'
      });
      success++;
    } catch {
      failed++;
    }
  }

  ctx.reply(`✅ Diffusion terminée.\n\nSuccès : ${success}\nÉchecs : ${failed}`);
});

bot.command('addprem', async (ctx) => {
  const isOwner = global.DEVELOPER.includes(ctx.from.id.toString());
  if (!isOwner) {
    return ctx.reply(`❌ Vous n'êtes pas autorisé à utiliser cette commande.\nContactez ${OWNER_NAME} pour l'accès premium.`);
  }

  const args = ctx.message.text.split(' ');
  if (args.length < 2) {
    return ctx.reply("⚠️ Veuillez fournir l'ID de l'utilisateur à ajouter en tant que premium.\n\nUsage : `/addprem <user_id>`", {
      parse_mode: "Markdown"
    });
  }

  const userID = args[1];
  if (premiumUsers.includes(userID)) {
    return ctx.reply("⚠️ Cet utilisateur est déjà premium.");
  }

  try {
    premiumUsers.push(userID);
    fs.writeFileSync(premium_file, JSON.stringify(premiumUsers, null, 2));
    ctx.reply(`✅ L'utilisateur *${userID}* a été ajouté en tant qu'utilisateur premium.`, { parse_mode: "Markdown" });
  } catch (error) {
    console.error('Erreur lors de l\'ajout du premium :', error);
    ctx.reply('❌ Erreur lors de l\'ajout de l\'utilisateur en premium.');
  }
});
bot.command('delbot', async (ctx) => {
  const text = ctx.message.text.trim();
  const args = text.split(' ').slice(1);

  if (args.length === 0) {
    return ctx.reply('❌ Veuillez fournir un numéro. Exemple :\n`/delbot 509xx`', { parse_mode: 'Markdown' });
  }

  const inputNumber = args[0].replace(/\D/g, ''); // Supprime les caractères non numériques
  const jidSuffix = `${inputNumber}@s.whatsapp.net`;

  const pairingPath = './lib2/pairing';
  if (!fs.existsSync(pairingPath)) {
    return ctx.reply('⚠️ Aucun appareil appairé trouvé.');
  }

  const entries = fs.readdirSync(pairingPath, { withFileTypes: true });
  const matched = entries.find(entry => entry.isDirectory() && entry.name.endsWith(jidSuffix));

  if (!matched) {
    return ctx.reply(`❌ Aucun appareil appairé trouvé pour le numéro *${inputNumber}*`, { parse_mode: 'Markdown' });
  }

  const targetPath = `${pairingPath}/${matched.name}`;
  fs.rmSync(targetPath, { recursive: true, force: true });

  ctx.reply(
    `✅ Utilisateur appairé supprimé avec succès.\n\n*Téléphone :* \`${inputNumber}\`\n*ID :* \`${matched.name}\``,
    { parse_mode: 'Markdown' }
  );
});
bot.command('listdel', async (ctx) => {
  const userID = ctx.from.id.toString();

  if (!adminIDs.includes(userID)) {
    return ctx.reply(`❌ Vous n'êtes pas autorisé à utiliser cette commande.\nSeul ${OWNER_NAME} peut y accéder.`);
  }

  const pairingPath = './lib2/pairing';

  if (!fs.existsSync(pairingPath)) {
    return ctx.reply('⚠️ Aucun appareil appairé trouvé.');
  }

  const entries = fs.readdirSync(pairingPath, { withFileTypes: true });
  const pairedDevices = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

  if (pairedDevices.length === 0) {
    return ctx.reply('⚠️ Aucun appareil appairé trouvé.');
  }

  const deviceList = pairedDevices.map((device, index) =>
    `*${index + 1}.* \`${device}\``).join('\n');

  ctx.reply(`*Identifiants des appareils appairés :*\n\n${deviceList}`, {
    parse_mode: 'Markdown'
  });
});

bot.on('callback_query', async (ctx) => {
  const userID = ctx.from.id.toString();
  const data = ctx.callbackQuery.data;

  // Gestion de la pagination pour listpair
  if (data.startsWith('listpair_page_')) {
    const page = parseInt(data.split('_')[2]);
    await ctx.answerCbQuery(); // Supprime l’état de "chargement"
    return sendListPairPage(ctx, userID, page); // Envoie la page correspondante
  }

  // Tu peux ajouter d'autres interactions ici
});
bot.command('delprem', async (ctx) => {
  const isOwner = global.DEVELOPER.includes(ctx.from.id.toString());
  if (!isOwner) {
    return ctx.reply(`❌ Vous n'êtes pas autorisé à utiliser cette commande.\nContactez ${OWNER_NAME} pour une assistance.`);
  }

  const args = ctx.message.text.split(' ');
  if (args.length < 2) {
    return ctx.reply("⚠️ Veuillez fournir l'identifiant de l'utilisateur à retirer.\n\nUtilisation : `/delprem <user_id>`", {
      parse_mode: "Markdown"
    });
  }

  const userID = args[1];
  if (!premiumUsers.includes(userID)) {
    return ctx.reply("⚠️ Cet utilisateur n’est pas dans la liste premium.");
  }

  try {
    premiumUsers = premiumUsers.filter((id) => id !== userID);
    fs.writeFileSync(premium_file, JSON.stringify(premiumUsers, null, 2));
    ctx.reply(`✅ L'utilisateur *${userID}* a été retiré de la liste premium.`, { parse_mode: "Markdown" });
  } catch (error) {
    console.error('Erreur lors du retrait de l’utilisateur premium :', error);
    ctx.reply('❌ Une erreur est survenue lors du retrait de la liste premium.');
  }
});
bot.command('ban', async (ctx) => {
  const senderId = ctx.from.id;
  const reply = ctx.message.reply_to_message;
  const args = ctx.message.text.split(' ');
  const targetId = reply?.from?.id || args[1];

  if (senderId !== 7011781863) {
    return ctx.reply('❌ Vous n\'êtes pas autorisé à utiliser cette commande.');
  }

  if (!targetId || isNaN(targetId)) {
    return ctx.reply('⚠️ Veuillez répondre à un utilisateur ou fournir un identifiant valide.');
  }

  const banned = JSON.parse(fs.readFileSync(bannedPath, 'utf-8'));

  if (banned.includes(Number(targetId))) {
    return ctx.reply('⚠️ Cet utilisateur est déjà banni.');
  }

  banned.push(Number(targetId));
  fs.writeFileSync(bannedPath, JSON.stringify(banned, null, 2));

  return ctx.reply(`✅ L'utilisateur \`${targetId}\` a été banni du système de pairage.`, {
    parse_mode: 'Markdown'
  });
});

bot.command('unban', async (ctx) => {
  const senderId = ctx.from.id;
  const targetId = ctx.message.reply_to_message?.from?.id || ctx.message.text.split(' ')[1];

  if (senderId !== 7011781863) return ctx.reply('❌ Vous n\'êtes pas autorisé à utiliser cette commande.');

  if (!targetId) return ctx.reply('⚠️ Veuillez répondre à un utilisateur ou fournir un identifiant valide.');

  let banned = JSON.parse(fs.readFileSync(bannedPath));
  if (!banned.includes(Number(targetId))) return ctx.reply('⚠️ Cet utilisateur est pas banni.');

  banned = banned.filter(id => id !== Number(targetId));
  fs.writeFileSync(bannedPath, JSON.stringify(banned, null, 2));
  ctx.reply(`✅ L'utilisateur ${targetId} a été débanni.`);
});
bot.command('playrrr', async (ctx) => {
    const text = ctx.message.text.split(' ').slice(1).join(' ');
    if (!text) return ctx.reply('What song do you want? Example: /play photograph');

    try {
        ctx.reply('🔒 Looking for...');
        const search = await yts(text);
        const telaso = search.all[0].url;
        const response = await ytdl(telaso);
        const puki = response.data.mp3;

        await ctx.replyWithAudio({ url: puki }, {
            caption: `Title: ${search.all[0].title}\n Duration: ${search.all[0].timestamp}`,
        });
        ctx.reply('🔓 Selesai!');
    } catch (error) {
        console.error(error);
        ctx.reply('An error occurred while downloading the song, please try again later.');
    }
});

bot.on('textffft', async (ctx) => {
    const userId = ctx.from.id;

    if (userStates[userId] === 'waiting_for_song') {
        const text = ctx.message.text;

        try {
            ctx.reply('🔒 looking for...');
            const search = await yts(text);
            const telaso = search.all[0].url;
            const response = await ytdl(telaso);
            const puki = response.data.mp3;

            await ctx.replyWithAudio({ url: puki }, {
                caption: `Title: ${search.all[0].title}\nDuration: ${search.all[0].timestamp}`,
            });
            ctx.reply('🔓 ');
        } catch (error) {
            console.error(error);
            ctx.reply('An error occurred while downloading the song, please try again later.');
        }

        delete userStates[userId];
    }
});

bot.command('scritttp', (ctx) => {
    ctx.reply("Do you want to have the script?", {
        reply_markup: {
            inline_keyboard: [
                [
                    
                ]
            ]
        }
    });
});

bot.launch()
    .then(() => console.log('The bot is running successfully'))
    .catch(err => console.error('Error while running bot:', err));

module.exports = bot;
