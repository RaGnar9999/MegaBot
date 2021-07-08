const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-say-embed",
    aliases : ["s-e"],
    description: "این کامند مخصوص سی به حالت ام بد هستش ",
    usage : `a!s-e`,

    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('Source Say-Embed  ')


        .setDescription(`
        <a:Gif:839543120953081947>     **Link Source Say-Embed ** : https://sourceb.in/aqAlDk1Btl

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)

        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://cdn.discordapp.com/attachments/839376870336102410/839377512031191050/unknown.png')
        
        .setFooter(

            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send(embed)
    }
}