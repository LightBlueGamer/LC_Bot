import { Profile } from '../classes/index.js'

export function createProfile(levelSettings: Profile.Level, economySettings: Profile.Economy) {
    return new Profile(levelSettings, economySettings);
};

export function createLevelSettings(level: number, experience: number) {
    return new Profile.Level(level, experience);
}

export function createEconomySettings(balance: number, bank: number) {
    return new Profile.Economy(balance, bank);
}