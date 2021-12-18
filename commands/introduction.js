// init require
const Discord = require('discord.js');

// export module
module.exports = {
	name : "greeting",
	description : "Spawn the bot greeting. (Put in your rules/info channel)",
	aliases : [],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		if (!message.member.roles.cache.has('909944484186451988')){
            return message.channel.send(`You don't have the permission to use this command`)
        }
        if (!args[0]){
            return message.channel.send(`Tell me the name of whom you'd like to search.`)
        }

        const embed = new Discord.MessageEmbed();
        embed
        .setColor("#2f3137")
        .setTitle(`:grey_exclamation: A Member of the Star Alliance`)
        .setDescription(`${message.guild.name} is a member of the Star Alliance.`)
        message.channel.send(embed);
	}
}