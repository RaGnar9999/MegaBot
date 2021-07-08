
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "image",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<a:792050288458203167:849545636352098344>  Image Commands `)
        .addFields(

            { name: `<:797904500055998514:849545867630477333>  Clyde `, value: "`mg!clyde <matn>`", inline: true},

            { name: `<:Supreme:839071161123995658> Supreme `, value: "`mg!supreme <matn>`", inline: true},

 

            {name : `<:emoji_52:845974866418991104> Captcha` , value : "`mg!captcha @mention`" , inline : true},
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
