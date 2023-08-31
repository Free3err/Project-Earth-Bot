const adminId = require('../Data/AdminIds');

module.exports = async (bot, message, args, argsF) => {
    if (adminId.includes(message.author.id)) {
        message.channel.send({
            embeds: [{
                title: 'Список админ-команд',
                description: 'Привет, я Duplio, и вот список админ-команд, которые тебе доступны:',
                fields: [{
                    name: '-Курс [ископаемое] [курс]',
                    value: 'Установить курс'
                },
                {
                    name: '-Выдать [кому] [ископаемое] [кол-во]',
                    value: 'Выдать ископаемое игроку'
                },
                {
                    name: '-Обнулить [кого]',
                    value: 'Обнулить данные объектов в массиве игрока'
                },
                {
                    name: '-Установить [тип-объявления] [текст]',
                    value: 'Установить текст объявления'
                }],
                thumbnail: {
                    url: 'https://media.discordapp.net/attachments/1098979767048482983/1145096876601905164/ezgif-2-3e884d204d.gif'
                },
                color: 16528836
            }]
        });
    };
    message.channel.send({
        embeds: [{
            title: 'Список команд',
            description: 'Привет, я Duplio, и вот список команд, которые тебе доступны:',
            fields: [{
                name: '-Помощь',
                value: 'Информация о доступных вам командах'
            },
            {
                name: '-Инфо',
                value: 'Полезная информация о боте'
            },
            {
                name: '-Новости',
                value: 'Новости бота'
            },
            {
                name: '-Об-обновлении',
                value: 'Узнать информацию о новых обновлениях и нововведениях'
            },
            {
                name: '-Аватар [никнейм]',
                value: 'Отправить аватар другого участника'
            },
            {
                name: '-Руда',
                value: 'Добыть руду'
            },
            {
                name: '-Нефть',
                value: 'Добыть нефть'
            },
            {
                name: '-Газ',
                value: 'Добыть газ'
            },
            {
                name: '-Склад',
                value: 'Просмотреть, какие полезные ископаемые есть на вашем складе'
            },
            {
                name: '-Продать [ископаемое]',
                value: 'Продать ископаемое'
            },
            {
                name: '-Пенсил',
                value: 'Скидывает фотку пенсила'
            }],
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/1098979767048482983/1145096876601905164/ezgif-2-3e884d204d.gif'
            },
            color: 16528836
        }]
    });
};
module.exports.names = ["хелп", "помощь"];