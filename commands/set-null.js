const fs = require('fs')
const adminIds = require('../Data/AdminIds')

module.exports = async (bot, message, args, argsF) => {
    const userId = message.mentions.members.first()?.id || message.member.id;
    let userData = {};
    if (adminIds.includes(message.author.id)) {
        try {
            userData = JSON.parse(fs.readFileSync('./Data/data.json'));
            userData[userId] = 0;
            fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2));
            message.channel.send({
                embeds: [{
                    title: 'Успешно',
                    description: 'Данные объектов пользователя в массиве обнулены!',
                    color: 16528836
                }]
            });
        } catch (error) {
            message.channel.send({
                embeds: [{
                    title: 'Ошибка',
                    description: 'Пользователь не найден в массиве данных!',
                    color: 16528836
                }]
            });
            console.log(error)
            return;
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
module.exports.names = ["Обнулить", "обнулить"]