const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setPresence({ game: { name: 'Scimmie', type: 0 } });
});

client.login(process.env.BOT_TOKEN);

