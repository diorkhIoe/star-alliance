// init require
const Discord = require('discord.js');
const fs = require("fs");
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const owner = process.env.Owner;
const prefix = process.env.Prefix;

// export module
module.exports = {
	name : "help",
	description : "BOT help commands",
	aliases : ["?","h"],
	ussage : "[command]",
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		const {description, color} = client.setting;
		const own = client.users.resolve(owner);
		var desc = description.replace(/{{owner}}/g,`\`\`${own.tag}\`\``);


		var util = client.util;
		const embed = new Discord.MessageEmbed();

		if(!args[0]){
			var cm = commandFiles.map((e,i) => {
				const cmd = require(`../commands/${e}`)
				if(!cmd.hidden){
					return `| #${util.tn(util.addZero(i+1,2),1)} | ${util.tn(cmd.name,2)} | ${util.tn(cmd.aliases.join(", "),4)} |`
				}
				return null;
			});

			var batas = "+--------+------------+----------------------+",
			header = `\`\`\`\n| #${util.tn("No",1)} | ${util.tn("commands",2)} | ${util.tn("aliases",4)} |\n\`\`\``

			embed
			.setColor(color.hack)
			.setAuthor(`${client.user.username} | Help & About`)
			.setDescription(
				`**List of command:**\n${header}\`\`\`css\n${cm.filter(e => {return e !== null} ).join("\n")}\`\`\`\n`
				)

			return message.channel.send(embed);

		}
		
	}
}