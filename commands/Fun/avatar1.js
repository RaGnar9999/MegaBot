const { Client , Message, User, MessageEmbed} = require('discord.js');
module.exports = { 
    name : "avatar",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client , message ,args) =>{
        const member = message.mentions.members.first();
    message.channel.send(
        new  MessageEmbed()
            .setTitle(`  <a:Gif1:840195355941404692>   ${member.user.tag} اواتار  <a:Gif1:840195355941404692>  `)
            .setImage(member.user.displayAvatarURL({dynamic : true, size : 512}))
            .setColor('RANDOM')
            .setFooter(
                `${message.author.tag} در خواست شده توسط `,
                message.author.displayAvatarURL({ dynamic: true })
              )
            .setTimestamp()
            
        )
       
    }}