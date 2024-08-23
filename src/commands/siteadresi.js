const { Client, CommandInteraction, EmbedBuilder, Colors } = require("discord.js");

module.exports = {
  name: "site",
  description: "Sitemizin Adresi.",
  options: [],
  /**
   * @param {Client<true>} client
   * @param {CommandInteraction} interaction
   */
  async execute(client, interaction) {
    await interaction.deferReply();
    const pingEmbed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setDescription('## Aşağıdaki Bağlantıdan Sitemize Ulaşabilirsin \n # [www.zeusnetwork.com.tr](https://zeusnetwork.com.tr/)')
      .setImage('https://media.discordapp.net/attachments/1106626223142088826/1136776971179802774/zeus7.png?width=1227&height=566')
    return interaction.followUp({ embeds: [pingEmbed] });
  },
};