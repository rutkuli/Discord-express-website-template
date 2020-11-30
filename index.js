const Discord = require('discord.js'),
    config = require("./config"),
	website = require("./website/app"),
	client = new Discord.Client({ disableMentions: 'everyone' });
    client.login(config.website.token);
	
client.on('ready', () => {
  console.log(`Express template, is ready for use.`, "ready");
		if(config.website.enabled){
			website.load(client);
		}	
		client.user.setActivity(`Express template`, {type: "WATCHING"});
});