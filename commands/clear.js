module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    description: "This commands deletes messages!",
    async execute(message, args){


        if(!args[0]) return message.reply("please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number");
        
        if(args[0] > 50) return message.reply("you cant delete more than 50 messages at one time!");
        if(args[0] < 1) return message.reply("you must delete atleast one message!");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            
        });
    }
    }
