const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config.json');

client.on("ready", () => {
    console.log("I am ready");
    client.user.setPresence({ game: { name: 'https://discord.gg/M53KjuE', type: 0 } });
});

//comandi
client.on('message', async message => {
    if(message.content ===cfg.prefix + 'ping'){
       message.reply('pong!'); 
     }
})

client.login(process.env.BOT_TOKEN);
