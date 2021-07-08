const { Client , Message , MessageEmbed } = require('discord.js')

module.exports = { 
    name : "changenick",
    description : "عوض کردن نیک نیم",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

    run : async(client , message ,args) =>{
        const member = message.mentions.members.first();
        if(!member) return message.reply(`
        
        <a:Ghalat:840497842551652363> **لطفا ممبر مورد نظر را منشن کنید** <a:Ghalat:840497842551652363> 
        
        `);
        const arguments = args.slice(1).join(" ");
        if(!arguments) return message.reply(`
        
        <a:Ghalat:840497842551652363> **لطفا نیک نیم را بنویسید** <a:Ghalat:840497842551652363> 


        `);

        try{
            member.setNickname((arguments));
        } catch (err) {
            console.log(err);
            message.reply(`<:Haminttori2:838324929426227201>  **من پرمیشن**` + member.toString() + `**ندارم**`)
        };
    }}
