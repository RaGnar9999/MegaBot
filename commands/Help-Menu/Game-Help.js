
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "game",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<a:Gameee:839764263748108308>  Game Commands `)
        .addFields(
       
            { name: `<a:Mahi:838320272603611147> Mahigiri `, value: "`mg!mahigiri`", inline: true},
            { name: `<:nm:857885753534840842>   Shir-Khat `, value: "`mg!shir-khat`", inline: true},
            { name : `<:833221908241711127:853177122738405398> 8Ball` , value : "`mg!8ball <soal>`", inline : true},  
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
