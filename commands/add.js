const fs = require('fs');
const adminIds = require('../Data/AdminIds');

module.exports = async (bot, message, args, argsF) => {
    let userData = {};
    const arg0 = args[0];
    const arg1 = String(args[1]);
    const arg2 = Number(args[2]);
    const userId = message.mentions.members.first()?.id || message.member.id;
    userData = JSON.parse(fs.readFileSync('./Data/data.json'))
    
    if (adminIds.includes(message.author.id)) {
        if (isNaN(arg2) || !arg0 || !arg1) {
            message.channel.send({
                embeds: [{
                    title: 'Ошибка',
                    description: 'Вы не указали один из параметров: [игрок], [что], [кол-во]!',
                    color: 16528836
                }]
            });
            return;

        } else if (arg1 === 'руда') {
                message.channel.send({
                    embeds: [{
                        title: 'Успешно',
                        description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                        fields: [{
                            name: 'Что выдано',
                            value: 'Руда'
                        },
                        {
                            name: 'Кол-во выданной руды',
                            value: arg2 + ' тонн'
                        },
                        {
                            name: 'Кому выдано',
                            value: `<@${userId}>`
                        },
                        {
                            name: 'Кем выдано',
                            value: `<@${message.author.id}>`
                        }],
                        color: 16528836
                    }]
                })
                userData[userId] = userData[userId];
                userData[userId].ore += arg2
                fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2))
            } else if (arg1 === 'газ') {
                message.channel.send({
                    embeds: [{
                        title: 'Успешно',
                        description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                        fields: [{
                            name: 'Что выдано',
                            value: 'Газ'
                        },
                        {
                            name: 'Кол-во выданного газа',
                            value: arg2 + ' кубометров'
                        },
                        {
                            name: 'Кому выдано',
                            value: `<@${userId}>`
                        },
                        {
                            name: 'Кем выдано',
                            value: `<@${message.author.id}>`
                        }],
                        ccolor: 16528836
                    }]
                })
                userData[userId] = userData[userId];
                userData[userId].gas += arg2
                fs.writeFileSync('./Data/data.json', JSON.Stringify(userData, null, 2))
            } else if (arg1 === 'нефть') {
                message.channel.send({
                    embeds: [{
                        title: 'Успешно',
                        description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                        fields: [{
                            name: 'Что выдано',
                            value: 'Нефть'
                        },
                        {
                            name: 'Кол-во выданной нефти',
                            value: arg2 + ' баррелей'
                        },
                        {
                            name: 'Кому выдано',
                            value: `<@${userId}>`
                        },
                        {
                            name: 'Кем выдано',
                            value: `<@${message.author.id}>`
                        }],
                        color: 16528836
                    }]
                })
                userData[userId] = userData[userId];
                userData[userId].oil += arg2
                fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2))
            } else {
                message.channel.send({
                    embeds: [{
                        title: 'Ошибка',
                        description: 'Кажется, Вы указали неверный параметр [ископаемое]!',
                        fields: [{
                            name: 'Имена параметров',
                            value: '[руда], [газ], [нефть]'
                        },
                        {
                            name: 'Пример',
                            value: '-Выдать <@692725875786907719> руда 10'
                        }],
                        color: 16528836
                    }]
                });
        };
    } else {
        message.channel.send({
            embeds: [{
                title: 'Доступ запрещен',
                description: 'Извините, но у Вас недостаточно прав для использования этой функции!',
                color: 16528836
            }]
        });
    };
};
module.exports.names = ["выдать"]