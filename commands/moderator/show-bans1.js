const { Client , Message , MessageEmbed } = require("discord.js");

module.exports = { 
    name : "show-bans",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */

    run : async(client , message ,args) => {
        if(!message.member.permissions.has("BAN_MEMBERS")) return;
        
        const fetchBans = message.guild.fetchBans();
        const bannedMembers = (await fetchBans)
        .map((member) => member.user.tag)
        .join("\n");
        message.channel.send(bannedMembers); 
    },
    };