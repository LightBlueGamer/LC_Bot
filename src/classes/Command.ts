import type { Message } from "discord.js"

export class Command {
    public name: string;
    public alias: Array<string>;
    public description: string;
    public category: string;
    public execute: (message: Message, args: Array<string>) => void;
    public constructor(
    name: string, 
    alias: Array<string>, 
    description: string, 
    category: string, 
    execute: (message: Message, args: Array<string>) => void) {
        this.name = name;
        this.alias = alias;
        this.description = description;
        this.category = category;
        this.execute = execute;
    }
}