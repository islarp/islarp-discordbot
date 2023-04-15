import { Event } from '../structures/Event';

export default new Event('guildMemberAdd', (member) => {
    member.roles.add("1096775600393424896");
  });
