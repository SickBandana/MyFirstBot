const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready");
    client.user.setPresence({ game: { name: 'https://discord.gg/M53KjuE', type: 0 } });
});

client.login(process.env.BOT_TOKEN);

