const Discord = require('discord.js');
module.exports = {
    name: "slowmode",
    run: (client, message, args) => {
        const amount = parseInt(args[0])
        if(message.member.hasPermission("MANAGE_CHANNEL"))
        if(isNaN(amount)) return message.channel.send(`
        <a:Ghalat:840497842551652363>  **عدد را لطفا دوباره انتخاب کنبد , عدد انتخاب شده مورد تایید نمی باشد** <a:Ghalat:840497842551652363> 
        `)
        if(args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount)
        if(amount > 1) {
        message.channel.send(`**<a:dorostt:840513633712603157>  اسلومود فعال شد**  ` + amount +  `**ثانیه**`)
        return
        }
        else {message.channel.send( `**<a:dorostt:840513633712603157> اسلومود درحال حاضر** ` + amount + ` ثانیه`)
        return }
    } if(args[0] === amount + "min") {
        message.channel.setRateLimitPerUser(amount * 60)
        if(amount > 1) {
        message.channel.send(`**<a:dorostt:840513633712603157>  اسلومود فعال شد**  ` + amount + `**دقیقه**`)
        return
        } else { 
            message.channel.send(`**<a:dorostt:840513633712603157>  اسلومود فعال شد**  ` + amount +  `**دقیقه**`)   
             
    
    return }
    } if(args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60)
        if(amount > 1) {
        message.channel.send(`**<a:dorostt:840513633712603157>  اسلومود فعال شد**  ` + amount + `**ساعت**`)
        return
        } else {
            message.channel.send(`**<a:dorostt:840513633712603157>  اسلومود فعال شد**`  + amount +  `**ساعت**`)
        return}
    } else {
        message.channel.send(`<a:Ghalat:840497842551652363>  Shoma Faghat Mitavanid  seconds(s), minutes(min) and hours(h) Ra Set Konid <a:Ghalat:840497842551652363> `)
    }

    }
}