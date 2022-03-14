import type { Client } from 'discord.js';

export default {
    name: 'ready',
    once: true,
    execute: (client: Client) => {
        console.log(`${client?.user?.username} has logged on and is ready to serve.`);
        const channel = client.channels.cache.get('952961331600949328');
        if(channel?.isText()) {
            channel.messages.fetch('952961652666548254');
        }

        const channel2 = client.channels.cache.get('953007453308583956');
        if(channel2?.isText()) {
            channel2.messages.fetch('953007819379081218');
        }
    }
};
