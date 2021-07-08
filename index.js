const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const TimeOut = new Collection();
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on("ready", () => {
  function YousamPower() {
    let hungry = ["mg!help" , `${client.guilds.cache.size} Servers` , `${client.users.cache.size} users` ]
    let Power = Math.floor(Math.random() * hungry.length);
    client.user.setActivity(hungry[Power], {type: "WATCHING"});
  }; setInterval(YousamPower, 10000)
});
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on('guildCreate', giuld => {
    let logbot = client.channels.cache.get('855163967290867712').send('**bot dar server **' + giuld.name + `**join shod <:792353913771786250:849546010556760085>** `)
console.log('bot dar server `' + giuld.name + "`join shod")
})

  client.on('guildDelete', giuld => {
      let logbot = client.channels.cache.get('855163967290867712').send('**bot az server** ' + giuld.name + `**leave dad <:811876157930602506:849545900137119745>** `)
  console.log('bot az server ' + giuld.name + "leave dad")
  })




client.login(token)
