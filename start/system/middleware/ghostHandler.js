// 📁 system/middleware/ghostHandler.js

async function handleGhostDeletion(m, client) {
    const from = m.chat;
    const sender = m.sender;

    // 🚫 Ne ghost pas les admins
    if ([OWNER_1, OWNER_2].includes(sender)) return;

    // ✅ Check si l'utilisateur est ghosted
    if (global.ghosted?.[from]?.[sender]) {
        try {
            // 💨 Suppression du message (mode ghost)
            await client.sendMessage(from, {
                delete: m.key
            });

            // 🕵️‍♂️ Fake réaction (style propre ninja)
            await client.sendMessage(from, {
                react: {
                    text: "👻",
                    key: m.key
                }
            });

            console.log(`[🧹 GHOST] Message supprimé de ${sender}`);
        } catch (e) {
            console.error(`❌ Erreur ghost suppression de ${sender} :`, e);
        }
    }
}

module.exports = handleGhostDeletion;