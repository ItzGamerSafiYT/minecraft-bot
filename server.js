require('./keep-alive.js');
const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'your.server.ip',     // e.g., 'play.example.net'
    port: 25565,                // your server port (default: 25565)
    username: 'AFKBot2',        // Bot username (TLauncher works)
    version: '1.12.2'           // Minecraft version
  });

  bot.once('spawn', () => {
    console.log('AFKBot2 has joined the game!');
    // Slight movement to prevent being kicked for AFK
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 15000);
  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log('Error:', err));
}

createBot();
