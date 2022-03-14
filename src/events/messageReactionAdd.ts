import type { MessageReaction, User } from 'discord.js';

export default {
    name: 'messageReactionAdd',
    once: false,
    execute: (reaction: MessageReaction, user: User) => {
        if(reaction.emoji.name === '✅' && reaction.message.id === '952961652666548254') {
            reaction.message.guild?.members.fetch(user.id).then((member) => {member.roles.add('952962888090390559')})
        }

        if(reaction.emoji.name === '❗' && reaction.message.id === '953007819379081218') {
            reaction.message.guild?.members.fetch(user.id).then((member) => {member.roles.add('953007626579492905')})
        }
    }
}