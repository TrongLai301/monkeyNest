const { Client, GatewayIntentBits, Collection } = require("discord.js");
const chatReq = require("./src/Simsimi/simsimi");
const fs = require("node:fs");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const token = process.env.BOT_API_TOKEN;
const id = process.env.BOT_APP_ID;
const key = process.env.BOT_PUBLIC_KEY;
const prefix = "!";
const mongoURL = process.env.MONGO_URL;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
client.once("ready", async () => {
  await mongoose.connect(mongoURL)
  if(mongoose.connect){
    console.log("connected to server mongo")
  } else {
    console.log("something wrong")
  }
  console.log("Ready!");
});

// ON
client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    if (interaction.commandName === "ping") {
      interaction.reply({ content: "Hello tôi là con vượn", ephemeral: false });
    }
  }
});
client.on("messageCreate", async (mess) => {
  chatReq(mess);
  // console.log(`${mess.author.globalName}: ${mess.content}`);
  const mention = mess.mentions.users.first()
  if (!mess.content.startsWith(prefix) || mess.author.bot) return;
  const args = mess.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const prefixCmd = client.commands.get(command);
  if (prefixCmd) {
    prefixCmd.execute(mess, args, mention);
  }
});

//
// CONFIG FILE
client.commands = new Collection();
const commandFolders = fs.readdirSync("./src/commands");
for (const folders of commandFolders) {
  const foldersPath = "./src/commands/" + folders;
  const commandFiles = fs
    .readdirSync(foldersPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require( foldersPath + "/" + file);
    client.commands.set(command.name, command);
  }
}

client.login(token);
