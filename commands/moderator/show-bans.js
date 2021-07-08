const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-show-bans",
    description: " کامند تمامی افرادی که از سرور بن هستن ",
    aliases : [""],
    usage : ``,


    
    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('Source Show-Bans ')


        
        .setDescription(`
        <a:Gif:839543120953081947>     **Link Source Show-Bans** : https://sourceb.in/P5zym6geeg

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV
        `)

        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/839376870336102410/839378971602452490/unknown.png')
        
        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send(embed)
    }
}