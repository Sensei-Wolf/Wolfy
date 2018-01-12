

 const Discord = require("discord.js");
 const client =  new Discord.Client();


 

client.login('NDAwNzQ5NzY5OTc2MzE1OTA0.DTmadA.T1mEKhOi24uv3M1y-OiOzM_bxyI')

 

client.on('message', (message) => {
     if(message.content == "ping") {
        message.channel.sendMessage('pong')
     }
 });

 client.on('message', (message) => {
     if(message.content == '!help') {
         message.channel.sendMessage('the commands are nothing right now, sorry')
        
        }
 });


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

client.on('message', member => {
        if(message.content == '!crole') {
           var role = member.guild.roles.find('name', 'Me Sons')
            member.addRole(role)
        }
});




