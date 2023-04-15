import { CommandInteractionOptionResolver } from 'discord.js';
import { client } from '..';
import { Event } from '../structures/Event';
import { logger, LogType } from '../structures/Logger';
import { ExtendedInteraction } from '../typings/Command';
import { ExtendedEmbedBuilder, Type } from '../structures/Embed';

export default new Event('interactionCreate', async (interaction) => {
  // Chat Input Commands
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply('You have used a non existent command');

    command.run({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as ExtendedInteraction,
    });
    logger.command(LogType.Info, { command: command, user: interaction.user });
  }
  if (interaction.isModalSubmit()) {
    if (interaction.customId != "say-command-modal") {
      interaction.reply({
        ephemeral: true,
        embeds: [
            new ExtendedEmbedBuilder()
            .setTitle("Mensagem enviada!")
            .setType(Type.Success)
            .setFooter({text: interaction.user.username, iconURL: interaction.user.avatarURL() as string})
          ],
    })
    }
  }
});
