const Discord = module.require("discord.js");

module.exports = {
   name: "unlock",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send(`<a:Ghalat:840497842551652363>  **شما پرمیشن ندارید** <a:Ghalat:840497842551652363>`)
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle(`<a:dorostt:840513633712603157>  چنل اپدیت شد <a:dorostt:840513633712603157> `)
   .setDescription(`<a:Load2:839542781545938944> ${message.channel}  باز شد <a:Load2:839542781545938944>`)
   .setColor('RANDOM');
   await message.channel.send(embed);
   message.delete();
}
}