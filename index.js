const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.DISCORD_TOKEN

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(TOKEN);
