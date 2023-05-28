/**
 * VibeVisor Discord Bot - commands - user
 * https://github.com/dchorn/VibeVisor
 *
 * This script provides information about the user.
 *
 * Developed by: Denys Chorny Savchuk
 * Date: 28/05/2023
 *
 * This file is the main entry point for the bot.
 */

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user'),
    async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
}