const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-unlock",
    description: "این کامند مخصوص باز کردن تکست چنل است ",
    aliases : [""],
    usage  :``,

    run : async(client , message) =>{
        const embed = new MessageEmbed()

       .setTitle('Source UnLock.js ')

       
       .setDescription(`
       <a:Gif:839543120953081947>     **Link Source Unlock** : https://sourceb.in/YqHrtedX5q

       <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV

       `)
       

        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/839389256141373450/839389815719723008/unknown.png')

        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send(embed)
    }
}