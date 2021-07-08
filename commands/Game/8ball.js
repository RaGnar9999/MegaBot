const { MessageEmbed } = require('discord.js');
const reactions = ['😅', '🙂', '🤔']; 
const answers = [ 'نه،نه،نه' , 'آره', 'آره،چرا که نه', 'آره،من مطمعنم', 'فکر نکنم', 'شاید'];
cooldown: 10,

module.exports = {
  name: '8ball',

   run  : async(client, message, args) => { 
    const question = args.join(' ');
    if (!question) return message.channel.send(`<:9458bruhh:853213554882641950> یه سوال بگو جوابتو بدم `);
    const botans = new MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setColor('RANDOM')
      .setTitle(`${client.user.username} 8Ball :`)
      .setDescription(`${message.author} سوال پرسید: \n\`${question}?\` \nجواب من : \n**${reactions[Math.floor(Math.random() * reactions.length)]} - ${answers[Math.floor(Math.random() * answers.length)]} !**`)
      
      message.channel.send(botans).then(() => message.delete());
  }
}
