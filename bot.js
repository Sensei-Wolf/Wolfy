

 const Discord = require("discord.js");
 const client =  new Discord.Client();



 

client.login(process.env.BOT_TOKEN)

 const prefix = "!"

client.on('message', (message) => {
     if(message.content == "ping") {
        message.channel.sendMessage('pong')
     }
 });





client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'Me Sons');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });
  


client.on('message', message => {
    if(message.content == prefix + "help") {
        message.channel.sendMessage("There are no commands right now.")
    }   
});

client.on('message', message => { 
    if(message.content == prefix + "betarole") {
        let role = message.guild.roles.find("name", "Beta Testers");
        message.guik
    }
});





