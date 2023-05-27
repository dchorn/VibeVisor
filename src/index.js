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

const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');

const handleMessages = require('./handlers/messageHandler');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds ]});

// When the client is ready, run this code (only once)
// We use 'c' for the events parameter to keep it separate from the alredy defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`VibeVisor is online!`);
    console.log(`Logged in as ${c.user.tag}`);
});

// Handle messages
client.on('message', handleMessages);

// Log in to Discord with your client's token
client.login(token)