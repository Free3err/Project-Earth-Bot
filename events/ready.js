/**
 * @param {import('discord.js').Client} bot 
*/
module.exports = async (bot) => {
    console.log(bot.user.username + " START! \nBot by Freezerr_");

    bot.user.setPresence({
        activities: [
            {
                name: '-хелп',
                PresenceStatus: 'idle',
                type: 3
            }
        ],
        status: 'idle'
    });
};