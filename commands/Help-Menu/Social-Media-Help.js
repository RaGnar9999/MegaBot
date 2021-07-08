
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "s-m",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<a:Load2:839542781545938944> Social Media Commands `)
        .addFields(
       
            { name: `<:Github:839081270154887178> Github`, value: "`mg!github`", inline: true},
            
    
            { name: `<a:Reeeddd:839559663665020929> PlayStore `, value: "`mg!playstore`", inline: true },
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
