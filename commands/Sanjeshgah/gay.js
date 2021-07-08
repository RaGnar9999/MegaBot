const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gay",

    run : async(bot, message) => {
        const gay = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle(`% Gay Bodan Shoma : ${gay} % Hastesh <:gayboy:859744397703512096>  `)
            .setColor('RANDOM')
          
        .setFooter(
          ` ${message.author.tag} درخواست شده توسط `,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()

        message.channel.send(embed);
    }
};