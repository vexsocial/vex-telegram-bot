# VEX Social Telegram Bot on Cloudflare Workers

This project a multilingual Telegram bot built for the VEX Social ecosystem, running on Cloudflare Workers. The bot provides access to VEX Social MINI APP and VEX Social telegram channel, all while dynamically adapting the interface to the user's language.

## Features

- **CDN usage**: The bot uses Cloudflare Workers for hosting the code, what is CDN and makes the bot fast and reliable.
- **Multilingual Support**: Automatically detects the user's language and responds in English, Russian, Spanish, French, German, Italian, or Chinese, with fully localized welcome messages and buttons.

## Setup Guide

### Prerequisites

- **Bot Token**: Obtain a bot token by speaking to @BotFather on Telegram.
- **Cloudflare Workers Account**: Sign up at Cloudflare Workers.

### Step-by-Step Setup

1. **Create a Cloudflare Worker**:

   - Log into the Cloudflare Dashboard.
   - Navigate to "Workers" and click "Create Application", followed by "Create Worker".
   - Name your worker and click "Deploy".

2. **Configure Environment Variables**:

   - Go to "Settings" -> "Variables" for your worker.
   - Add the following variables:
     - `ENV_BOT_TOKEN`: Your bot token from @BotFather.

3. **Deploy the Bot Code**:

   - Click "Quick Edit" in the Cloudflare Worker dashboard.
   - Replace the default code with your custom bot code (shown above).

4. **Set the Webhook**:

   - Use command `curl -F "url=<your-worker-url>" https://api.telegram.org/bot<token>/setWebhook` to set the webhook.
   - You should receive an "Ok" response. If you see a 401 Unauthorized error, double-check your bot token.

5. **Start Using the Bot**:
   - Now that the bot is deployed, send `/start` to your bot in Telegram. It will respond with the localized welcome message based on your language and display buttons for accessing VEX services.

## Key Functions

### Localization

The bot detects the user's language through the `language_code` field and sends a localized welcome message. If the user's language is not supported, it defaults to English.

### Links

- [VEX Social](https://vex.so)
- [VEX Social MINI APP](https://t.me/vexsocialbot/vex)
- [VEX Social telegram channel](https://t.me/vexsocial)

### License

This project is licensed under the MIT License. Feel free to use, fork and participate in the development.
