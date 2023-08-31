const fs = require('fs');
const adminIds = require('../Data/AdminIds')

module.exports = async (bot, message, args, argsF) => {
    const arg0 = String(args[0]);
    const arg1 = String(args[1]);

    if (adminIds.includes(message.author.id)) {
        if (arg0 === 'обновление') {
            try {
                let annoc = JSON.parse(fs.fileReadSync('./news.json'))
            } catch (error) {
                console.log(error)
            }
            annoc.news = annoc.news;
            annoc.news.updates = arg1;
            try {
                fs.fileWriteSync('./Data/news.json', JSON.stringify(annoc, null, 2))
            } catch (error) {
                console.log(error)
            }
            channel.message.send({
                embeds:[{
                    title: 'Объявление "Обновление" было изменено',
                    description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                    fields:[{
                        name: 'Текущий текст',
                        value: arg1
                    }],
                    color: 16528836
                }]
            });
        return;
        };
        if (arg0 === 'новости') {
            try {
                let annoc = JSON.parse(fs.fileReadSync('./news.json'))
            } catch (error) {
                console.log(error)
            }
            annoc.news = annoc.news;
            annoc.news.news = arg1;
            try {
                fs.fileWriteSync('./Data/news.json', JSON.stringify(annoc, null, 2))
            } catch (error) {
                console.log(error)
            }
            channel.message.send({
                embeds:[{
                    title: 'Объявление "Новости" было изменено',
                    description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                    fields:[{
                        name: 'Текущий текст',
                        value: arg1
                    }],
                    color: 16528836
                }]
            });
            return;
        } else {
            channel.message.send({
                embeds:[{
                    title: 'Ошибка',
                    description: 'Кажется, вы не указали параметр [объявление]',
                    fields:[{
                        name: 'Имена параметров',
                        value: '[обновление], [новости]'
                    },
                    {
                        name: 'Пример',
                        value: '-выложить обновление Ничего не изменилось.'
                    }],
                    color: 16528836
                }]
            });
        }

    } else {
        message.channel.send({
            embeds: [{
                title: 'Доступ запрещен',
                description: 'Извините, но у Вас недостаточно прав для использования этой функции!',
                color: 16528836
            }]
        });
    }
};
module.exports.names = ['выложить']