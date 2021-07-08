const Discord = require('discord.js');

module.exports = {
    name: "voicekick",
    run: async (client, message, args) => {
      if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
        return message.channel.send(
          `<a:Ghalat:840497842551652363> **پرمیشن ندارم** <a:Ghalat:840497842551652363>`
        );
  
      if (!message.mentions.members.first())
        return message.channel.send(
         `<a:Ghalat:840497842551652363> **لطفا ممبر مورد نظر را منشن کنید **<a:Ghalat:840497842551652363> `
        );
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`<a:Ghalat:840497842551652363>  **ممبر مورد نظر در ویس حضور ندارد** <a:Ghalat:840497842551652363> `);
  
      message.mentions.members.first().voice.kick();
      
      message.channel.send(`<a:dorostt:840513633712603157>  **ممبر مورد نظر از ویس کیک شد** <a:dorostt:840513633712603157> `)
    }
  };