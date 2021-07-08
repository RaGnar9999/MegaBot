
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "mod",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle(`<a:Mod:840186510548008980>  Moderator Commands`)
        .addFields(

            { name: `<:Lock:838301860510171168> Lock`, value: "`mg!lock`", inline: true},
            { name: `<:Unlock:838303480103174154> Unlock `, value: "`mg!unlock`", inline: true},
            { name: `<a:Info:838301209168969758> Server-Info`, value: "`mg!server-info`", inline: true},
            { name: `<a:Ban:838321851607285780> Show-Bans `, value: "`mg!show-bans`", inline: true},
            { name: `<:SlowMode:838302676982169600> SlowMode `, value: "`mg!slowmode`", inline: true},
            { name: `<a:Hamintori:838300352990281739>  UserRole `, value: "`mg!userrole @mention`", inline: true},
            { name: `<:Voice2:838328762067714078> VoiceKick`, value: "`mg!voicekick @mention`", inline: true},
            { name: `<a:Gif:839543120953081947>  VoiceMute `, value: "`mg!voicemute @mention`", inline: true},
            { name: `<a:Voice:838323552029114418>  VoiceUnMute  `, value: "`mg!voiceunmute @mention `", inline: true},
            { name: `<a:Gif1:840195355941404692> Say-Embed `, value: "`mg!say-emebd`", inline: true},
            { name: `<:8399pepenani:853950213868879872> ban` , value: "`mg!ban @mention`" , inline: true},
            {name : `<:pepevalid:856835487200051260> Clear ` , value : "`mg!clear`" , inline : true},
            { name: `<a:Reeeddd:839559663665020929> Changenick`, value: "`mg!changenick @mention `", inline: true},
            { name: `<a:Discord:839066966526132254> Resetnick `, value: "`mg!resetnick @mention `", inline: true},
            { name: `<:emoji_40:838018608838869023> Steal Emoji`, value: "`mg!stealemoji `", inline: true},
            { name: `<a:710249467777122374:813373987370303518> Hackban`, value: "`mg!hackban `", inline: true},

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
