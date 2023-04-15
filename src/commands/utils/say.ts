import {
	ActionRowBuilder,
	ModalBuilder,
	Role,
	SelectMenuOptionBuilder,
	TextInputBuilder,
	TextInputStyle,
} from "discord.js";
import { Command } from "../../structures/Command";
import { ExtendedEmbedBuilder, Type } from "../../structures/Embed";

export default new Command({
	name: "say",
	description: "Command used by admins to say someone using the bot account.",
	run: async ({ interaction }) => {
		if (!interaction.member.roles.cache.has("1096772527751176302")) {
			interaction.reply({
				ephemeral: true,
				embeds: [
					new ExtendedEmbedBuilder()
						.setTitle("Erro!")
						.setDescription(
							"Você não tem permissão para executar este comando."
						)
						.setType(Type.Error)
						.setFooter({
							text: interaction.user.username,
							iconURL: interaction.user.avatarURL() as string,
						}),
				],
			});
			return;
		}

		const say_modal = new ModalBuilder({
			customId: "say-command-modal",
			title: "Comando /say:",
		});

		const title_input = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: "say-command-title",
					style: TextInputStyle.Short,
					label: "Título desejado:",
					placeholder: "Título...",
				}),
			],
		});

		const text_input = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: "say-command-text",
					style: TextInputStyle.Paragraph,
					label: "Texto desejado:",
					placeholder: "Texto...",
				}),
			],
		});

		say_modal.setComponents(title_input, text_input);
		interaction.showModal(say_modal);

		const say_modal_interaction = await interaction.awaitModalSubmit({
			time: 2000_000,
			filter: (i) => i.user.id == interaction.user.id,
		});

		const { fields } = say_modal_interaction;

		const say_title = fields.getTextInputValue("say-command-title");
		const say_text = fields.getTextInputValue("say-command-text");

		interaction.channel?.send({
			embeds: [
				new ExtendedEmbedBuilder()
					.setTitle(say_title)
					.setDescription(say_text)
					.setType(Type.Info)
					.setFooter({
						text: interaction.user.username,
						iconURL: interaction.user.avatarURL() as string,
					}),
			],
		});
	},
});
