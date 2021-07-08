
const { MessageEmbed} = require('discord.js')

module.exports ={
    name : "help",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    run : async(client , message) =>{


        const embed = new MessageEmbed()
       .setTitle(`<:Helpme:839766452223082567> Help`)
       .setColor('RANDOM')
       .addFields(

        { name: `<a:Mod:840186510548008980> Mod`, value: "`mg!mod`", inline: true},

        { name: `<a:Fun1:845949570868576297> Fun`, value: "`mg!fun`", inline: true },

        { name :`<a:Gameee:839764263748108308> Game`, value: "`mg!game`", inline: true},

        { name :`<a:Load2:839542781545938944>  Social Media`, value: "`mg!s-m`", inline: true},

        { name :`<:Youtube:838634837752807457> Youtube`, value: "`mg!youtube`", inline: true},

        { name :`<a:792050288458203167:849545636352098344>  Image`, value: "`mg!image`", inline: true},

        { name :`<:weirdsip:859745762669363210> Sanjeshgah`, value: "`mg!sanjeshgah`", inline: true},

        { name :`<:Support:838304562057445386>  Support`, value: "`mg!support`", inline: true}

       )
        
       .setDescription(`
       
       شما به راحتی میتوانید سورس  کامند های بات رو بگیرید \n mg!s-نام کامند \n mg!s-github
       `)
       .setFooter(
        `${message.author.tag} در خواست شده توسط `,
        message.author.displayAvatarURL({ dynamic: true })
      )


        message.channel.send(embed );
    }
}
