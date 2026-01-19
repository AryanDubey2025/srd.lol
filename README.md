# SRD DEX - Decentralized Exchange UI

A modern, responsive decentralized exchange (DEX) user interface built with Next.js and TailwindCSS. This is a **front-end only** implementation with no backend, API integration, or wallet connectivity.

## 🎨 Features

### Pages
- **Perpetual Trading** - Full-featured perpetual trading interface with:
  - Live price header with market stats
  - TradingView-style chart placeholder
  - Order book with real-time depth visualization
  - Recent trades list
  - Buy/Sell trading panel with Market/Limit orders
  - Position management tabs (Positions, Pending Orders, Filled Orders, Funding History)

- **Fiat** - Redirects to `https://srd.exchange/dashboard`

- **Wallet** - Wallet management page with:
  - Account value display
  - USDT and INR balance cards
  - Quick actions (Deposit, Withdraw, Transfer, History)
  - Empty state with wallet connection prompt

### Layout
- **Desktop Header** - Navigation with animated logo, Fiat/Perpetual links, and "Connect to a wallet" button
- **Mobile Footer** - Sticky bottom navigation with Fiat, Perpetual, and Wallet tabs

### Design System
- **Dark Theme** - Background: #0D0D0D, Accent: #FFD400 (Yellow)
- **Responsive** - Fully responsive design for desktop, tablet, and mobile
- **Components** - Reusable Button, Card, and Tabs components
- **Animations** - Smooth transitions and animated logo

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── fiat/           # Fiat page (redirects to external URL)
│   ├── perpetual/      # Perpetual trading page
│   ├── wallet/         # Wallet management page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with header/footer
│   └── page.tsx        # Home page (redirects to perpetual)
├── components/
│   ├── perpetual/      # Perpetual page components
│   │   ├── OrderBook.tsx
│   │   ├── PriceHeader.tsx
│   │   ├── TradePanel.tsx
│   │   ├── Trades.tsx
│   │   └── TradingChart.tsx
│   ├── Button.tsx      # Reusable button component
│   ├── Card.tsx        # Reusable card component
│   ├── Logo.tsx        # Animated SVG logo
│   └── Tabs.tsx        # Reusable tabs component
├── layout/
│   ├── Header.tsx      # Desktop header navigation
│   └── MobileFooter.tsx # Mobile bottom navigation
└── tailwind.config.ts  # Tailwind configuration with custom theme
```

## 🎨 Color Palette

- **Background**: `#0D0D0D`
- **Card Background**: `#1A1A1A`
- **Border**: `#2A2A2A`
- **Accent Yellow**: `#FFD400`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#B0B0B0`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Sticky footer navigation)
- **Tablet**: 768px - 1024px (Stacked layout)
- **Desktop**: > 1024px (Grid layout with sidebar)

## 🔧 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS 3** - Utility-first CSS framework
- **React 19** - UI library
- **Inter Font** - Modern sans-serif font from Google Fonts

## ⚠️ Important Notes

- This is a **UI-only** implementation
- No backend or API integration
- No actual wallet connectivity
- No real trading functionality
- All data is mocked/static for demonstration purposes

## 🎯 Future Enhancements (Not Implemented)

To make this a fully functional DEX, you would need to add:
- Wallet integration (MetaMask, WalletConnect, etc.)
- Backend API for order management
- Real-time WebSocket connections for price updates
- TradingView chart integration
- Smart contract integration for on-chain trading
- User authentication and session management

## 📄 License

This project is for demonstration purposes only.

