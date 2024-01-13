import { EmbedBuilder, PermissionsBitField } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

const prefix = {
  name: "ping",
  aliases: ["pong"],
  cooldown: 5000,//1 saniye = 1000 ms / cooldown olmasını istemezseniz 0 yazın.
  ownerOnly: true,//komutu sadece geliştiricinin kullanabilmesini istersen true olarak değiştir
  run: async (client, message, args) => {
    message.reply(`Pong 🏓`)
  }
};

const slash = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    // komutu geliştirmek istersen guide: https://discordjs.guide/slash-commands/advanced-creation.html
    cooldown: 5000,//1 saniye = 1000 ms / cooldown olmasını istemezseniz 0 yazın.
    ownerOnly: false,//komutu sadece geliştiricinin kullanabilmesini istersen true olarak değiştir
    run: async (client, interaction) => {
      interaction.reply(`Pong 🏓`)
    }
 };

export { prefix, slash };