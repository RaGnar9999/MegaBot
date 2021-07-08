const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-supreme",
    description: "کامند نمایش متن  رو عکس سوپریم ",
    aliases : [""],
    usage : ``,

    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Source Supreme ')
        

        .setDescription(`
        <a:Load2:839542781545938944>    **Link Source Supreme** : https://sourceb.in/d3BoLbB6ll

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)

        
        
        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/839389256141373450/839391044016537621/unknown.png')

        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()

        message.channel.send(embed)
    }
}

