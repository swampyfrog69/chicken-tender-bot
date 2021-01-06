const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '£chicken') {
    msg.channel.send('tenders');
  }
});

client.login('Nzk2MTI4MTMxNjQzMjExNzk3.X_TaGQ.uXYy_p_uMJDX3KYP8aYIStjjvKI');
