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

    var Prefix = '!'
    var words = message.content.split(' ')
    var command = words[0]
    var istrue = false

    switch(command){
        case Prefix + 'HI_CRUSADE': {
            message.channel.send("HI_CRUSADE!")
            istrue = true
            break
        }
        case Prefix + 'ping':{
            message.channel.send(":ping_pong: Pong!")
            istrue = true
            break
        }
        
    }
    if(!istrue && message.content.includes('!')){
        message.channel.send('BRUH!')
    }
}) 
