module.exports = {
    name: 'reactionrole2',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '806438194848464916';
        const nsfwRole = message.guild.roles.cache.find(role => role.name === "🔞 | nsfw");

        const nsfwEmoji = '🔞';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('get acces to nsfw!')
            .setDescription('you will get acces to nsfw!\n\n'
                + `${nsfwEmoji} to get acces to nsfw! If it doesnt work please make an support ticket\n`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(nsfwEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === nsfwEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(nsfwRole);
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
                if (reaction.emoji.name === nsfwEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(nsfwRole);
                }
            } else {
                return;
            }
        });
    }
 
}   