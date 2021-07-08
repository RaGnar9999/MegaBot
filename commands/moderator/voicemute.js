const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "s-voicemute",
    description: " کامند سرور میوت کردن ممبر در ویس",
    aliases : [""], 
    usage : ``,


    
    run : async(client , message) =>{
        const embed = new MessageEmbed()

        .setTitle('Source Voicemute ')


        .setDescription(`
        <a:Gif:839543120953081947>     **Link Source Voicemute** : https://sourceb.in/yX9hEmM3ce
 
        <:Support:838304562057445386>   **Link Support Server** : https://discord.gg/NGVkGdDccV
 
        `)


        .setColor('RANDOM')

        .setURL('https://discord.com/api/oauth2/authorize?client_id=839085608743469086&permissions=8&scope=bot')
        .setImage('https://media.discordapp.net/attachments/839376870336102410/839382436600348682/unknown.png' )
        
        .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send(embed)
    }
}