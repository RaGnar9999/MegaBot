
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "support",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<:Support:838304562057445386> Support Commands `)
        .addFields(
       
            { name: ` <:Invite:838304965972721685> invite`, value: "`mg!invite`", inline: true},
            
            { name: `<a:Discordd:846342063137226772>  Discord Support`, value: "`mg!discord`", inline: true },

            {name : `<a:sirenRed:856099210147135508> Bug Report`, value : "`mg!bug <matn>`" , inline : true}
    
        
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
