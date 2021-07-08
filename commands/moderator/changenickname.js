const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-changenick",
    description: "کامند عوض کردن نیک نیم ",
    aliases : [""],
    usage : `a!changenick`,


    
    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('Source ChangeNick ')

        .setDescription(`
        <a:Gif:839543120953081947>     **Link Source Changenick** : https://sourceb.in/OSVcXNZqSP

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)


        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/835893237100707905/839226623021547580/unknown.png')
        
        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send(embed)
    }
}