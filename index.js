/* 
index.js
mitchbot for Discord and GroupMe
Ethan Smith
*/

require('dotenv').config();
const Express = require('express');
const Discord = require('discord.js');
const fs = require('fs');

let mitchismsList = fs.readFileSync('strings.json');
const mitchisms = JSON.parse(mitchismsList).strings;

function getRandomMitchism() {
    return mitchisms[Math.floor(Math.random() * mitchisms.length)];
}

function initBots() {
    initDiscord(new Discord.Client());
    initGroupme(Express());
}

function initDiscord(discordClient) {
    discordClient.on('ready', () => {
        console.log(`Logged in as ${discordClient.user.tag}!`)
    });
    
    discordClient.on('message', msg => {
        if (msg.content === '8ball') {
            msg.channel.send(getRandomMitchism());
        } else if (msg.content === '🎱') {
            msg.channel.send('I will kill you all');
        }
    });
    
    discordClient.login(process.env.BOT_TOKEN);
}

function initGroupme(groupmeClient) {
    const port = 3000;
    let mitchbotResponse = {
        'bot_id'  : process.env.TEST_GROUPME_TOKEN,
        'text'    : 'Something went wrong... Please contact Wheat Thin'
    };

    // groupmeClient.use(Express.bodyParser());
    groupmeClient.listen(port, () => {console.log('Listening on port', port)});

    groupmeClient.post('/', (request, response) => {
        console.log(request.body);
        if (request.body.text === '8ball') {
            mitchbotResponse.text = getRandomMitchism();
            response.send(mitchbotResponse);
        } else {
            response.send('Something went wrong');
        }
    });
}

initBots();
