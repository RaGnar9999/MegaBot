const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const fetch = require("node-fetch")

module.exports = {
    name: "github",
    run: async (client, message, args) => {

       try {

  if (!args[0]) return message.channel.send(`<a:Reeeddd:839559663665020929> **لطفا ایدی مورد نظر را بنویسید** <a:Reeeddd:839559663665020929> `)
    
  fetch(`https://api.github.com/users/${args.join('-')}`)
    .then(res => res.json()).then(body => {
      if(body.message) return message.channel.send(`<a:Ghalat:840497842551652363> **یوزر مورد نظر یافت نشد** <a:Ghalat:840497842551652363> `);
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

            const embed = new MessageEmbed()
            .setAuthor(`${login} اطلاعات`, avatar_url)
            .setColor(`RANDOM`)
            .setThumbnail(`${avatar_url}`)
            .addField(`یوزرنیم`, `${login}`)
            .addField(`ایدی`, `${id}`)
            .addField(`بایو`, `${bio || "بایو ندارد"}`)
            .addField(`ریپازیتوری پابلیک`, `${public_repos || "ندارد"}`, true)
            .addField(`تعداد فالور`, `${followers}`, true)
            .addField(`تعداد فالوینگ`, `${following}`, true)
            .addField(`لوکیشن`, `${location || "لوکیشنی ندارد"}`)
            .addField(`اکانت ساخته شده `, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
            message.channel.send(embed)

    })

        } catch (error) {
            console.log(`ارور:\n`, error);
            return message.channel.send(`<a:Ghalat:840497842551652363> لطفا دوباره تلاش کنید <a:Ghalat:840497842551652363> `)
        }
    }
};