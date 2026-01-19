# SRD DEX - Feature Documentation

## 🎯 Completed Features

### ✅ 1. Project Setup
- ✓ Next.js 15 with TypeScript
- ✓ TailwindCSS 3 configured
- ✓ App Router structure
- ✓ Custom theme colors
- ✓ Inter font integration

### ✅ 2. Theme & Styling
- ✓ Dark theme (#0D0D0D background)
- ✓ Yellow accent color (#FFD400)
- ✓ Custom scrollbar styling
- ✓ Smooth transitions
- ✓ Responsive breakpoints

### ✅ 3. Layout Components

#### Desktop Header
- ✓ Animated SVG logo (no text)
- ✓ Navigation: Fiat | Perpetual
- ✓ Settings gear icon
- ✓ "Connect to a wallet" button (yellow, rounded)
- ✓ Active state highlighting

#### Mobile Footer
- ✓ Sticky bottom navigation
- ✓ 3 tabs: Fiat | Perpetual | Wallet
- ✓ Icon + label for each tab
- ✓ Active state in yellow
- ✓ Hidden on desktop

### ✅ 4. Reusable Components

#### Button Component
- ✓ Variants: primary, secondary, outline
- ✓ Sizes: sm, md, lg
- ✓ Full width option
- ✓ Disabled state
- ✓ Hover effects

#### Card Component
- ✓ Rounded corners
- ✓ Soft shadow
- ✓ Border styling
- ✓ Padding options: none, sm, md, lg

#### Tabs Component
- ✓ Active/inactive states
- ✓ Yellow accent for active tab
- ✓ Scrollable on mobile
- ✓ Dynamic content rendering

#### Logo Component
- ✓ Animated SVG
- ✓ Pulse animation
- ✓ Bounce effects
- ✓ Yellow accent color

### ✅ 5. Perpetual Trading Page

#### Price Header
- ✓ BTC-PERP pair display
- ✓ Oracle price (live simulation)
- ✓ 24h change (with color coding)
- ✓ 24h high/low
- ✓ 24h volume
- ✓ Funding rate & countdown
- ✓ Responsive layout

#### Trading Chart
- ✓ Chart placeholder with grid
- ✓ Simulated candlesticks
- ✓ Timeframe selector (1m, 5m, 15m, 1h, 4h, 1D)
- ✓ Indicators button
- ✓ Full height container
- ✓ Ready for TradingView integration

#### Order Book
- ✓ Price, Quantity, Total columns
- ✓ Asks (sell orders) in red
- ✓ Bids (buy orders) in green
- ✓ Current price display
- ✓ Depth visualization (background bars)
- ✓ Precision selector (0.1, 0.01, 1)
- ✓ Scrollable list
- ✓ Hover effects

#### Trades List
- ✓ Recent trades display
- ✓ Price, Quantity, Time columns
- ✓ Color-coded by type (buy/sell)
- ✓ Scrollable list
- ✓ Hover effects

#### Trade Panel
- ✓ Buy/Sell tabs (green/red)
- ✓ Market/Limit toggle
- ✓ Available balance display
- ✓ Price input (for limit orders)
- ✓ Quantity input
- ✓ Quantity slider (0-100%)
- ✓ Reduce Only checkbox
- ✓ TP/SL checkbox
- ✓ Cost summary
- ✓ "Connect to a wallet" button

#### Position Tabs
- ✓ Positions tab
- ✓ Pending Orders tab
- ✓ Filled Orders tab
- ✓ Funding History tab
- ✓ Empty states for all tabs

#### Responsive Layout
- ✓ Desktop: Chart left, Order Book + Trades + Panel right
- ✓ Tablet: Stacked layout
- ✓ Mobile: Collapsible Order Book, full-width components

### ✅ 6. Fiat Page
- ✓ Auto-redirect to https://srd.exchange/dashboard
- ✓ Loading state with message
- ✓ Clickable link as fallback

### ✅ 7. Wallet Page

#### Connected State
- ✓ Account value card (large display)
- ✓ Total assets/liabilities breakdown
- ✓ USDT balance card with icon
- ✓ INR balance card with icon
- ✓ Quick actions: Deposit, Withdraw, Transfer, History
- ✓ Disconnect wallet button

#### Empty State (Not Connected)
- ✓ Large wallet icon
- ✓ "Connect Your Wallet" heading
- ✓ Descriptive text
- ✓ "Connect to a wallet" button
- ✓ Supported wallets display (MetaMask, WalletConnect, Coinbase)
- ✓ Hover effects on wallet options

### ✅ 8. Responsive Design

#### Desktop (> 1024px)
- ✓ Header navigation visible
- ✓ Mobile footer hidden
- ✓ Grid layout for perpetual page
- ✓ Sidebar for order book and trades
- ✓ Full-width chart

#### Tablet (768px - 1024px)
- ✓ Header navigation visible
- ✓ Mobile footer hidden
- ✓ Stacked layout
- ✓ Order book below chart

#### Mobile (< 768px)
- ✓ Header hidden
- ✓ Mobile footer visible and sticky
- ✓ Full-width stacking
- ✓ Collapsible order book
- ✓ Compact trade panel
- ✓ Scrollable tabs

## 🎨 Design Specifications

### Colors
```css
Background:     #0D0D0D
Card BG:        #1A1A1A
Border:         #2A2A2A
Accent Yellow:  #FFD400
Text Primary:   #FFFFFF
Text Secondary: #B0B0B0
Green (Buy):    #22c55e
Red (Sell):     #ef4444
```

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Spacing
- Container padding: 1rem (mobile), 2rem (desktop)
- Card padding: 0.75rem (sm), 1rem (md), 1.5rem (lg)
- Gap between elements: 1rem

### Border Radius
- Buttons: 0.5rem (lg), 9999px (full for primary)
- Cards: 0.5rem
- Inputs: 0.5rem

## 🚀 Navigation Flow

1. **Landing** → Auto-redirects to `/perpetual`
2. **Fiat** → Redirects to external URL
3. **Perpetual** → Full trading interface
4. **Wallet** → Wallet management (mock connect/disconnect)

## 📱 Mobile Optimizations

- Touch-friendly button sizes (min 44px height)
- Sticky footer navigation
- Collapsible sections
- Horizontal scrolling for tabs
- Optimized font sizes
- Reduced padding on small screens

## 🎯 Mock Data

All data is static/simulated:
- Price updates (simulated with intervals)
- Order book entries
- Recent trades
- Wallet balances (all zeros)
- Position tabs (empty states)

## 🔄 Animations

- Logo: pulse + bounce effects
- Buttons: scale on active, color transitions
- Tabs: smooth color transitions
- Price changes: color-coded updates
- Page transitions: smooth routing

## ✨ Interactive Elements

- Clickable navigation links
- Hoverable buttons and cards
- Toggle switches (Buy/Sell, Market/Limit)
- Checkboxes (Reduce Only, TP/SL)
- Range slider for quantity
- Collapsible order book (mobile)
- Mock wallet connect/disconnect

## 🎨 Visual Hierarchy

1. **Primary Actions**: Yellow accent buttons
2. **Secondary Actions**: Gray background buttons
3. **Tertiary Actions**: Outline buttons
4. **Data Display**: Cards with borders
5. **Navigation**: Highlighted active states
6. **Status Indicators**: Color-coded (green/red)

## 📊 Component Reusability

All major UI patterns are componentized:
- `<Button>` - All clickable actions
- `<Card>` - All content containers
- `<Tabs>` - All tabbed interfaces
- `<Logo>` - Consistent branding

This ensures consistency and easy maintenance across the entire application.

