var Discord = require("discord.js")
var Client = new Discord.Client();
var config = require("./Config.json")
var modules = []
require("dotenv").config();

Client.login(process.env.token)

Client.on("ready", ()  => {
    Client.user.setActivity(`${config.game}!`, {url: null, type: 'watching'})
    console.log(`${Client.user.tag} is now online and ready for a crusade!`)
})

Client.on("message", message => {

    if(message.author.id == Client.user.id) return

    if(message.content == "!ping"){
        message.channel.send(":ping_pong: Pong!")
    }else if(message.content.includes("!")){
        message.channel.send("BRUH!")
    }
})