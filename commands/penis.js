module.exports = async (bot, message, arg, argF) => {
    const randomNum = Math.floor(Math.random() * 5) + 1; 
    
    if (randomNum === 1) {
        message.channel.send({
            embeds:[{
                title: "Пенсил",
                image: {
                    url: "https://media.discordapp.net/attachments/1098979766071205940/1145357622497779742/ab67616d00001e028453c4a748fb906328e36c29.jpeg",
                    size: 1024
            },
                color: 16528836
        }]
    });
    }
    if (randomNum === 2) {
        message.channel.send({
            embeds:[{
                title: "Пенсил",
                image: {
                    url: "https://media.discordapp.net/attachments/1098979766071205940/1145362382160408708/b0c34caf4d3814d69143af5bba2ce6d8.jpg",
                    size: 1024
                },
                color: 16528836
            }]
        });
    }
    if (randomNum === 3) {
        message.channel.send({
            embeds:[{
                title: "Пенсил",
                image: {
                    url: "https://media.discordapp.net/attachments/1098979766071205940/1145362499227627561/PIC-0495.jpg",
                    size: 1024
                },
                color: 16528836
            }]
        });
        }
    if (randomNum === 4) {
        message.channel.send({
            embeds:[{
                title: "Пенсил",
                image: {
                    url: "https://media.discordapp.net/attachments/1098979766071205940/1145362869370761237/1654178067_1-eropic-cc-p-erotika-chlen-23-sm-3.jpg",
                    size: 1024
                    },
                color: 16528836
                }]
            });
            }
    if (randomNum === 5) {
        message.channel.send({
            embeds:[{
                title: "Пенсил",
                image: {
                    url: "https://media.discordapp.net/attachments/1134464252984426577/1145361729010794506/maxresdefault.png",
                    size: 1024
                    },
                color: 16528836
                }]
            });
            }
    
};
module.exports.names = ["пенис", "пенсил", "Пенис", "Пенсил"]