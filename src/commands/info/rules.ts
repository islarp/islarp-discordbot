import { Command } from "../../structures/Command";
import { ExtendedEmbedBuilder, Type } from "../../structures/Embed";

export default new Command({
	name: "regras",
	description: "Comando para listar todas as regras do servidor.",
	run: async ({ interaction }) => {
		await interaction.reply({
			ephemeral: true,
			embeds: [
				new ExtendedEmbedBuilder()
					.setTitle(
						"Aqui está onde você pode encontrar todas as regras do servidor!"
					)
					.setDescription(
						"\nPara acessar todas as regras do servidor incluindo as do discord acesse https://islarp.com/rules."
					)
					.setType(Type.Info)
					.setFooter({
						text: interaction.user.username,
						iconURL: interaction.user.avatarURL() as string,
					}),
			],
		});
	},
});
