import type { MessageReaction, User } from 'discord.js';
import rroles from '../rroles.js';

export default {
    name: 'messageReactionAdd',
    once: false,
    execute: (reaction: MessageReaction, user: User) => {

        for(let rrole of rroles) {
            if(reaction.emoji.name === rrole.reaction && reaction.message.id === rrole.message) {
                reaction.message.guild?.members.fetch(user.id).then((member) => {member.roles.add(rrole.role)})
            }
        }
    }
}