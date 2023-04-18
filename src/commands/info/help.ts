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
						"Ok, você precisa de ajuda, mas eu ainda estou em desenvolvimento... Então tenta abrir um ticke... vish, também está em desenvolvimento! Cara contacta meus administradores, eu sou só um bot! :sob:"
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
