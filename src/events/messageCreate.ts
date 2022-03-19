import type { Message } from 'discord.js';
import type { Command, Profile } from '../classes/index.js';

import { commands, profiles } from '../index.js';
import { createEconomySettings, createLevelSettings, createProfile } from '../modules/index.js';

export default {
    name: 'messageCreate',
    once: false,
    execute: (message: Message) => {
        const client = message.client;

        //DB Stuff
        (async () => {
            const profile: Profile = createProfile(createLevelSettings(0, 0), createEconomySettings(0, 0))
            await profiles.set(`${message?.guild?.id}-${message?.author?.id}`, profile)
        })();
        //DB Stuff

        if (message.channel.type !== 'GUILD_TEXT' || message.author.bot) return;

        const prefixMention = new RegExp(`^<@!?${client?.user?.id}> `);
        const prefix = message?.content?.match(prefixMention) ? message?.content?.match(prefixMention)![0] : "!";

        if (!message.content.startsWith(prefix)) return;

        const args: Array<string> = message.content.toLowerCase().slice(prefix.length).split(/ +/);
        const commandName: string = args.shift() || "";

        const command: Command | undefined = commands.get(commandName) || commands.find((cmd: Command) => cmd.alias.includes(commandName));

        if (!command) return;

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
        };
    }
};
