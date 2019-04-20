/* 
index.js
mitchbot for Discord
Ethan Smith
*/

require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

let strings = fs.readFileSync('strings.json');
const mitchisms = JSON.parse(strings).strings;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {    
    if (msg.content === '8ball') {
        let randomMitchism = mitchisms[Math.floor(Math.random() * mitchisms.length)];
        msg.channel.send(randomMitchism);
    } else if (msg.content === '🎱') {
        msg.channel.send('I will kill you all');
    }
});

client.login(process.env.BOT_TOKEN);
