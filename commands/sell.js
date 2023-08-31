const fs = require('fs');
const curatorIds = require('../Data/CuratorIds');

module.exports = async (bot, message, args, argsF) => {
    const arg0 = String(args[0])
    let userData = {};
    const userId = message.author.id;
    let currentDate = new Date();
    let formattedDate = String(currentDate.toLocaleDateString()); // Формат "дд.мм.гггг"
    let formattedTime = String(currentDate.toLocaleTimeString());
    let course = JSON.parse(fs.readFileSync('./Data/course.json'))
    try {
        userData = JSON.parse(fs.readFileSync('./Data/data.json'));
    } catch (error) {
        console.log(error);
    }
    if (!userData[userId]) {
        userData[userId] = { ore: 0, gas: 0, oil: 0, lastUsed_ore: 0, lastUsed_gas: 0, lastUsed_oil: 0 }
    }
    if (arg0 === 'руда') {
        let ore = userData[userId].ore;
        if (ore === 0) {
            message.channel.send({
                embeds: [{
                    title: 'Недостаточно руды',
                    description: 'Упс, кажется у Вас недостаточно руды для продажи.',
                    color: 16528836
                }]
            });
            return;

        } else {
            userData[userId] = userData[userId]
            userData[userId].ore = 0;

            try {
                fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2));
            } catch (error) {
                console.log(error);
            };
            message.channel.send({
                embeds: [{
                    title: "Успешно",
                    description: "Продажа успешна совершена!",
                    fields: [{
                        name: 'Информация о сделке',
                        value: 'Мы уже передали информацию о продаже администраторам, просьба, дождитесь'
                    },
                    {
                        name: 'Кол-во проданных тонн',
                        value: ore
                    },
                    {
                        name: 'Сумма сделки',
                        value: `${ore * course.course.ore} <:emoji_64:1131229992806780929>`
                    },
                    {
                        name: 'Курс сделки',
                        value: `${course.course.ore} <:emoji_64:1131229992806780929>/тонна`
                    }],
                    color: 16528836
                }]
            });
            curatorIds.forEach(curatorId => {
                const user = bot.users.cache.get(curatorId);
                if (user) {
                    user.send({
                        embeds: [{
                            title: 'Сделка',
                            description: 'Выплата <:emoji_64:1131229992806780929> за сделку',
                            fields: [{
                                name: 'Сумма сделки',
                                value: `${ore * course.course.ore} <:emoji_64:1131229992806780929>`
                            },
                            {
                                name: 'Игрок',
                                value: `<@${message.author.id}>`
                            },
                            {
                                name: 'Дата и время сделки',
                                value: `${formattedDate} ${formattedTime}`
                            },
                            {
                                name: 'Чтобы оплатить сделку пропишите следующее',
                                value: '`!add-money <@' + message.author.id + '> ' + ore * course.course.ore + '`'
                            }],
                            footer: {
                                text: 'Нажмите, чтобы скопировать'
                            },
                            color: 16528836
                        }]
                    });
                }
            });
            return;
        };
    };
    if (arg0 === 'газ') {
        let gas = userData[userId].gas;
        if (gas === 0) {
            message.channel.send({
                embeds: [{
                    title: 'Недостаточно газа',
                    description: 'Упс, кажется у Вас недостаточно  газа для продажи.',
                    color: 16528836
                }]
            });
            return;
        } else {
            userData[userId] = userData[userId];
            userData[userId].gas = 0;
            try {
                fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2));
            } catch (error) {
                console.log(error);
            }
            message.channel.send({
                embeds: [{
                    title: "Успешно",
                    description: "Продажа успешна совершена!",
                    fields: [{
                        name: 'Информация о сделке',
                        value: 'Мы уже передали информацию о продаже администраторам, просьба, дождитесь'
                    },
                    {
                        name: 'Кол-во проданных кубометров',
                        value: gas
                    },
                    {
                        name: 'Сумма сделки',
                        value: `${gas * course.course.gas} <:emoji_64:1131229992806780929>`
                    },
                    {
                        name: 'Курс сделки',
                        value: `${course.course.gas} <:emoji_64:1131229992806780929>/кубометр`
                    }],
                    color: 16528836
                }]
            });
            curatorIds.forEach(curatorId => {
                const user = bot.users.cache.get(curatorId);
                if (user) {
                    user.send({
                        embeds: [{
                            title: 'Сделка',
                            description: 'Выплата <:emoji_64:1131229992806780929> за сделку',
                            fields: [{
                                name: 'Сумма сделки',
                                value: `${gas * course.course.gas} <:emoji_64:1131229992806780929>`
                            },
                            {
                                name: 'Игрок',
                                value: `<@${message.author.id}>`
                            },
                            {
                                name: 'Дата и время сделки',
                                value: `${formattedDate} ${formattedTime}`
                            },
                            {
                                name: 'Чтобы оплатить сделку пропишите следующее',
                                value: '`!add-money <@' + message.author.id + '> ' + gas * course.course.gas + '`'
                            }],
                            footer: {
                                text: 'Нажмите, чтобы скопировать'
                            },
                            color: 16528836
                        }]
                    });
                }
            });
            return;
        };
    };
    if (arg0 === 'нефть') {
        let oil = userData[userId].oil;
        if (oil === 0) {
            message.channel.send({
                embeds: [{
                    title: 'Недостаточно нефти',
                    description: 'Упс, кажется у Вас недостаточно нефти для продажи.',
                    color: 16528836
                }]
            });
            return;
        } else {
            userData[userId] = userData[userId];
            userData[userId].oil = 0;
            try {
                fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2));
            } catch (error) {
                console.log(error);
            }
            message.channel.send({
                embeds: [{
                    title: "Успешно",
                    description: "Продажа успешна совершена!",
                    fields: [{
                        name: 'Информация о сделке',
                        value: 'Мы уже передали информацию о продаже администраторам, просьба, дождитесь'
                    },
                    {
                        name: 'Кол-во проданных баррелей',
                        value: oil
                    },
                    {
                        name: 'Сумма сделки',
                        value: `${oil * course.course.oil} <:emoji_64:1131229992806780929>`
                    },
                    {
                        name: 'Курс сделки',
                        value: `${course.course.oil} <:emoji_64:1131229992806780929>/кубометр`
                    }],
                    color: 16528836
                }]
            });
            curatorIds.forEach(curatorId => {
                const user = bot.users.cache.get(curatorId);
                if (user) {
                    user.send({
                        embeds: [{
                            title: 'Сделка',
                            description: 'Выплата <:emoji_64:1131229992806780929> за сделку',
                            fields: [{
                                name: 'Сумма сделки',
                                value: `${oil * course.course.oil} <:emoji_64:1131229992806780929>`
                            },
                            {
                                name: 'Игрок',
                                value: `<@${message.author.id}>`
                            },
                            {
                                name: 'Дата и время сделки',
                                value: `${formattedDate} ${formattedTime}`
                            },
                            {
                                name: 'Чтобы оплатить сделку пропишите следующее',
                                value: '`!add-money <@' + message.author.id + '> ' + oil * course.course.oil + '`'
                            }],
                            footer: {
                                text: 'Нажмите, чтобы скопировать'
                            },
                            color: 16528836
                        }]
                    });
                }
            });
            return;
        };
    } else {
        message.channel.send({
            embeds: [{
                title: "Ошибка",
                description: 'Кажется, вы пропустили параметр [ископаемое].',
                fields: [{
                    name: "Имена параметров",
                    value: "[руда], [газ], [нефть]"
                },
                {
                    name: 'Пример',
                    value: "-Продать нефть"
                }],
                color: 16528836
            }]
        });
        return;
    }
};
module.exports.names = ["продать", "селл"];