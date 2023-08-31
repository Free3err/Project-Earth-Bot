module.exports = async (bot, message, args, argsF) => {
    const member = message.mentions.members.first()??message.member;
    const avatar = member.displayAvatarURL({dynamic: true, size: 1024});
    message.reply({
        embeds:[{
            title: `Аватарка ${member.displayName}`,
            image:{
                url: avatar,
            },
            color: 16528836
        }]
    });
};
module.exports.names = ["аватар", "аватарка", "Аватар", "Аватарка"];