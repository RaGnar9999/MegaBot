const { MessageEmbed } = require("discord.js");
const math = require("mathjs");

module.exports = {
  name: "riyazi",

  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send(` 
      <a:Riyazi:839070324175667212>  **لطفا سوال خود را بنویسید جهت محاسبه** <a:Riyazi:839070324175667212> 
      
      <a:Riyazi:839070324175667212>   ** 2+2 : مثال** <a:Riyazi:839070324175667212> 
      `);

      
      const embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(` 👇جواب  👇`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`
      
      <a:Ghalat:840497842551652363>  **سوال شما غلط است لطفا دوباره تلاش کنید **  <a:Ghalat:840497842551652363> 
      
      
      `).then(() => console.log(error));
    }
  }
};
