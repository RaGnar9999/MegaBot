const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-lock",
    description: "این کامند مخصوص قفل کردن تکست چنل است ",
    aliases : [""],
    usage : ``,

    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('Source Lock.js ')

        .setDescription(`
        <a:Gif:839543120953081947>     **Link Source Lock** : https://sourceb.in/J4BUOgwYO3

        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

        `)

    
        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/839389256141373450/839389517512572969/unknown.png')
        
        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send(embed)
    }
}