
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "youtube",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<:Youtube:838634837752807457> Youtube Commands`)
        .addFields(
       
            { name: `<a:Gif1:840195355941404692> Youtube`, value: "`mg!yt`", inline: true},
            { name: `<:javascript:855510864798023680> JavaScript `, value: "`mg!js`", inline: true},
            {name: `<:Python:855510270503551038> Python`, value: "`mg!python`"}
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
