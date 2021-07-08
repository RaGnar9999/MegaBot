const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hashariyat",

    run : async(bot, message) => {
        const hshri = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle(`% Hashari Bodan Shoma : ${hshri} % Hastesh <a:ExcusemeWtf:859745087197937664>   `)
            .setColor('RANDOM')
          
        .setFooter(
          ` ${message.author.tag} درخواست شده توسط `,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()

        message.channel.send(embed);
    }
};