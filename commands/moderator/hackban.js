const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'hackban',
  
   run :  async (client, message, args) =>  {

        if (!message.member.hasPermission("BAN_MEMBERS")) {

            return message.channel.send(`<a:Ghalat:840497842551652363>  **شما پرمیشن ندارید** <a:Ghalat:840497842551652363>`);

        }


        let userID = args[0];

        let reason = args.slice(1).join(" ");


        if (!userID) return message.channel.send(`<a:Ghalat:840497842551652363> **ایدی مورد نظر اشتباه است** <a:Ghalat:840497842551652363>`);

        if (isNaN(userID)) return message.channel.send(`<a:Ghalat:840497842551652363> **ایدی فقط باید شامل عدد باشد** <a:Ghalat:840497842551652363>`);

        if (userID === message.author.id) return message.channel.send( `<a:Ghalat:840497842551652363> **نمیتونی خودتو بن کنی ** <a:Ghalat:840497842551652363> `);

        if (userID === client.user.id) return message.channel.send(`<a:Ghalat:840497842551652363>  **منو نمیتونی بن کنی ** <a:Ghalat:840497842551652363> `);


        if (!reason) reason = `<a:Ghalat:840497842551652363> **دلیل نوشته نشده** <a:Ghalat:840497842551652363>`;


        client.users.fetch(userID).then(async user => {

            await message.guild.members.ban(user.id, { reason: reason });

            return message.channel.send(`**${user.tag}** با موفقیت هک بن شد`);

        }).catch(error => {
            return message.channel.send(`ارور: **${error}**`);
        });
    }};