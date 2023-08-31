const fs = require('fs')

module.exports = async (bot, message, args, argsF) => {
    let news = JSON.parse(fs.readFileSync('./Data/news.json'))
    message.channel.send({
        embeds:[{
            title: 'Новости',
            description: 'В данном разделе Вы можете ознакомиться с новостями бота',
            fields:[{
                name: 'Что произошло?',
                value: news.news.news
            }],
            color: 16528836  
        }]
    })
};
module.exports.names = ['новости']