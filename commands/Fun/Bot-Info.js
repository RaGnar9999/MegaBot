const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "bot-info",
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Adhd v${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('Uptime', `${ms(client.uptime)}`, true)
            .addField('WebSocket Ping', `${client.ws.ping}ms`, true)
            .addField('Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('Guild Count', `${client.guilds.cache.size} guilds`, true)
            .addField(`User Count`, `${client.users.cache.size} users`, true)
            .addField('Commands', `${client.commands.size} cmds`,true)
            .addField('Node', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField('Cached Data', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
            .addField('Discord.js', `${discordjsVersion}`, true)
            .setTimestamp()
        );
    }
}
