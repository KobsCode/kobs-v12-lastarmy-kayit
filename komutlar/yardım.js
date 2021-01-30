const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RED')
    .addField('**Kayıt**','`!erkek : Bir Kişiyi Erkek Olarak Kayıt Edersin`')
    .addField('**Kayıt**','`!kız : Bir Kişiyi Kız Olarak Kayıt Edersin`')
    .addField('**İstatistik**','`!i : Botun İstatistiklerini Gösterir`')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/727202608133046415/727205052808298546/Kobs_server.png') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};