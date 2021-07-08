const Discord  = require('discord.js')
module.exports = {
    name : "ban",
    run : async(client , message) =>{
          if(message.member.hasPermission("ADMINISTRATOR")) {

          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .ban({
                  reason: '<a:Ban:838321851607285780> **بن** <a:Ban:838321851607285780> ',
                })
                .then(() => {
                  message.reply(`<a:dorostt:840513633712603157> **ممبر مورد نظر از سرور بن شد** <a:dorostt:840513633712603157> `);
                })
                .catch(err => {
                  message.reply(`<a:Ghalat:840497842551652363>**من توانای بن کردن ممبر مورد نظر رو ندارم **<a:Ghalat:840497842551652363>`);
                  console.error(err);
                });
            } else {
              message.reply(`<a:Ghalat:840497842551652363>** ممبر مورد نظر رو پیدا نکردم | اشتباه منشن کردی** <a:Ghalat:840497842551652363>`);
            }
          } else {
            message.reply(`<a:Slap:838317925248532530> ** من الان کیو بن کنم ناموسا یکی رو منشن کن بنش کنم خب** <a:Slap:838317925248532530> `);
          }
        }
        }
      }
