const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "invite",
    description: "با اینوایت کردن بات به سرور خود به تیم پشتیبانی انرژی میدید",
    aliases : ['in'],
    usage : `a!invite - a!in` ,
    
    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('لینک اینوایت بات ')

        .setDescription(
            
            `<:Invite:838304965972721685> : https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot`)

        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')

        .setThumbnail('https://cdn.discordapp.com/attachments/835928913422712903/846339153707794442/21_Angular_logo_logos-512.png')

        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )

        .setTimestamp()
        message.channel.send(embed)
    }
}