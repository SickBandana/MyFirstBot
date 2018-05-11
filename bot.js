const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config.json');



client.login(process.env.BOT_TOKEN);
