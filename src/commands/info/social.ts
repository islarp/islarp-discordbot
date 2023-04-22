import { Command } from "../../structures/Command";
import { ExtendedEmbedBuilder, Type } from "../../structures/Embed";

export default new Command({
	name: "social",
	description: "Comando para listar todas as redes sóciais.",
	run: async ({ interaction }) => {
		await interaction.reply({
			ephemeral: true,
			embeds: [
				new ExtendedEmbedBuilder()
					.setTitle("Aqui estão todos os nossos links de redes sóciais.")
					.setDescription(
						"\n:1099138655337062501: Youtube - https://youtube.com/@islarp\n:1099138655337062501: Twitter - https://twitter.com/isla_rp\n:1099138832152137778: Instagram - https://instagram.com/islarp\n:1099138655337062501: Tiktok - https://tiktok.com/islarp"
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
