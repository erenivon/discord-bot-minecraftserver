const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
  name: "sil",
  description: "Sohbette istediğin kadar mesajı silersin!",
  options: [
        {
            name: "sayı",
            description: "Temizlencek Mesaj Sayısını Girin.",
            type: 3,
            required: true
        },
       
    ],
  /**
   * @param {Client<true>} client
   * @param {CommandInteraction} interaction
   */
  async execute(client, interaction) {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({content: "Mesajları Yönet Yetkin Yok!", ephemeral: true})
    const sayi = interaction.options.getString('sayı')
    interaction.channel.bulkDelete(sayi)
    interaction.reply({content: "Başarıyla belirtilen adet mesajı sildim."})
}

};
