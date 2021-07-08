const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "server-info",
        description: "اطلاعات سرور  ",
run: async(client, message, args) => {
const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("اطلاعات سرور")
        .setImage(message.guild.iconURL)
        .setDescription(`${message.guild}: نام سرور`)
        .addField(`<a:Crownnnn:840531828887519252> OwnerShip`, `اونرشیپ سرور:  ${message.guild.owner}`)
        .addField(`<a:Hamintori:838300352990281739> Member Count`, `تعداد ممبر: ${message.guild.memberCount} `)
        .addField(`<a:sadd:839556962521055293> Emoji Count`, `تعداد ایموجی: ${message.guild.emojis.cache.size} `)
        .addField(`<a:Gif1:840195355941404692> Roles Count`, `تعداد رول: ${message.guild.roles.cache.size}`)
        message.channel.send(embed)
    }
};