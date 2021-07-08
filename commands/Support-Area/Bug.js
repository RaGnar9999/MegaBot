const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient("");

module.exports = {
    name : "bug",
    run : async(client , message , args) => {
        if(!args.join(" ")){
            return message.channel.send("لطفا باگ را مطرح کنید تا سریع بر طرف بشه")
          }
        try {
            webhookClient.send(`${args.join(" ")}`, {
                username: `${message.member.displayName}`,
                avatarURL: `${message.member.user.displayAvatarURL({ dynamic: true, size: 512})}`,
            });
        } catch (error) {
            console.error('Error trying to send: ', error);
        }
        
        message.channel.send(`> باگی که ریپورت کردید با موفقیت به دست تیم ادمینی بات رسید \n > ${args.join(" ")} `);
        message.delete();
    }};