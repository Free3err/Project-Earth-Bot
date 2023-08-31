const fs = require('fs')

module.exports = async (bot, message, args, argsF) => {
    let news = JSON.parse(fs.readFileSync('./Data/news.json'))
    message.channel.send({
        embeds:[{
            title: 'Обновление',
            description: 'В данном разделе Вы можете ознакомиться с обновлениями бота',
            fields:[{
                name: 'Что изменилось?',
                value: news.news.updates
            }],
            color: 16528836  
        }]
    })
};
module.exports.names = ['об-обновлении']