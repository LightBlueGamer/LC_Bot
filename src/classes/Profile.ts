export class Profile {
    public level: Profile.Level;
    public economy: Profile.Economy;
    public constructor(level: Profile.Level, economy: Profile.Economy) {
        this.level = level;
        this.economy = economy;
    }
}

export namespace Profile {

    export class Level {
        public level: number;
        public experience: number;
        public constructor(level: number, experience: number) {
            this.level = level;
            this.experience = experience;
        }
    }

    export class Economy {
        public balance: number;
        public bank: number;
        public constructor(balance: number, bank: number) {
            this.balance = balance;
            this.bank = bank;
        }
    }
}