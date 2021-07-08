const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");


module.exports = {
  name: "playstore",
  aliases: ["pstore", "googleplaystore", "ps"],

  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        `<a:Gif:839543120953081947>  لطفا نام برنامه مورد نظر را بنویسید - ${message.author.username} <a:Gif:839543120953081947> `
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `<a:Ghalat:840497842551652363> برنامه مورد نظر یافت نشد  - ${message.author.username} <a:Ghalat:840497842551652363> `
        );
      }

      let Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(App.summary)
        .addField(`قیمت`, App.priceText, true)
        .addField(`دولوپر`, App.developer, true)
        .addField(`نمره`, App.scoreText, true)
        .setFooter(` ${message.author.username} در خواست شده توسط `)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  }
};