
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "fun",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<a:Fun1:845949570868576297> Fun Commands `)
        .addFields(
       
            { name: `<:NoAvatar:838299448643026976>  Ascii `, value: "`mg!ascii <matn phingilish>`", inline: true},
            { name: `<a:Dog1:840195806342152232> Avatar `, value: "`mg!avatar @mention`", inline: true},
            { name: `<:Txt:846348466396725248>  EmojiTXT `, value: "`mg!emojitxt <matn phingilish>`", inline: true},
            { name: `<:Hug:838314364762324992>  Hug`, value: "`mg!hug @mention`", inline: true},
            { name: `<a:Cat:838314813112582164>  Kiss `, value: "`mg!kiss @mention`", inline: true},
			{ name: `<:G_MegaHmmmm:859445469414424597> MemberCount `, value: "`mg!membercount `", inline: true},
            { name: `<:Connection:838297694756667392> Ping `, value: "`mg!ping`", inline: true},
            { name: `<a:Gif1:840195355941404692> Random-Channel `, value: "`mg!randomchannel`", inline: true},
            { name: `<a:Riyazi:839070324175667212> Riyazi `, value: "`mg!riyazi`", inline: true},
            { name: `<a:Slap:838317925248532530> Slap `, value: "`mg!slap @mention`", inline: true},
            { name: `<:796780114742345738:853160595649462272> Bot-Info`, value : "`mg!bot-info`", inline : true},
            { name: `<a:Gif:839543120953081947> Uptime `, value: "`mg!uptime`", inline: true},
            {name: `<a:8633pepehack:856833105700978708> Statusinfo` , value : "`mg!statusinfo`", inline : true}
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
