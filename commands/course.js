const fs = require('fs');
const adminId = require('../Data/AdminIds');

module.exports = async (bot, message, args, argsf) => {
    if (adminId.includes(message.author.id)) {
        let type = String(args[0]);
        let policy = Number(args[1]);
        if (type === 'руда') {
            try {
                let course = JSON.parse(fs.readFileSync('./Data/course.json'));
                course.course = course.course
                course.course.ore = policy
                message.channel.send({
                    embeds: [{
                        title: 'Уведомление',
                        description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                        fields: [{
                            name: 'Изменение курса руды',
                            value: `Текущий курс: ${policy}/тонна руды`
                        }],
                        color: 16528836
                    }]
                });
                try {
                    fs.writeFileSync('./Data/course.json', JSON.stringify(course, null, 2));
                } catch (error) {
                    console.log(error)
                };
            } catch (error) {
                console.log(error)
            };
            return;
        };

        if (type === 'газ') {
            try {
                let course = JSON.parse(fs.readFileSync('./Data/course.json'));
                course.course = course.course
                course.course.gas = policy
                message.channel.send({
                    embeds: [{
                        title: 'Уведомление',
                        description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                        fields: [{
                            name: 'Изменение курса газа',
                            value: `Текущий курс: ${policy}/кубометр газа`
                        }],
                        color: 16528836
                    }]
                });
                try {
                    fs.writeFileSync('./Data/course.json', JSON.stringify(course, null, 2));
                } catch (error) {
                    console.log(error)
                };
            } catch (error) {
                console.log(error)
            };
            return;
        };

        if (type === 'нефть') {
            try {
                let course = JSON.parse(fs.readFileSync('./Data/course.json'));
                course.course = course.course
                course.course.oil = policy
                message.channel.send({
                    embeds: [{
                        title: 'Уведомление',
                        description: 'Внимание! Ваши действия могут привести к критическим ошибкам! Будьте осторожны!',
                        fields: [{
                            name: 'Изменение курса нефти',
                            value: `Текущий курс: ${policy}/баррель нефти`
                        }],
                        color: 16528836
                    }]
                });
                try {
                    fs.writeFileSync('./Data/course.json', JSON.stringify(course, null, 2));
                } catch (error) {
                    console.log(error)
                };
            } catch (error) {
                console.log(error)
            };
            return;
        } else {
            message.channel.send({
                embeds: [{
                    title: 'Не удалось выполнить действие',
                    description: 'Вы не указали параметр [ископаемое]',
                    fields: [{
                        name: 'Имена параметров',
                        value: `[руда], [газ], [нефть]`
                    },
                    {
                        name: 'Пример',
                        value: `-Курс газ 100000`
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
    };
};
module.exports.names = ["Курс", "курс"]