export class Event {
    public once: boolean;
    public name: string;
    public execute: (...args: any) => void;
    public constructor(
    once: boolean, 
    name: string,
    execute: (...args: any) => void) {
        this.once = once;
        this.name = name;
        this.execute = execute;
    }
}