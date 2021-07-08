const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports ={
    name : "mahigiri",
run  : async (client, message, args) => {
const fishes = [':fish:', ':tropical_fish:', ':blowfish:', ':boot:'];
        const fish = fishes[Math.floor(Math.random() * fishes.length)];
        message.channel.send(`<a:Mahi:838320272603611147> Shoma Raftid Mahi Giri Va Mahiye  ${fish} Gerftid`);
}}