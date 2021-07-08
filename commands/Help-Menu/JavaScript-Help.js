
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "js",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<:javascript:855510864798023680> JavaScript Toturial `)
        .addFields(

            { name: `<:javascript:855510864798023680> JavaScript Part 1`, value: "`mg!js1`", inline: true},
            )

        .setColor('RANDOM')
        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )

        .setTimestamp()
        message.channel.send(embed );
    }
}
