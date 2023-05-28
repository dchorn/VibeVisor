/**
 * VibeVisor Discord Bot - commands - server
 * https://github.com/dchorn/VibeVisor
 *
 * This script provides information about the server.
 *
 * Developed by: Denys Chorny Savchuk
 * Date: 28/05/2023
 *
 * This file is the main entry point for the bot.
 */

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
	},
};
