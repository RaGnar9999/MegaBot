const Discord = require("discord.js");

module.exports = {
  name: "uptime",

  run: async (client, message, args) => {
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;

  let uptime = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`<a:Reeeddd:839559663665020929> **اپتایم بات** <a:Reeeddd:839559663665020929>`)
    .addField("**: روز**", `${days}`)
    .addField("**: ساعت**" , `${hours}`) 
    .addField("**: دقیقه**", `${minutes}`) 
    .addField("**: ثانیه**", `${seconds}`)
    .setFooter(
        `${message.author.tag} در خواست شده توسط `,
        message.author.displayAvatarURL({ dynamic: true })
      )
    .setTimestamp()

  message.channel.send(uptime);
  }
}