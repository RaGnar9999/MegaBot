
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "python",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<:Python:855510270503551038> Python Toturial `)
        .addFields(

            { name: `<:Python:855510270503551038> Python Part 1`, value: "`mg!python1`", inline: true},
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
