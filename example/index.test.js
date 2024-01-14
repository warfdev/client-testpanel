const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers
  ],
  partials: [
    Partials.User,
    Partials.Message
  ]
});


// panel setup
const FGPanel = require("your-module");
const panel = new FGPanel({
  client: client /* discord client */,
  passwords: ["mypassword1", "mypassword2", "iloveapple"]
});

const port = process.env.PORT || 3000;
panel.start(port);


client.login(process.env.TOKEN).catch(err => {
  console.error("an error occurred: " + err);
});