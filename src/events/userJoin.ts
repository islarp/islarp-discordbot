import { Event } from "../structures/Event";
import { PrismaClient } from "@prisma/client";

export default new Event("guildMemberAdd", (member) => {
	const prisma = new PrismaClient();

	if (
		!prisma.whitelist.findFirst({
			where: { accountId: member.user.id, status: 2 },
		})
	)
		return member.roles.add("1096775600393424896");
	member.roles.add("1096775497138044968");
	member.roles.add("1096775357211889795");
});
