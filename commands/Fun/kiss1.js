const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "kiss",
  run : async (bot, message) => {
    const data = await fetch("https://nekos.life/api/kiss").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const kissed = message.author.id === user.id ? "خودشو" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Kissed ${kissed}`)
      .setFooter(message.author.username)
      .setColor('RANDOM')
      .setDescription( `   <a:Cat:838314813112582164>   [اگر گیف لود نشد روی همین متن کلیک کنید ](${data.url})   <a:Cat:838314813112582164> `)
      .setImage(`${data.url}`)
      .setFooter(
        `${message.author.tag} در خواست شده توسط `,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();

    message.channel.send({embed});
  },
};
