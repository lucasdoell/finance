# Personal Finance App

## Overview

The Personal Finance App is a mobile application built using React Native and TypeScript with the Expo framework. This app empowers users to manage their personal finances effectively by providing features such as user authentication and integration with the Plaid API to securely connect and retrieve financial data from their accounts. The retrieved data is then visualized in a user-friendly manner, allowing users to gain insights into their financial activities.

## Features

- User Authentication: Secure user authentication system ensures that only authorized users can access their financial data.

- Plaid API Integration: The app is integrated with the Plaid API, which allows users to connect their financial accounts from various institutions securely.

- Financial Data Visualization: The app visualizes the retrieved financial data, presenting it in easy-to-understand graphs and charts to help users analyze their spending, saving, and investment patterns.

- Transactions Tracking: Users can view their transaction history and categorize expenses to get a clear picture of their spending habits.

## Installation

Before running the app, ensure you have the following prerequisites:

1. Node.js: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

2. Plaid API Keys: Obtain your Plaid API keys by signing up for an account at [Plaid](https://plaid.com/).

Once you have the prerequisites ready, follow these steps to set up the app:

1. Clone the repository:

```bash
git clone https://github.com/your-username/personal-finance-app.git
cd personal-finance-app
```

2. Install dependencies:

```bash
npm install
```

3. Configure Plaid API keys:

In the root directory of the project, create a file named `.env` and add the following lines:

```
PLAID_CLIENT_ID=YOUR_PLAID_CLIENT_ID
PLAID_SECRET=YOUR_PLAID_SECRET
```

Replace `YOUR_PLAID_CLIENT_ID` and `YOUR_PLAID_SECRET` with your actual Plaid API keys.

4. Start the app:

```bash
npm start
```

This will start the Expo development server, and you can use the Expo Go app on your mobile device to run the app.

## How to Use

1. Launch the app on your mobile device using the Expo Go app.

2. Sign up or log in using your credentials.

3. Navigate to the "Connect Accounts" section and follow the prompts to securely link your financial accounts using the Plaid API.

4. Once the accounts are connected, your financial data will be fetched and visualized in the app.

5. Explore the different sections of the app to gain insights into your financial activities, track transactions, and manage your personal finance effectively.
