import { Telegraf } from "telegraf";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

// Initialize bot with token from environment variable
const bot = new Telegraf(process.env.BOT_TOKEN);

// Your web app URL
const web_url = "https://co3-client.onrender.com";

bot.start(async (ctx) => {
  try {
    const userId = ctx.from?.id;
    const firstName = ctx.from?.first_name;
    const lastName = ctx.from?.last_name;
    const username = ctx.from?.username;

    console.log("User Info:", { userId, firstName, lastName, username });

    // Construct the URL with Telegram user info
    const webAppUrl = `${web_url}?user_id=${userId}&first_name=${encodeURIComponent(
      firstName || ""
    )}&last_name=${encodeURIComponent(
      lastName || ""
    )}&username=${encodeURIComponent(username || "")}`;

    console.log("Web App URL:", webAppUrl);

    // Send welcome message with web app button
    await ctx.reply("Welcome! Click the button to open the web app.", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Web App",
              web_app: { url: webAppUrl },
            },
          ],
        ],
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.error("Error handling /start command:", error);
  }
});

// Launch bot
bot.launch().catch((error) => {
  console.error("Error launching bot:", error);
});
