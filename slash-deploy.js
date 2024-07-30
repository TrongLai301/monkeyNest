const { REST, Routes } = require("discord.js");
require("dotenv").config();

const id = process.env.BOT_APP_ID;
const serverId = process.env.BOT_SERVER_ID;
const key = process.env.BOT_PUBLIC_KEY;

const rest = new REST().setToken(process.env.BOT_API_TOKEN);

const slashRegister = async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(id, serverId), {
      body: [
        {
          name: "ping",
          description: "just a command",
        },
        {
          name: "pong",
          description: "just a command",
        },
        {
          name: "pung",
          description: "just a command",
        },
        {
          name: "pang",
          description: "just a command",
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

slashRegister();
