import type { Client, Message } from "discord.js";

export interface Event {
    once: boolean,
    name: string,
    execute: Function
};

export interface Command {
    name: string,
    alias: Array<string>,
    description: string,
    category: string,
    execute: (message: Message, args: Array<string>, client: Client) => void
}