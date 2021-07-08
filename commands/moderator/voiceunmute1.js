const Discord = require('discord.js');
module.exports = {
    name: "voiceunmute",
   run :  async(bot, message, args)  =>{
      if (!message.guild.me.hasPermission("MUTE_MEMBERS"))
        return message.channel.send( `<a:Ghalat:840497842551652363> **شما پرمیشن ندارید** <a:Ghalat:840497842551652363>`
        );
  
      const unmuteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
      );
  
      if (!message.member.hasPermission("MUTE_MEMBERS" || "ADMINISTRATOR"))
        return message.channel.send(`<a:Ghalat:840497842551652363> **شما پرمیشن ندارید** <a:Ghalat:840497842551652363>`
        );
  
       if (!unmuteUser)
        return message.channel.send(`<a:Ghalat:840497842551652363>**لطفا ممبر مورد نظر را منشن کنید** <a:Ghalat:840497842551652363>`);
  
      if (!unmuteUser.voice.serverMute) {
        return message.channel.send(
            `
            <a:Ghalat:840497842551652363>  ** ممبر مورد یا تو ویس حضور ندارد یا ان میوت هستش** <a:Ghalat:840497842551652363>
        `        );
      }
  
      unmuteUser.voice.setMute(false, "unmuteReason");
  
      message.channel.send(
        `${unmuteUser} <a:dorostt:840513633712603157>  ممبر مورد نظر ان میوت شد <a:dorostt:840513633712603157> `
      );
    },
  };