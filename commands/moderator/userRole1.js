const { Client , Message , MessageEmbed } = require('discord.js')

module.exports = { 
    name : "userrole",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

    run : async(client , message ,args) =>{
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply(`<a:Ghalat:840497842551652363> **لطفا ممبر مورد نظر را منشن کنید **<a:Ghalat:840497842551652363> `);

        const memberRoles = member.roles.cache
            .filter(roles => roles.id !== message.guild.id)
            .map((role) => role.toString() );

        message.channel.send(
            new MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true}))
            .setDescription(` Role Haye ${member} 👉 ${memberRoles} `)
            .setColor('RANDOM')
        )    
           
    }}