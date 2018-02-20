 const Discord = require("discord.js");
 const client =  new Discord.Client();




let queue = {};


let prefix = "!";


client.login(process.env.BOT_TOKEN);



client.on("ready", () => {
    client.user.setActivity('Owning ' + client.guilds.size + ' servers!!!');
  });


   client.on('message', message => {
    if(message.content == prefix + "listemojis") {
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send(emojiList);
      }
});

    client.on('message', message => {
        if(message.content == prefix + 'kick') {
            let member = message.mentions.members.first();
            ownerRole = message.member.roles.find('name', 'Admins');
            modRole = message.member.roles.find('name', 'Moderators');
                if(!ownerRole && !modRole) {
                   return message.channel.sendMessage('You don\'t have permissions to kick people');
                }
                if(!member) {
                    return message.reply('Please enter a valid member');
                }
                if(!member.kickable)  {
                   return message.reply('I cannot kick this user!! he/she has a higher role!!');
                }
              

          }
     });

     client.on('message', message => {
         if(message.content == prefix + 'help') {
             message.reply('the commands are !listemojis and kick for now :) ')
         }
     });

     client.on('guildMemberAdd', member => {
        console.log('Member' + member.user.username + 'has join the server');
        
        client.user.send('Member ' + member.user.username + ' has join the server');
        
        var role = member.guild.roles.find('name', 'Members');

        member.addRole(role);
     });

     client.on('message', message => {
         if(message.content == 'ping') {
             message.reply('Congrats, you found a easter egg :)')
         }
     });


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});



