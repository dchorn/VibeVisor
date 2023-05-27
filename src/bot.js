/**
 * VibeVisor Discord Bot
 * https://github.com/dchorn/VibeVisor
 *
 * This bot provides music recommendations, playlist creation, and song information.
 *
 * Developed by: Denys Chorny Savchuk
 * Date: 27/05/2023
 *
 * This file is the main entry point for the bot.
 */

const Discord = require("discord.js");
require('dotenv').config()

const handleMessages = require('./handlers/messageHandler');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('VibeVisor is online!');
});

client.on('message', handleMessages);

client.login(process.env.DISCORD_BOT_TOKEN)