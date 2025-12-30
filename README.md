# Feeble - Next.js Hero Animation Project

A modern, fully responsive Next.js project with shadcn/ui, Tailwind CSS, and beautiful hero animations featuring floating birds and drifting clouds.

## 🚀 Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom color system
- ✅ shadcn/ui components
- ✅ General Sans font family
- ✅ 100% responsive design
- ✅ Smooth CSS animations (floating birds, drifting clouds)
- ✅ Industry best practices for color management

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Project Structure

```
Feeble/
├── app/
│   ├── globals.css          # Global styles with General Sans & color variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx         # Main hero component
│   │   ├── Birds.tsx        # Animated birds component
│   │   ├── Clouds.tsx       # Animated clouds component
│   │   └── HeroContent.tsx  # Hero content (heading, CTA)
│   └── ui/
│       └── button.tsx       # shadcn/ui button component
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── tailwind.config.ts        # Tailwind configuration with animations
```

## 🎯 How to Add Your Bird SVGs

1. **Export from Figma:**
   - Select each bird
   - Right panel → Export → SVG
   - Name them: `bird-left.svg`, `bird-right.svg`, etc.

2. **Add to project:**
   - Create `public/birds/` directory
   - Place your SVG files there

3. **Update Birds.tsx:**
   - Replace the placeholder divs with:
   ```tsx
   <Image 
     src="/birds/bird-left.svg" 
     alt="Bird" 
     width={80} 
     height={80}
     className="animate-float"
   />
   ```

## 🎨 Color System (Best Practices)

Colors are declared in `app/globals.css` using CSS custom properties:

- **Base colors**: Defined in `:root` using HSL values
- **Custom colors**: Sky and cloud colors in Tailwind config
- **Dark mode**: Supported via `.dark` class

### Custom Colors:
- `bg-sky` - Sky background (#EEF6FF)
- `bg-cloud-light` - Light cloud (#E4F0FF)
- `bg-cloud-medium` - Medium cloud (#D6E8FF)
- `bg-cloud-dark` - Dark cloud (#C9DEFF)

## ✨ Animations

### Floating Birds
- `animate-float` - 6s ease-in-out infinite
- `animate-floatSlow` - 9s ease-in-out infinite

### Drifting Clouds
- `animate-drift` - 40s linear infinite (with staggered delays)

### Button Interactions
- Hover scale and shadow effects

## 📱 Responsive Design

The project is fully responsive with breakpoints:
- Mobile: Default (< 640px)
- Tablet: `sm:` (≥ 640px)
- Desktop: `md:` (≥ 768px)
- Large: `lg:` (≥ 1024px)

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Font**: General Sans (via Google Fonts)

## 📝 Next Steps

1. Replace bird placeholders with actual SVG files
2. Add message bubble SVG icons
3. Customize colors in `globals.css`
4. Add more sections below the hero
5. Implement scroll-based animations (optional)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

