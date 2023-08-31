const fs = require('fs')

module.exports = async (bot, message, args, argsF) => {
    const hasRole = message.guild.members.cache.get(message.author.id);
    const role = '1098979765228154928';
    const userId = message.author.id;
    let userData = {};
    let currentTime = new Date().getTime();
    if (hasRole.roles.cache.has(role)) {
        try {
            userData = JSON.parse(fs.readFileSync('./Data/data.json'))

            if (!userData[userId]) {
                userData[userId] = { ore: 0, gas: 0, oil: 0, lastUsed_ore: 0, lastUsed_gas: 0, lastUsed_oil: 0 }

                try {
                    fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2)); // записываем данные пользователя в файл
                } catch (error) {
                    console.error(error);
                }
            };

            const randomNum = Math.floor(Math.random() * (1000 - 200) + 200); // генерируем случайное число от 1 до 5
            const lastUsedTime = userData[userId].lastUsed_oil;
            let remainingTimeInSeconds = 2 * 60 * 60 - (currentTime - lastUsedTime) / 1000;
            let remainingTimeInHours = Math.ceil(remainingTimeInSeconds / 3600);
            let remainingTimeInMinutes = Math.ceil(remainingTimeInSeconds / 60);

            if (currentTime - lastUsedTime < 2 * 60 * 60 * 1000) {
                if (remainingTimeInHours === 2) {
                    message.reply({
                        embeds: [{
                            title: "Ошибка",
                            fields: [{
                                name: "Время не прошло",
                                value: `Пожалуйста, повторите команду через ${remainingTimeInHours} часа`
                            }],
                            color: 16528836
                        }]
                    });
                    return;
                }
                if (remainingTimeInHours === 1) {
                    message.reply({
                        embeds: [{
                            title: "Ошибка",
                            fields: [{
                                name: "Время не прошло",
                                value: `Пожалуйста, повторите команду через ${remainingTimeInHours} час`
                            }],
                            color: 16528836
                        }]
                    });
                    return;
                }
                if (remainingTimeInMinutes >= 60 && remainingTimeInMinutes <= 120) {
                    message.reply({
                        embeds: [{
                            title: "Ошибка",
                            fields: [{
                                name: "Время не прошло",
                                value: `Пожалуйста, повторите команду через ${remainingTimeInMinutes} минут`
                            }],
                            color: 16528836
                        }]
                    });
                    return;
                }
                if (remainingTimeInMinutes >= 1 && remainingTimeInMinutes <= 5) {
                    message.reply({
                        embeds: [{
                            title: "Ошибка",
                            fields: [{
                                name: "Время не прошло",
                                value: `Пожалуйста, повторите команду через ${remainingTimeInMinutes} минуты`
                            }],
                            color: 16528836
                        }]
                    });
                    return;
                }
                if (remainingTimeInMinutes === 1) {
                    message.reply({
                        embeds: [{
                            title: "Ошибка",
                            fields: [{
                                name: "Время не прошло",
                                value: `Пожалуйста, повторите команду через ${remainingTimeInMinutes} минуту`
                            }],
                            color: 16528836
                        }]
                    });
                    return;
                }
            }
            message.reply({
                embeds: [{
                    title: 'Добыча нефти',
                    description: 'Меню добычи нефти',
                    fields: [{
                        name: 'Результат',
                        value: `Вы добыли ${randomNum} баррелей нефти! Поздравляем!`
                    }],
                    color: 16528836
                }]
            });

            userData[userId] = userData[userId];
            userData[userId].oil += randomNum; // добавляем количество руды в данные пользователя
            userData[userId].lastUsed_oil = currentTime;

            try {
                fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2)); // записываем измененные данные пользователя в файл
            } catch (error) {
                console.error(error);
            }

        } catch (error) {
            console.log(error)
        }
    } else {
        message.channel.send({
            embeds: [{
                title: "Действие невозможно",
                description: `Вы не имеете нужного развития экономики! Чтобы использовать данную команду нужно иметь <@&${role}>!`,
                color: 16528836
            }]
        })
    }
};
module.exports.names = ['нефть']