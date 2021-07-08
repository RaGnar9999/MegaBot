const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "iq",

    run : async(bot, message) => {
        const iq = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle(`% IQ Shoma : ${iq} % Hastesh <a:200IQ:859741941872066560> `)
            .setColor('RANDOM')
          
        .setFooter(
          ` ${message.author.tag} درخواست شده توسط `,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()

        message.channel.send(embed);
    }
};