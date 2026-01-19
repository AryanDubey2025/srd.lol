# Development Guide

## 🛠️ Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm 10.x or higher
- Git (optional)

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

5. **Run Linter**
   ```bash
   npm run lint
   ```

## 📁 File Structure Explained

```
SRD DEX/
│
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & Tailwind imports
│   ├── layout.tsx               # Root layout (Header + Footer)
│   ├── page.tsx                 # Home page (redirects to /perpetual)
│   │
│   ├── fiat/
│   │   └── page.tsx             # Fiat page (redirects to external URL)
│   │
│   ├── perpetual/
│   │   └── page.tsx             # Perpetual trading page
│   │
│   └── wallet/
│       └── page.tsx             # Wallet management page
│
├── components/                   # Reusable components
│   ├── Button.tsx               # Button component (primary, secondary, outline)
│   ├── Card.tsx                 # Card container component
│   ├── Logo.tsx                 # Animated SVG logo
│   ├── Tabs.tsx                 # Tabs component
│   │
│   └── perpetual/               # Perpetual page specific components
│       ├── OrderBook.tsx        # Order book with bids/asks
│       ├── PriceHeader.tsx      # Price stats header
│       ├── TradePanel.tsx       # Buy/Sell trading panel
│       ├── Trades.tsx           # Recent trades list
│       └── TradingChart.tsx     # Chart placeholder
│
├── layout/                       # Layout components
│   ├── Header.tsx               # Desktop header navigation
│   └── MobileFooter.tsx         # Mobile bottom navigation
│
├── public/                       # Static assets (if needed)
│
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies & scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── README.md                    # Project documentation
├── FEATURES.md                  # Feature documentation
└── DEVELOPMENT.md               # This file
```

## 🎨 Adding New Components

### Example: Creating a New Component

1. **Create the component file**
   ```tsx
   // components/MyComponent.tsx
   import React from "react";

   interface MyComponentProps {
     title: string;
     description?: string;
   }

   export default function MyComponent({ title, description }: MyComponentProps) {
     return (
       <div className="p-4 bg-cardBg rounded-lg">
         <h2 className="text-xl font-bold">{title}</h2>
         {description && <p className="text-textSecondary">{description}</p>}
       </div>
     );
   }
   ```

2. **Import and use it**
   ```tsx
   import MyComponent from "@/components/MyComponent";

   export default function Page() {
     return <MyComponent title="Hello" description="World" />;
   }
   ```

## 🎯 Adding New Pages

### Example: Creating a New Page

1. **Create a new folder in `app/`**
   ```
   app/
   └── my-page/
       └── page.tsx
   ```

2. **Create the page component**
   ```tsx
   // app/my-page/page.tsx
   export default function MyPage() {
     return (
       <div className="min-h-screen bg-background p-4">
         <h1 className="text-3xl font-bold">My New Page</h1>
       </div>
     );
   }
   ```

3. **Add navigation link**
   - Update `layout/Header.tsx` for desktop
   - Update `layout/MobileFooter.tsx` for mobile

## 🎨 Customizing Theme

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      background: "#0D0D0D",      // Change background color
      accent: "#FFD400",          // Change accent color
      textPrimary: "#FFFFFF",     // Change primary text color
      textSecondary: "#B0B0B0",   // Change secondary text color
      cardBg: "#1A1A1A",          // Change card background
      borderColor: "#2A2A2A",     // Change border color
    },
  },
}
```

## 🔧 Common Tasks

### 1. Change Logo
Edit `components/Logo.tsx` and replace the SVG content.

### 2. Add New Color
```typescript
// tailwind.config.ts
colors: {
  myNewColor: "#123456",
}

// Use in components
<div className="bg-myNewColor">...</div>
```

### 3. Modify Responsive Breakpoints
```typescript
// tailwind.config.ts
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### 4. Add Global Styles
Edit `app/globals.css`:
```css
/* Add custom global styles */
.my-custom-class {
  /* styles */
}
```

## 🐛 Debugging

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   
   # Or use a different port
   PORT=3001 npm run dev
   ```

2. **TypeScript errors**
   ```bash
   # Check for type errors
   npx tsc --noEmit
   ```

3. **Styling not updating**
   - Clear `.next` folder: `rm -rf .next`
   - Restart dev server

4. **Module not found**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📦 Adding Dependencies

### Example: Adding a new package

```bash
# Install a package
npm install package-name

# Install a dev dependency
npm install -D package-name

# Remove a package
npm uninstall package-name
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Build

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Variables

Create `.env.local` for local development:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Desktop navigation works
- [ ] Mobile footer navigation works
- [ ] All pages load correctly
- [ ] Responsive design works on all screen sizes
- [ ] Buttons and interactions work
- [ ] Forms accept input
- [ ] Tabs switch correctly
- [ ] Hover states work
- [ ] Active states highlight correctly

### Browser Testing

Test on:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)
- Mobile browsers (Chrome, Safari)

## 📝 Code Style

### TypeScript
- Use TypeScript for all new files
- Define interfaces for props
- Avoid `any` type

### React
- Use functional components
- Use hooks (useState, useEffect, etc.)
- Keep components small and focused

### Tailwind
- Use Tailwind classes instead of custom CSS
- Use theme colors from config
- Keep className strings organized

### File Naming
- Components: PascalCase (e.g., `MyComponent.tsx`)
- Pages: lowercase (e.g., `page.tsx`)
- Utilities: camelCase (e.g., `myUtil.ts`)

## 🔄 Git Workflow (Optional)

```bash
# Create a new branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add my feature"

# Push to remote
git push origin feature/my-feature

# Create pull request on GitHub
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🆘 Getting Help

If you encounter issues:
1. Check the console for errors
2. Review the documentation
3. Search for similar issues online
4. Check Next.js and React documentation

## 🎯 Next Steps

To make this a real DEX, you would need to:

1. **Integrate TradingView**
   - Add TradingView widget to `TradingChart.tsx`
   - Configure chart settings

2. **Add Wallet Integration**
   - Install Web3 libraries (ethers.js, wagmi, etc.)
   - Implement wallet connection logic
   - Handle wallet state

3. **Connect to Backend API**
   - Create API routes in `app/api/`
   - Fetch real market data
   - Handle order submissions

4. **Add WebSocket for Real-time Data**
   - Install WebSocket library
   - Subscribe to price feeds
   - Update UI in real-time

5. **Implement Smart Contract Integration**
   - Connect to blockchain
   - Read contract state
   - Submit transactions

6. **Add Authentication**
   - Implement user sessions
   - Secure API routes
   - Handle user data

Good luck with your development! 🚀

