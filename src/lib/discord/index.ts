import { Client, GatewayIntentBits } from "discord.js";
import { sendMessage, sendErrorMessage } from "./message";

const token = process.env.DISCORD_TOKEN || "";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(token);

export { client, sendMessage, sendErrorMessage };
