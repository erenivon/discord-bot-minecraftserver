const { Client, CommandInteraction, EmbedBuilder, Colors } = require("discord.js");
const { getMcServer } = require("../MinecraftAPI");
const { mcIP } = require("../../config.json");

module.exports = {
  name: "sunucubilgi",
  description: "MC Sunucunuzun bilgilerini gösterir.",
  options: [],
  /**
   * @param {Client<true>} client
   * @param {CommandInteraction} interaction
   */
  async execute(client, interaction) {
    await interaction.deferReply();
    const mcserver = await getMcServer(`${mcIP}`);

    if (!mcserver) {
      const errorEmbed = new EmbedBuilder()
        .setColor(Colors.Red)
        .setDescription("🔍 **|** Sunucu şu an kapalıdır.")
        .setAuthor({ iconURL: interaction.user.displayAvatarURL(), name: interaction.user.tag });
      return interaction.followUp({ embeds: [errorEmbed] });
    }

    const embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setAuthor({ name: `Play.`, iconURL: interaction.user.avatarURL() ?? undefined })
      .setTitle(`Play. sunucusu için bilgiler`)
      .addFields([
        {
          name: "Sürüm;",
          value: `\`\`\`1.16.5 - 1.20.1\n\`\`\``,
          inline: true,
        },
        {
          name: "IP;",
          value: `\`\`\`play.\n\`\`\``,
          inline: true,
        },
      ])
      .setImage(`${mcserver.favicon}`)
      .setFooter({
        text: "ArteusMC 💖 Wraiths",
        iconURL:
          "https://media.discordapp.net/attachments/1106626223142088826/1136776972698128485/zeuslogoparca1.png?width=663&height=663",
      })
      .setTimestamp();

    return interaction.followUp({ embeds: [embed] });
  },
};
