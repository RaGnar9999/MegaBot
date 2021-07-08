const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clyde",

 run :  async (bot, message, args) => {
    const text = args.join(" ");
    if (!text) return message.reply(`
    <a:Ghalat:840497842551652363>  **لطفا یک متن بنویسید** <a:Ghalat:840497842551652363>
    `);

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Clyde")
      .setImage(data.message)
      .setFooter(message.author.username)
      .setColor('RANDOM')
      .setDescription(
        `[اگر عکس لود نشد لطفا روی همین متن کلیک کنید](${data.message})`
      )
      
      .setFooter(
        `${message.author.tag} در خواست شده توسط `,
        message.author.displayAvatarURL({ dynamic: true })
      )
    .setTimestamp()
   

    message.channel.send(embed);
  },
};