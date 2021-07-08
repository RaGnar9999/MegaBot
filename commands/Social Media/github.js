const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-github",
    description: "کامند گیتهاب",
    aliases : [""],
    usage : ``,

    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Source Github ')
        

        .setDescription(`
        <a:sadd:839556962521055293>      **Link Source Github** : https://sourceb.in/AraSCz0yAc

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV
 
        `)

        
        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/835893237100707905/839369476070834176/unknown.png?width=577&height=473')

        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()

        message.channel.send(embed)
    }
}

