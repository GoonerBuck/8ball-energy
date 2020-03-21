# MitchBot

## Add :8ball::zap: to your Discord server

### Overview

This is a simple Discord bot that listens for specific messages. When it sees a trigger message, it responds with a random phrase from a list of strings. That's it... that's the repo.

### Usage

#### 1) Replace the trigger message

```js
discordClient.on('message', msg => {
        if (msg.content === 'TRIGGER') {
            msg.channel.send(getRandomMitchism());
        }
    });
```

#### 2) Set response strings

```json
{
    "strings": [
        "You can add whatever you want here",
        "Lorem ipsum",
        "Et cetera"
    ]
}
```

#### 3) Create a .env file and add your Discord BOT_TOKEN

```text
BOT_TOKEN=<your token>
```

## Acknowledgements

Special thanks to my friend Mitch for giving me permission to make this bot.
