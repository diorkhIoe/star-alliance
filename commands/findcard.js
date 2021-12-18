// init require
const Discord = require('discord.js');
var Trello = require('trello-node-api')("42197ba326f25b368f77f7be9adb0fbd", "5c9074bc7cc291655ba6dce70e75a4357ba993a4b6ed45fa0bea9b4004853288");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// export module
module.exports = {
	name : "getcard",
	description : "View a Points Card",
	aliases : ["get","find"],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		if (!message.member.roles.cache.has('909944484186451988')){
            return message.channel.send(`You don't have the permission to use this command`)
        }
        if (!args[2]){
            return message.channel.send(`Tell me the name of whom you'd like to search.`)
        }

        const embed = new Discord.MessageEmbed();

        embed
        .setColor("#2f3137")
        .setDescription(`Looking for ${args[2]}'s card...'`)
        .setAuthor(message.member.displayName,"https://cdn.discordapp.com/attachments/921164387325214810/921566118194348072/star_alliance_logo.png")

        message.channel.send(embed);

        const filter = (m) => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 45000 })

        collector.on('collect', (msg) => {
            if (msg.content == "cancel"){return message.channel.send('Prompt Failed: Author cancelled')}
            console.log(msg.content)
            var location = msg.content

            const embed2 = new Discord.MessageEmbed();
            embed2
            .setColor("#c99666")
            .setDescription("Thank you, your request has been submitted and the buggy will be driving to your location ASAP. Please be patient and remain where you are until the buggy arrives. Abusing this feature will result in a temporary ban or mute in the Discord Server.")
            .setAuthor("Turkish Airlines Corporate Services","https://cdn.discordapp.com/attachments/921164387325214810/921566118194348072/star_alliance_logo.png")
            message.channel.send(embed2);

            let data = {
                name: message.member.displayName,
                desc: location,
                pos: 'top',
                idList: '61988cbca635ce6a79f38d95'
            };

            const card = Trello.card.create(data);
        })
	}
}