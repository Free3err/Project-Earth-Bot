const fs = require('fs');
const cron = require('node-cron');

module.exports = async (bot, message, args, argsF) => {
  let userData = {};
  const userId = message.author.id;
  const currentTime = new Date().getTime();
  try {
    userData = JSON.parse(fs.readFileSync('./Data/data.json')); // читаем данные пользователя из файла
  } catch (error) {
    console.error(error);
  }
  if (!userData[userId]) {
    userData[userId] = { ore: 0, gas: 0, oil: 0, lastUsed_ore: 0, lastUsed_gas: 0, lastUsed_oil: 0}

    try {
      fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2)); // записываем данные пользователя в файл
    } catch (error) {
      console.error(error);
    }
  }
  const randomNum = Math.floor(Math.random() * 5) + 1; // генерируем случайное число от 1 до 5
  const lastUsedTime = userData[userId].lastUsed_ore;
  let remainingTimeInSeconds = 2 * 60 * 60 - (currentTime - lastUsedTime) / 1000;
  let remainingTimeInHours = Math.ceil(remainingTimeInSeconds / 3600);
  let remainingTimeInMinutes = Math.ceil(remainingTimeInSeconds / 60);

  console.log(currentTime)
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

  if (randomNum === 1) {
    message.reply({
      embeds: [{
        title: 'Добыча руды',
        description: 'Меню добычи руды',
        fields: [{
          name: 'Результат',
          value: `Вы добыли ${randomNum} тонну руды! Поздравляем!`
        }],
        color: 16528836
      }]
    });
  } else if (randomNum < 5) {
    message.reply({
      embeds: [{
        title: 'Добыча руды',
        description: 'Меню добычи руды',
        fields: [{
          name: 'Результат',
          value: `Вы добыли ${randomNum} тонны руды! Поздравляем!`
        }],
        color: 16528836
      }]
    });
  } else {
    message.reply({
      embeds: [{
        title: 'Добыча руды',
        description: 'Меню добычи руды',
        fields: [{
          name: 'Результат',
          value: `Вы добыли ${randomNum} тонн руды! Поздравляем!`
        }],
        color: 16528836
      }]
    });
  }

  userData[userId] = userData[userId];
  userData[userId].ore += randomNum; // добавляем количество руды в данные пользователя
  userData[userId].lastUsed_ore = currentTime;

  try {
    fs.writeFileSync('./Data/data.json', JSON.stringify(userData, null, 2)); // записываем измененные данные пользователя в файл
  } catch (error) {
    console.error(error);
  }
};

module.exports.names = ["Руда", "руда"];
