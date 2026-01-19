# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

---

## 📱 What You'll See

### Desktop View
- **Header**: Logo, Fiat/Perpetual navigation, Connect wallet button
- **Perpetual Page**: Full trading interface with chart, order book, and trade panel
- **Wallet Page**: Account management with balance display
- **Fiat Page**: Redirects to external dashboard

### Mobile View
- **Bottom Navigation**: Fiat | Perpetual | Wallet tabs
- **Responsive Layout**: All components adapt to mobile screen
- **Collapsible Sections**: Order book can be toggled on mobile

---

## 🎯 Key Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Dark Theme** - Modern dark UI with yellow accents  
✅ **Animated Logo** - Pulse and bounce effects  
✅ **Trading Interface** - Complete perpetual trading UI  
✅ **Wallet Management** - Mock wallet connection/disconnection  
✅ **Order Book** - Real-time depth visualization  
✅ **Trade Panel** - Market/Limit orders with sliders  
✅ **Position Tabs** - Positions, Orders, Funding history  

---

## 📂 Project Structure

```
├── app/              # Pages (fiat, perpetual, wallet)
├── components/       # Reusable UI components
├── layout/           # Header and Footer
└── tailwind.config.ts # Theme configuration
```

---

## 🎨 Pages

### 1. Perpetual Trading (`/perpetual`)
- Live price header
- TradingView-style chart placeholder
- Order book with bids/asks
- Recent trades list
- Buy/Sell trading panel
- Position management tabs

### 2. Fiat (`/fiat`)
- Auto-redirects to https://srd.exchange/dashboard

### 3. Wallet (`/wallet`)
- Account value display
- USDT and INR balances
- Quick actions (Deposit, Withdraw, etc.)
- Connect/Disconnect wallet (mock)

---

## 🎨 Theme Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0D0D0D` | Main background |
| Accent Yellow | `#FFD400` | Buttons, highlights |
| Card BG | `#1A1A1A` | Card backgrounds |
| Border | `#2A2A2A` | Borders |
| Text Primary | `#FFFFFF` | Main text |
| Text Secondary | `#B0B0B0` | Secondary text |

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## ⚠️ Important Notes

- **UI Only**: No backend, API, or wallet integration
- **Mock Data**: All data is static/simulated
- **No Trading**: This is a front-end demonstration only

---

## 🎯 Next Steps

1. **Customize Theme**: Edit `tailwind.config.ts`
2. **Add Components**: Create new components in `components/`
3. **Add Pages**: Create new folders in `app/`
4. **Integrate APIs**: Add real data fetching
5. **Add Wallet**: Integrate Web3 libraries

---

## 📚 Documentation

- **README.md** - Project overview
- **FEATURES.md** - Detailed feature list
- **DEVELOPMENT.md** - Development guide

---

## 🆘 Troubleshooting

**Port already in use?**
```bash
npx kill-port 3000
```

**Styles not updating?**
```bash
rm -rf .next
npm run dev
```

**Module errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🎉 You're Ready!

The development server should now be running at:
**http://localhost:3000**

Enjoy building! 🚀

