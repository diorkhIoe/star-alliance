// init require
const Discord = require('discord.js');
var Trello = require('trello')
var trello = new Trello("42197ba326f25b368f77f7be9adb0fbd", "5c9074bc7cc291655ba6dce70e75a4357ba993a4b6ed45fa0bea9b4004853288");
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

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
        if (!args[0]){
            return message.channel.send(`Tell me the name of whom you'd like to search.`)
        }

        const embed = new Discord.MessageEmbed();

        embed
        .setColor("#2f3137")
        .setDescription(`Looking for ${args[0]}'s card...`)
        .setAuthor(message.member.displayName)

        message.channel.send(embed);

        var cardcheck = trello.getCardsOnList("61bd35b62c639428cafcd102");
          cardcheck.then((cards) => {
              for (var k in cards){
                  if (!k.name == args[0]){
                    console.log('wasnt it')
                    console.log(k.name)
                  }else{
                      console.log('wasnt omgdfsga')
                  }
              }
          })
	}
}