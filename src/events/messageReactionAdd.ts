import type { MessageReaction } from 'discord.js';

export default {
    name: 'messageReactionAdd',
    once: false,
    execute: (reaction: MessageReaction) => {
        if(reaction.emoji.name === '✅' && reaction.message.id === '952961652666548254') {
            reaction.message.member?.roles.add('952962888090390559');
        }
    }
}