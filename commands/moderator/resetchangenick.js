const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-resetchangenick",
    description: " کامند کیک کردن ممبر از ویس چنل",
    aliases : ["rcgn"],
    usage : `a!s-rcgn`,


    
    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('Source Resetchangenick ')


        .setDescription(`
        <a:Gif:839543120953081947>     **Link Source Resetchangenick** : https://sourceb.in/RxheCgBTQH

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)

        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/835924311495540756/840529517247987732/unknown.png')
        
        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send(embed)
    }
}