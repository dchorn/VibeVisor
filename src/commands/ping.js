/**
 * VibeVisor Discord Bot - commands - ping
 * https://github.com/dchorn/VibeVisor
 *
 * This script contains the definition for the slash command ping.
 *
 * Developed by: Denys Chorny Savchuk
 * Date: 28/05/2023
 *
 * This file is the main entry point for the bot.
 */

const { SlashCommandBuilder } = require("discord.js");

module.export = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        await interaction.reply("Pong!");
    },
}