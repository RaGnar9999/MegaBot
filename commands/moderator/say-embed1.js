const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "say-embed",
run: async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:Ghalat:840497842551652363>  | `+` **را داشته باشید ||Manage Messages|| شما نمی توانید از کامند استفاده کنید باید پرمیشن**`)
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`<a:Ghalat:840497842551652363> | `+"**مسیج داده شده غلط است لطفا دوباره تلاش کنید**")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor('RANDOM')
.setFooter(`Embed by ${message.author.username}`)
.setTimestamp()
  message.channel.send(embed)
}
}