import type { Client } from 'discord.js';
import rroles from '../rroles.js';

export default {
    name: 'ready',
    once: true,
    execute: (client: Client) => {
        console.log(`${client?.user?.username} has logged on and is ready to serve.`);

        for(let rrole of rroles) {
            const channel = client.channels.cache.get(rrole.channel);
            if(channel?.isText()) {
                channel.messages.fetch(rrole.message).then((message) => {
                    message.react(rrole.reaction)
                });
            }
        }
    }
};
