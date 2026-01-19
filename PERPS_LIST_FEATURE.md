# Perpetuals List Feature

## Overview
A premium, searchable perpetuals market list has been added to the SRD DEX trading interface. This feature allows users to easily browse and switch between different perpetual trading pairs with a modern, intuitive UI.

## Features

### 🔍 Search Functionality
- Real-time search across all perpetual markets
- Search by symbol name (e.g., "BTC", "ETH", "SOL")
- Instant filtering as you type

### 📊 Sortable Columns
- **Symbol**: Sort alphabetically by trading pair
- **24h Change**: Sort by price change percentage
- **24h Volume**: Sort by trading volume (default)
- Click column headers to toggle ascending/descending order

### 💎 Premium UI Design
- **Modern glassmorphism design** with backdrop blur effects
- **Smooth animations** for dropdown appearance
- **Hover effects** on market rows
- **Active market highlighting** with accent border
- **Responsive layout** for both desktop and mobile

### 📱 Mobile Support
- Full-screen modal on mobile devices
- Touch-optimized interface
- Smooth slide-in animation
- Easy-to-tap close button

### 🔄 Real-time Data
- Live market data from Binance Futures API
- Auto-refresh every 10 seconds
- Top 50 perpetual markets by volume
- Real-time price updates

## Components

### 1. PerpsList Component
**Location**: `components/perpetual/PerpsList.tsx`

Main component that displays the searchable list of perpetual markets.

**Features**:
- Search bar with icon
- Sortable table headers
- Market rows with:
  - Coin icon
  - Symbol name with leverage badge
  - Current price
  - 24h change percentage (color-coded)
  - 24h volume
  - Funding rate

### 2. Updated PriceHeader Component
**Location**: `components/perpetual/PriceHeader.tsx`

Desktop header with clickable symbol selector.

**Changes**:
- Symbol name is now clickable
- Dropdown arrow indicator
- Dropdown panel with PerpsList
- Backdrop overlay for closing

### 3. Updated MobileHeader Component
**Location**: `components/perpetual/MobileHeader.tsx`

Mobile header with full-screen market selector.

**Changes**:
- Ticker info is now clickable
- Full-screen modal for market selection
- Smooth animations
- Close button in modal header

## Usage

### Desktop
1. Click on the current trading pair name in the header (e.g., "BTC-PERP")
2. A dropdown panel appears with the searchable market list
3. Use the search bar to filter markets
4. Click column headers to sort
5. Click any market to switch to that trading pair
6. Click outside the panel to close

### Mobile
1. Tap on the current trading pair name in the header
2. A full-screen modal appears with the market list
3. Search and browse markets
4. Tap any market to switch
5. Tap the X button or backdrop to close

## Data Source

Markets are fetched from **Binance Futures API**:
- Endpoint: `https://fapi.binance.com/fapi/v1/ticker/24hr`
- Updates: Every 10 seconds
- Fallback: Mock data if API fails

## Styling

### Color Scheme
- **Background**: `#0D0D0D` (dark)
- **Cards**: `#1A1A1A` (slightly lighter)
- **Borders**: `#2A2A2A` (subtle)
- **Accent**: Purple/violet theme
- **Green**: `#4ade80` (positive changes)
- **Red**: `#f87171` (negative changes)

### Animations
- **slideDown**: Smooth dropdown appearance (0.2s)
- **Hover effects**: Background color transitions
- **Active state**: Scale transform on button press

## Technical Details

### State Management
- `searchQuery`: Current search input
- `sortBy`: Active sort column
- `sortOrder`: Sort direction (asc/desc)
- `markets`: Array of market data
- `showPerpsList`: Dropdown visibility

### Performance
- Memoized filtering and sorting with `useMemo`
- Efficient re-renders
- Optimized image loading with Next.js Image component
- Lazy loading of market icons

### Error Handling
- Fallback to mock data if API fails
- Image error handling with fallback icons
- Graceful degradation

## Future Enhancements

Potential improvements:
- [ ] Add favorites/watchlist feature
- [ ] Show open interest data
- [ ] Add price charts in dropdown
- [ ] Filter by category (DeFi, Layer 1, Meme coins, etc.)
- [ ] Show 24h high/low in list
- [ ] Add keyboard navigation (arrow keys)
- [ ] Remember last selected market in localStorage
- [ ] Add market statistics (total markets, total volume)

## Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

No additional dependencies required. Uses existing:
- Next.js 15.5.6
- React 18+
- TailwindCSS
- TypeScript

