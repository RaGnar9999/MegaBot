const discord = require("discord.js");
const figlet = require("figlet"); 

module.exports = {
    name: "ascii",
    run: async (client, message, args) => {

   let text = args.join(" ");
   if(!text) {
return message.channel.send(`
<a:Ghalat:840497842551652363>  **لطفا یک متن بنویسید** <a:Ghalat:840497842551652363>

`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`
<a:Ghalat:840497842551652363>  **لطفا متن مورد نظر بیش از 20 کارکتر نباشد** <a:Ghalat:840497842551652363> `)
}
 
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};