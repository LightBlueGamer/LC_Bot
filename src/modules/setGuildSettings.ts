import type { RoleResolvable, GuildMemberResolvable } from "discord.js";
import { GuildSettings } from "../classes/GuildSettings";

export function setGuildSettings(prefix: string, levelSettings: GuildSettings.LevelSettings, economySettings: GuildSettings.EconomySettings, administrators: Array<RoleResolvable | GuildMemberResolvable>, moderators: Array<RoleResolvable | GuildMemberResolvable>) {
    return new GuildSettings(prefix, levelSettings, economySettings, administrators, moderators);
}