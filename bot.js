const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config.json');

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setPresence({ game: { name: 'Sono veramente SICK', type: 0 } });
});

//comandi
client.on('message', async message => {
    const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const newName = args.join(" ");
    
    let Admin = message.guild.roles.find("name","Admin");
    
    if(message.content ===cfg.prefix + 'ping'){
       message.reply('pong!').then(msg => msg.delete(5000)); 
     }
    
    if(message.content ===cfg.prefix + 'nano'){
       message.channel.send('è una scimmia urlante'); 
     }
    
    if(message.content ===cfg.prefix + 'ciao'){
       message.delete(); 
       message.author.send('hello'); 
     }
    
    if(command === 'nick') {
          if(message.member.roles.has(Admin.id)) {
              if(newName) {
                client.user.setUsername(newName);
                message.channel.send('UserName del bot cambiato in ' + newName)
              } else {
                message.channel.send('Errore durante l\'esecuzione di tale comando. Controlla la console....');
              }
          } else {
              message.author.sendMessage("Non hai il permesso di utilizzare questo comando");
              message.delete();
          }
    }
    const argomentfull = args.join(" ");
    
    if(command === 'an'){
      
    message.channel.send (`${argomentfull}`);  
    }
})

client.login(process.env.BOT_TOKEN);
