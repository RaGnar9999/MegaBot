const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "hug",
  run : async (bot, message)  => {
    const data = await fetch("https://nekos.life/api/hug").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const hugged = message.author.id === user.id ? "خودشو" : user.username;

    const embed = new MessageEmbed()
      .setTitle(` <:Hug:838314364762324992> ${message.author.username} Hugged ${hugged} <:Hug:838314364762324992>     `)
      .setColor('RANDOM')
      .setDescription(`[اگر گیف لود نشد روی همین متن کلیک کنید](${data.url})`)
      .setImage(`${data.url}`)
      .setFooter(
        `${message.author.tag} در خواست شده توسط `,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();

    message.channel.send(embed);
  },
};