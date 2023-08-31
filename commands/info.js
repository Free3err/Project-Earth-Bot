module.exports = async (bot, message, args, argsF) => {
    message.channel.send({
        embeds:[{
            title: 'ℹ️ Информация о боте',
            description: 'В данном разделе предоставлена полезная информация о боте',
            fields:[{
                name: 'Для чего написан бот?',
                value: 'Бот предоставляет помощь в управлении экономики на сервере Project Earth',
            },
            {
                name: 'Кто создатель бота?',
                value: 'Бота создал `freezerr_`'
            },
            {
                name: 'Какие команды имеет бот?',
                value: 'Вы можете с ними ознакомиться, прописав `~Помощь`',
            }
        ],
            color: 16528836
        }],
    });
};
module.exports.names = ["Инфо", "инфо"]