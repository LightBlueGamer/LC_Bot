import { readdirSync } from "fs"
import { Client, Intents, Collection } from 'discord.js';

import type { Command, Event } from './classes/index.js';

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ],
});

const Josh = require("@joshdb/core");
const provider = require('@joshdb/sqlite');

export const profiles = new Josh({
  name: 'profiles',
  provider,
});

export const commands = new Collection<string, Command>();
export const events = new Collection<string, Event>();

(async () => {
    const eventFiles: Array<string> = readdirSync(`./dist/events`).filter((file) => file.endsWith('js'));

    for (const file of eventFiles) {
        const event: Event = (await import(`./events/${file}`)).default;

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
        events.set(event.name, event)
        console.log(`The ${event.name} event has been loaded.`);
    }

    const commandFiles: Array<string> = readdirSync(`./dist/commands`).filter((file) => file.endsWith('js'));

    for (const file of commandFiles) {
        const command: Command = (await import(`./commands/${file}`)).default;

        commands.set(command.name, command);
        console.log(`The ${command.name} command has been loaded.`);
    }

    (await import('dotenv')).config();

    await client.login(process.env.DISCORD_TOKEN);
})().catch((error) => {
    console.error(error);
});
