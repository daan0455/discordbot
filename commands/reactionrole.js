module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '815601165172736010';
        const nieuwtjeRole = message.guild.roles.cache.find(role => role.name === "🌍 | nieuwtje");

        const nieuwtjeEmoji = '✅';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('verify so you get acces!')
            .setDescription('verifying will give you acces to all channels! If it doesnt work please make an support ticket\n\n'
                + `${nieuwtjeEmoji} to get verified\n`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(nieuwtjeEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === nieuwtjeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(nieuwtjeRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === nieuwtjeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(nieuwtjeRole);
                }
            } else {
                return;
            }
        });
    }
 
}   