const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "s-server-info",
        description: "اطلاعات سرور  ",
        aliases : ["s-i"],
        usage : `a!s-s-i`,

        
        run : async(client , message) =>{
            const embed = new MessageEmbed()

            .setTitle('Source ServerInfo.js ')

            .setDescription(`
            <a:Gif:839543120953081947>     **Link Source Server Info ** : https://sourceb.in/3lFwLd2lwV
    
            <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV
    
            `)
    
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