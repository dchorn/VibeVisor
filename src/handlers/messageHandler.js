/**
 * VibeVisor Discord Bot - Message Handler
 * https://github.com/dchorn/VibeVisor
 *
 * This script contains the logic for handling messages in your Discord server.
 *
 * Developed by: Denys Chorny Savchuk
 * Date: 27/05/2023
 *
 * Import this module in your main bot script and pass it to the message event listener.
 */

module.exports = messaje => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
}