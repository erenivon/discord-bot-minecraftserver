const { loadEvents, loadCommands, clientLogin } = require("./src/client/utils");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const db = require("croxydb")
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users"]
    },
    partials: PARTIALS,
    retryLimit: 3
});

loadEvents();
loadCommands();
clientLogin();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Power By Dark Uptime'));

app.listen(port, () =>
  console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);