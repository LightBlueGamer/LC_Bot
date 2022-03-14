import type { Message } from 'discord.js';
import type { Command } from '../types';

import { commands } from '../index.js';

export default {
    name: 'messageCreate',
    once: false,
    execute: (message: Message) => {
        const client = message.client;
        if (message.channel.type !== 'GUILD_TEXT' || message.author.bot) return;

        const prefixMention = new RegExp(`^<@!?${client?.user?.id}> `);
        const prefix = message?.content?.match(prefixMention) ? message?.content?.match(prefixMention)![0] : "?";

        if (!message.content.startsWith(prefix)) return;

        const args: Array<string> = message.content.toLowerCase().slice(prefix.length).split(/ +/);
        const commandName: string = args.shift() || "";

        const command: Command | undefined = commands.get(commandName) || commands.find((cmd: Command) => cmd.alias.includes(commandName));

        if (!command) return;

        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
        };
    }
};
