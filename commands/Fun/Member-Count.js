const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "membercount",
 
  run: async (client, message, args) => {
    const Members = message.guild.memberCount;

    const humans = message.guild.members.cache.filter(
      member => !member.user.bot
    ).size;
    const online = message.guild.members.cache.filter(
      member => member.presence.status === "online"
    ).size;
    const offline = message.guild.members.cache.filter(
      member => member.presence.status === "offline"
    ).size;
    const dnd = message.guild.members.cache.filter(
      member => member.presence.status === "dnd"
    ).size;
    const idle = message.guild.members.cache.filter(
      member => member.presence.status === "idle"
    ).size;

    const embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`اطلاعات ممبر های سرور`)
      .addField(`تمامی ممبر ها `, Members)
      .addField(`ممبر معمولی`, humans)
      .addField(
        `استاتوس ممبر ها `,
        `<:Online:857903348995719178> : ${online} | <:DND:857903094419292161> : ${dnd} | <:IDLE:857902668399247382>: ${idle} | <:Offline:857902123761139713> : ${offline}`
      )
      .setTimestamp();

    message.channel.send(embed);
  }
};
