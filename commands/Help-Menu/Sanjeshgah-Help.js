const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "sanjeshgah",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<:weirdsip:859745762669363210>  Sanjeshgah Commands `)
        .addFields(
       
            { name: ` <a:200IQ:859741941872066560> IQ`, value: "`mg!iq`", inline: true},
            
            { name: `<:gayboy:859744397703512096>  Gay`, value: "`mg!gay`", inline: true },

            {name : `<a:ExcusemeWtf:859745087197937664> Hashariyat`, value : "`mg!hashariyat`" , inline : true}
    
        
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
