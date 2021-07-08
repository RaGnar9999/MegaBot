const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "randomchannel",
  run: async (client, message, args) => {
    let channel = message.guild.channels.cache.random();

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`<a:dorostt:840513633712603157> چنل به صورت رندوم انتخاب شد <a:dorostt:840513633712603157>  `)
      .setDescription(`${channel}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};