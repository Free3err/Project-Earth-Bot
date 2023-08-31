const fs = require('fs')

module.exports = async (bot, message, args, argsF) => {
  try {
    const userId = message.author.id;
    let userData = {};
    
    try {
        userData = JSON.parse(fs.readFileSync('./Data/data.json')); // читаем данные пользователя из файла
      } catch (error) {
        console.error(error);
      }
    
      if (!userData[userId]) {
        userData[UserId] = { ore: 0, gas: 0, oil: 0, lastUsed_ore: 0, lastUsed_gas: 0, lastUsed_oil: 0} // если данных пользователя нет, создаем новый объект
      }
    
    const ore = userData[userId].ore;
    const oil = userData[userId].oil;
    const gas = userData[userId].gas;
      message.channel.send({
        embeds: [{
          title: 'Ваш склад',
          description: 'В данном разделе вы можете посмотреть, какие полезные ископаемые есть на вашем складе',
          fields: [{
            name: 'Руды',
            value: `${ore} тонны руды`
          },
          {
            name: 'Нефть',
            value: `${oil} баррелей нефти`
          },
          {
            name: 'Газ',
            value: `${gas} кубометров газа`
          }],
          color: 16528836
        }]
      });
    
  } catch (error) {
    console.error(error);
  }
};

module.exports.names = ["склад", "Склад"]