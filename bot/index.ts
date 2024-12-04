const { Telegraf } = require('telegraf');
const { BOT_TOKEN, WEBAPP_URL } = require('./config');

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(BOT_TOKEN);


// Basic commands
bot.command('start', (ctx: any) => {
  ctx.reply('Let\'s get started 🛒' + '\n\n' +
  'Please tap the button below to start recording and checking your tasks', {
    reply_markup: {
      inline_keyboard: [[
        { text: "Mange Your Tasks", web_app: { url: WEBAPP_URL || '' }}

      ]]
    }
  });
});

bot.launch().then(() => {
  console.log('Bot is running...');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));