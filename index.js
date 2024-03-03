const { Client, Events, GatewayIntentBits } = require("discord.js");
const { TOKEN } = require("./config.json");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply("Hi from bot!");
});

client.on("interactionCreate", (interaction) => {
    interaction.reply("Gand me lele pong");
});

client.login(TOKEN);
