import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import ms from 'pretty-ms';

export default {
    name: 'ping',
    alias: [],
    description: 'Shows bot & API latency',
    category: 'Misc',
    execute: async (message: Message) => {
        const client = message.client;
        const msg: Message = await message.channel.send(`Pinging...`);
        const botLatency: string = ms(msg.createdAt.getTime()- Date.now());
        const apiLatency: string = ms(client.ws.ping);

        const embed = new MessageEmbed()
            .setTitle(`🤖 ${botLatency}\n🌎 ${apiLatency}`)
            .setColor('BLURPLE')
            .setFooter({ text: `Requested by ${message.author.tag}` });

        await message
            .reply({
                embeds: [embed]
            })
            .catch((err) => console.error(err));
    }
};
