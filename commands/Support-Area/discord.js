const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "discord",
    description: "با جوین شدن در سرور دیسکورد ساپورت بات  از اخرین اطلاعات بات با خبر بشید",
    aliases : [''],
    usage : ``,
    
    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('لینک دیسکورد ')

        .setDescription(
             `<:Support:838304562057445386> Link Discord Support Server :  https://discord.gg/NGVkGdDccV`
			
        
             )
        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')

        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )

        .setTimestamp()
        message.channel.send(embed)
    }
}