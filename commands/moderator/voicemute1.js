const Discord = require('discord.js');
module.exports = {
    name: "voicemute",
   run :  async (bot, message, args) => {
      if (!message.guild.me.hasPermission("MUTE_MEMBERS"))
        return message.channel.send(             `<a:Ghalat:840497842551652363> **شما پرمیشن ندارید** <a:Ghalat:840497842551652363>`        );
  
      const muteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
      );
      const muteReason = args.join(" ").slice(23);
  
      if (!message.member.hasPermission("MUTE_MEMBERS" || "ADMINISTRATOR"))
        return message.channel.send( 
             `<a:Ghalat:840497842551652363> **شما پرمیشن ندارید** <a:Ghalat:840497842551652363>`
        );
  
       if (!muteUser)
        return message.channel.send(`<a:Ghalat:840497842551652363>**لطفا ممبر مورد نظر را منشن کنید** <a:Ghalat:840497842551652363>`);
  
      if (muteUser.voice.serverMute) {
        return message.channel.send(`
            <a:Ghalat:840497842551652363>  ** ممبر مورد یا تو ویس حضور ندارد یا میوت هستش** <a:Ghalat:840497842551652363>
        `);
      }
  
      message.channel.send(
        `<a:dorostt:840513633712603157>  ${muteUser} **ممبر مورد نظر میوت شد** <a:dorostt:840513633712603157>`
      );
    },
  };