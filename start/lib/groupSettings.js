const fs = require('fs');
const path = './system/database/groupSettings.json';

/**
 * Chargement sécurisé des paramètres du fichier JSON.
 * Si le fichier ou le dossier n'existe pas, ils sont créés automatiquement.
 */
function loadGroupSettings() {
    if (!fs.existsSync(path)) {
        fs.mkdirSync('./system/database', { recursive: true });
        fs.writeFileSync(path, '{}');
    }
    try {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch (e) {
        console.error('❌ JSON invalide dans groupSettings.json. Réinitialisation.');
        fs.writeFileSync(path, '{}');
        return {};
    }
}

/**
 * Sauvegarde des paramètres dans le fichier JSON.
 * Les données sont formatées pour être lisibles.
 */
function saveGroupSettings(settings) {
    fs.writeFileSync(path, JSON.stringify(settings, null, 2));
}

module.exports = {
    loadGroupSettings,
    saveGroupSettings
};