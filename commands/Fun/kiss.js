const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-kiss",
    description: "کامند بوس کردن ",
    aliases : [""],
    usage : ``,


    
    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('Source Kiss ')

        
        .setDescription(`
        <a:Load2:839542781545938944>    **Link Source Kiss ** : https://sourceb.in/ABj2zzocaR

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)


        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/839389256141373450/839390362313424896/unknown.png')
        
        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        
        message.channel.send(embed)
    }
}