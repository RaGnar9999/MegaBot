const { MessageEmbed } = require('discord.js');

module.exports = {
    name : "statusinfo",
    run : async(bot , message , args ) => {
        const members = message.guild.members.cache.array();
        const online = members.filter((m) => m.presence.status === 'online').length;
        const offline =  members.filter((m) => m.presence.status === 'offline').length;
        const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
        const afk =  members.filter((m) => m.presence.status === 'idle').length;
        const embed = new MessageEmbed()
          .setTitle(`وضعیت استاتوس اعضای سرور ${message.guild.name}`)
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .addField("**تعداد کل اعضای سرور** <a:8633pepehack:856833105700978708> ", message.guild.memberCount)
          .addField("**آنلاین** <:Online:857903348995719178> ", `${online}`)
          .addField("**مزاحم نشوید** <:DND:857903094419292161> ", `${afk}`)
          .addField("**ای اف کی** <:IDLE:857902668399247382> ", `${dnd}`)
          .addField("**آفلاین** <:Offline:857902123761139713> ", `${offline}`)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setColor('RANDOM')
          .setFooter(
            `${message.author.tag} در خواست شده توسط `,
            message.author.displayAvatarURL({ dynamic: true })
          )

        .setTimestamp()
        message.channel.send(embed);
      }}