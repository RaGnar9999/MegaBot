const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  name: "Supreme",
  aliases: ["supreme", "Supreme", "SUPREME"],
  run: async (client, message, args) => {
    let say = message.content.split(" ").slice(1).join(" ")
    if(!say) return message.channel.send(`
    <a:Ghalat:840497842551652363>  **لطفا یک متن بنویسید** <a:Ghalat:840497842551652363>
    `)
    const data = await fetch(`https://elevicky.sirv.com/supreme.jpg?w=425&h=130&scale.option=ignore&text.0.text=${say}&text.0.color=fefefe`)

    const embed = new discord.MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setFooter(message.author.username)
      .setColor('RANDOM')
      .setDescription(`[اگر عکس لود نشد روی همین متن کلیک کنید](${data.url})`)
      .setImage(`${data.url}`)
      .setFooter(
        `${message.author.tag} در خواست شده توسط `,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();


    message.channel.send(embed);
  }
}