const ms = require("ms")
const { MessageEmbed } = require('discord.js')

module.exports ={
    name : "timer",
    run : async(bot, message, args) => {

        if (!args[0] || args[0] <= 0) return message.channel.send("Lotfan Zaman Morede Nazar Ra Type Konid")
        let timer = args[0]
        try {
          let time = ms(ms(timer), { long: true })
      
          const embed2 = new MessageEmbed()
          
              .setColor(`RANDOM`)
              .setDescription("Timer Start Shod " + ` Modat Zaman : \n **${time}**`)
          message.channel.send(embed2)
        } catch {
          message.channel.send("Lotfan Vahed Zamani Ra Entekhab Konid \n `(s) , (m) , (h) \n: `timer 2m**`")
        }
        setTimeout(function () {
          let time = ms(ms(timer), { long: true })
          const embed = new MessageEmbed()
          
              .setColor(`RANDOM`)
              .setDescription(`Timer Shoma Be Payan Resid${message.author}, Time Set Shode \n **${time}**`)
          message.channel.send(embed)
        }, ms(timer))
      
      }
}