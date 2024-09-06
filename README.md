# Coin Tapper Server with Telegram Bot Integration

Welcome to the **Coin Tapper Server**, a powerful backend service that integrates with Supabase and Telegram bots to create a dynamic and interactive game environment. Users can tap coins via a Telegram bot interface, which updates their balance through GraphQL queries and mutations. This README will guide you through the setup and usage of the server, including its core functionality and how to get started.

## Features

- **Supabase Integration**: Store user information and coin balances securely with Supabase.
- **GraphQL API**: Easily fetch user data or update coin balances through simple and intuitive GraphQL queries and mutations.
- **Telegram Bot Integration**: Interact with users directly via Telegram for a seamless experience.
- **Error Handling & Logs**: Detailed error messages and logs for easy troubleshooting.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [GraphQL API Endpoints](#graphql-api-endpoints)
- [Telegram Bot Usage](#telegram-bot-usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16+)
- Supabase account and API keys
- Telegram bot token (you can create one using the [BotFather](https://core.telegram.org/bots#botfather))

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/coin-tapper-server.git
   cd coin-tapper-server
   ```

2. **Install dependencies**:yarn
3. **Run the Server**: yarn dev

## Environment Variables

Create a .env file in the root directory and add the following environment variables:
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
BOT_TOKEN=your-telegram-bot-token
