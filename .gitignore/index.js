const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Commandes : *help");
    console.log("Connected");
});

bot.login("NTg5ODEwMDc3ODQ2OTk0OTU0.XQZGGA.Fw8EapGg_RqngFNSvoYq_Bc8jEk");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n *tt \n *fabriquant \n *exe");
    }

    if (message.content === prefix + "tt"){
        message.channel.send("**Création du bot le 16/06/2019**");
        console.log("Commande effectué");
    }

    if (message.content === "Salut"){
        message.reply("**Bien le bonjour :)**");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.channel.send("**Le fabriquant est ErtiNowx**");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "exe"){
        message.channel.send("**Voici Ma Chaîne YouTube : https://www.youtube.com/channel/UCtvWvTgwXTtnnf79p8mrXig?view_as=subscriber**");
        console.log("Commande effectué");
    }
});
