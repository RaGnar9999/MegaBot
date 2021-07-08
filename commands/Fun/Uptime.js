const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-uptime",
    description: "کامند اپتایم ",
    aliases : [""],
    usage : ``,

    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Source Uptime ')
        
        .setDescription(`
        <a:Load2:839542781545938944>    **Link Source Uptime** : https://sourceb.in/ZVRIDDmX1H

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)

        
        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/835924311495540756/840521801046163476/unknown.png')

        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()

        message.channel.send(embed)
    }
}

