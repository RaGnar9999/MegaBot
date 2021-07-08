const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "slap",
  run : async (bot, message) =>{
    const data = await fetch("https://nekos.life/api/v2/img/slap").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const slapped = message.author.id === user.id ? "خودشو" : user.username;

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`${message.author.username} Slapped ${slapped}`)
      .setDescription(`<a:Slap:838317925248532530>   [اگر گیف لود نشد روی همین متن کلیک کنید](${data.url}) <a:Slap:838317925248532530> `)
      .setImage(`${data.url}`)
      .setFooter(
        `${message.author.tag} در خواست شده توسط `,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();


    message.channel.send({ embed });
  },
};