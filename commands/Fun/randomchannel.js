const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-randomchannel",
    description: " کامند تگ کردن چنل به صورت رندوم",
    aliases : ["rc"],
    usage : `a!rc`,

    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Source Random Channel ')
        

        .setDescription(`
        <a:Load2:839542781545938944>    **Link Source Random Channel** : https://sourceb.in/4PnsAcTDtO

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)

        
        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/839389256141373450/839390623383552010/unknown.png')

        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()

       
        message.channel.send(embed)
    }
}

