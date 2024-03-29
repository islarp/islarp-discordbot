import { Command } from "../../structures/Command";
import { ExtendedEmbedBuilder, Type } from "../../structures/Embed";

export default new Command({
	name: "help",
	description: "Comando para listar todas as funções e comandos do nosso BOT.",
	run: async ({ interaction }) => {
		await interaction.reply({
			ephemeral: true,
			embeds: [
				new ExtendedEmbedBuilder()
					.setTitle("Precisa de ajuda? Estou aqui!")
					.setDescription(
						"\n/social - Aqui você pode verificar todos os nossos links de mídias sociais como:\nTikTok, Youtube, Twitter, Instagram.\n/regras - Aqui você pode encontrar o link para acessar todas as regras do servidor."
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
