# Cryptocurrency Market List Page

This document provides details about the **Cryptocurrency Market List Page**, a feature of the broader **Pintu** application. The page allows users to view, search, and interact with a comprehensive list of cryptocurrencies and their market statistics. Access the deployed project at https://crypto-currency-pintu.vercel.app.

Web Demo: https://www.youtube.com/watch?v=pF9FhoukmC0

---

## Table of Contents

1. [Overview](#overview)
2. [Technical Details](#technical-details)
3. [Features](#features)
4. [Usage](#usage)
5. [Future Enhancements](#future-enhancements)

---

## Overview

The **Cryptocurrency Market List Page** serves as a hub for users to explore various cryptocurrencies and their market trends. Users can search for specific cryptocurrencies, view detailed market data, or initiate a purchase via a modal interface.

This page is part of the **Pintu** application, which aims to simplify cryptocurrency market tracking and trading for users of all experience levels.

---
## Technical Details

### TechStacks

- **Framework**: Next.js 14.2.18, React (^18), Node (^20)
- **Language**: TypeScript (^5)
- **Styling**: Tailwind CSS (^3.4.1)
- **State Management**: ReactQuery (^5.61.0)
- **Formatter**: ESLint (^8)

### Routing

- `http://localhost:3000/`: The main market list page.
- `http://localhost:3000/api/crypto-currencies`: API for crypto currencies.

### Installation & Running

```bash
# Install Node.js and npm
# Clone the repository
git clone https://github.com/syaina/crypto-currency-pintu
cd crypto-currency-pintu

# Install dependencies
# Please use node version >= 20
npm install
npm run dev

# App will start with development mode on http://localhost:3000

# For build the project
npm run build
npm run start
```

### Environment Variables

To run the project in local development, please use the following environment variables and save it with `.env` format.

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
BASE_URL=http://localhost:3000
```

---

## Features

### 1. **Search Bar**

- Allows users to quickly find specific cryptocurrencies by their name or symbol.
- Clicking on a search result navigates to the **Cryptocurrency Detail Page**.

### 2. **Top Mover**

- Displays the top-moving cryptocurrencies with the biggest drops or growth
  

### 3. **Cryptocurrency Table List**

- Displays a comprehensive list of cryptocurrencies with the following data:
  - Crypto Logo
  - Crypto Name and Symbol
  - Latest Price
  - Percentage Changes Over:
    - 1 Hour
    - 1 Day (24 Hours)
    - 1 Week
    - 1 Month
    - 1 Year
- Each row includes a **Buy Button** to initiate the purchase of the cryptocurrency.

### 4. **Buy Cryptocurrency**

- Clicking the **Buy Button** in a table row opens a modal.
- The modal displays:
  - The selected cryptocurrency name and symbol.
  - Input fields for the amount to purchase.
  - A confirmation button to complete the transaction.
- The modal will stays for 10 seconds.

---

## Usage

### Accessing the Page

1. Navigate to the Cryptocurrency Market List Page by visiting https://crypto-currency-pintu.vercel.app.
2. Use the search bar to look for a specific cryptocurrency or scroll through the table for a broader market view.

### Searching for a Cryptocurrency

1. Type the name or symbol of the cryptocurrency in the search bar.
2. Click on a search result to navigate to the **Cryptocurrency Detail Page**.

### Navigating the Table

- Browse the table to compare market trends across different time periods.
- Click on a cryptocurrency row in the table to view its detailed page.
- Use the **Buy Button** in the latest column to initiate a purchase.

### Buying a Crypto

1. Click the **Buy Button** in the row of the desired cryptocurrency.
2. The modal will display a QR code for purchasing via the Pintu Mobile App or accessing trading through Pintu Pro Web.

---

## Future Enhancements

Here are some features planned for future updates:

- Allow users to sort and filter the list by price, growth, or other metrics.
- Ensure responsive design across various screen sizes.
Implement unit testing.
- Colorize svg for Crypto icon.
- Provide a design component system and set up a playground on Storybook.

---