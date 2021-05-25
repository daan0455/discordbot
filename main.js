const Discord = require('discord.js');

require ('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '_';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
    client.user.setActivity("Custom made bot by jou pa met badmuts op vragfiets#8228 !", {
      type: "PLAYING",
      status: "ONLINE",
    });  

});

client.once('ready', () => {
    console.log('Gaming Community bot is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole =guildMember.guild.roles.cache.find(role => role.name === '--------------levels---------------');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('797122373131567147').send(`Welcome <@${guildMember.user.id}> to the server make sure to verify in <#815601165172736010>`)
});

client.on('guildMemberRemove', guildMember =>{
    let welcomeRole =guildMember.guild.roles.cache.find(role => role.name === '--------------levels---------------');

    guildMember.roles.remove(welcomeRole);
    guildMember.guild.channels.cache.get('805740033876295701').send(` <@${guildMember.user.id}> heeft de server verlaten, doei maat hoop dat je je vader vind :man_detective:`)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } 
    else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
    else if(command === 'ticket'){
        client.commands.get('ticket').execute(message, args, client);
    } 
    else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } 
    else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }
    else if(command === 'image'){
        client.commands.get('image').execute(client, message, args);
    }
    else if(command === 'reactionrole2'){
        client.commands.get('reactionrole2').execute(message, args, Discord, client);
    } 
    else if(command === 'slowmode'){
        client.commands.get('slowmode').execute(message, args);
    } 
    else if(command === 'embed'){
        client.commands.get('embed').execute(client, message, args);
    }
    else if(command === 'avatar'){
        client.commands.get('avatar').execute(client, message, args);
    }
    else if(command === 'weather'){
        client.commands.get('weather').execute(client, message, args);
    }
    else if(command === 'ms'){
        client.commands.get('ms').execute(client, message);
    }
    else if(command === '8ball'){
        client.commands.get('8ball').execute(client, message, args);
    }
    else if(command === 'remind'){
        client.commands.get('remind').execute(message, args, client, Discord);
    }
    else if(command === 'sticky'){
        client.commands.get('sticky').execute(message, args);
    }
});


client.login(process.env.DISCORD_TOKEN);
