const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "s-avatar",
        description: "سورس اواتار ",
        aliases : [""],
        usage : `` ,
        
        run : async(client , message) =>{
            const embed = new MessageEmbed()

            .setTitle('Source Avatar.js')

            .setDescription(`
        <a:Load2:839542781545938944>    **Link Source Avatar** :  https://sourceb.in/yattI1IKUS

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)


            .setColor('RANDOM')

            .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
            .setImage('https://media.discordapp.net/attachments/835893237100707905/839224856864227378/unknown.png')

            .setFooter(
                `${message.author.tag} در خواست شده توسط `,
                message.author.displayAvatarURL({ dynamic: true })
              )
            .setTimestamp()
           
            message.channel.send(embed)
        }
    }