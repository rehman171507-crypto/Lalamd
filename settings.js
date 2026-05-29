// ✅ MegaTron Bot Stylish Configuration – by 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓

const ownerNumber = require('./Owner/owner'); // 🔗 Example: ['923014142891']

const config = {
  // 👑 Owner Info
  ownerNumber,                          // 🔹 Array of Owner Numbers
  ownerName: '𓆩 FAZZI ❦︎𓆪',              // 🔹 Displayed in Greetings
  botName: '🤖 FK ON TOP 𝑩𝑶𝑻 ⚡',           // 🔹 Bot Display Name
  signature: '> FAZZI ❦ ✓',               // 🔹 Footer on Bot Replies
  youtube: 'https://www.youtube.com/', // 🔹 Optional YouTube

  // ⚙️ Feature Toggles
  autoTyping: false,        // ⌨️ Fake Typing
  autoReact: false,         // 💖 Auto Emoji Reaction
  autoStatusView: false,    // 👁️ Auto-View Status
  public: true,             // 🌍 Public or Private Mode
  antiLink: false,          // 🚫 Delete Links in Groups
  antiBug: false,           // 🛡️ Prevent Malicious Crashes
  greetings: true,          // 🙋 Welcome/Farewell Messages
  readmore: false,          // 📜 Readmore in Long Replies
  ANTIDELETE: true          // 🗑️ Anti-Delete Messages
};

// ✅ Register owner(s) globally in WhatsApp JID format
global.owner = (
  Array.isArray(ownerNumber) ? ownerNumber : [ownerNumber]
).map(num => num.replace(/\D/g, '') + '@s.whatsapp.net');

// ⚙️ Export Settings Loader
function loadSettings() {
  return config;
}

module.exports = { loadSettings };