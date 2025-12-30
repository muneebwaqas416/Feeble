# 🎯 Setup Guide - What You Need to Do

This guide explains exactly what you need to do from your side to complete the hero animation setup.

## 📋 Step-by-Step Instructions

### 1️⃣ Install Dependencies

First, install all the required packages:

```bash
npm install
```

This will install:
- Next.js and React
- Tailwind CSS
- shadcn/ui dependencies
- TypeScript
- All other required packages

---

### 2️⃣ Export Birds from Figma (SVG Format)

#### ✅ What to Export:
- **All birds** (each separately)
- **Message bubble icons** (blue chat icons)

#### 📝 How to Export:

1. **In Figma:**
   - Select a bird
   - Look at the right panel
   - Click **"Export"** section
   - Choose **"SVG"** format
   - Click **"Export [bird-name]"**

2. **Save the files:**
   - Save them in: `public/birds/`
   - Use clear names:
     - `bird-left.svg`
     - `bird-right.svg`
     - `bird-bottom-left.svg`
     - `bird-bottom-right.svg`
     - `message-bubble-1.svg`
     - `message-bubble-2.svg`

#### ❌ Do NOT Export:
- Clouds (we build these with CSS)
- Sky background (CSS gradient)
- Large shapes (we use divs)

---

### 3️⃣ Update Birds.tsx Component

Once you have your SVG files, update `components/Hero/Birds.tsx`:

**Current (placeholder):**
```tsx
<div className="w-full h-full bg-blue-500/20 rounded-full flex items-center justify-center">
  <span className="text-xs">🐦</span>
</div>
```

**Replace with:**
```tsx
<Image 
  src="/birds/bird-left.svg" 
  alt="Flying bird" 
  width={80} 
  height={80}
  className="w-full h-full"
/>
```

**Full example for one bird:**
```tsx
<div className="absolute left-4 sm:left-8 md:left-20 top-16 sm:top-24 md:top-32 animate-float">
  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
    <Image 
      src="/birds/bird-left.svg" 
      alt="Flying bird" 
      width={80} 
      height={80}
      className="w-full h-full"
    />
  </div>
</div>
```

---

### 4️⃣ How the Animation Works (Already Set Up!)

The animations are **already configured** in `tailwind.config.ts`. Here's what's happening:

#### 🐦 Bird Floating Animation:
- **Class**: `animate-float` or `animate-floatSlow`
- **Effect**: Birds move up and down smoothly
- **Duration**: 6s (fast) or 9s (slow)
- **Type**: Infinite loop, ease-in-out

#### ☁️ Cloud Drifting Animation:
- **Class**: `animate-drift`
- **Effect**: Clouds move horizontally (subtle parallax)
- **Duration**: 40s
- **Type**: Infinite loop, linear
- **Staggered delays**: Each cloud layer has different delay (0s, 5s, 10s, 15s)

#### 🎯 Button Hover Effects:
- **Effect**: Scale up slightly + shadow
- **Class**: Already applied in `HeroContent.tsx`

---

### 5️⃣ Customize Colors (Optional)

Colors are defined in **two places** (following best practices):

#### A. Global Colors (app/globals.css)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more colors ... */
}
```

#### B. Custom Sky/Cloud Colors (tailwind.config.ts)
```ts
sky: {
  DEFAULT: "#EEF6FF",
},
cloud: {
  light: "#E4F0FF",
  medium: "#D6E8FF",
  dark: "#C9DEFF",
},
```

**To change colors:**
1. Update hex values in `tailwind.config.ts` for sky/clouds
2. Update HSL values in `globals.css` for theme colors

---

### 6️⃣ Test Responsiveness

The project is **100% responsive**. Test on:

- 📱 **Mobile**: < 640px
- 📱 **Tablet**: 640px - 768px
- 💻 **Desktop**: 768px+
- 🖥️ **Large**: 1024px+

**Responsive features:**
- Bird sizes scale: `w-12 sm:w-16 md:w-20`
- Text sizes: `text-4xl sm:text-5xl md:text-6xl`
- Spacing adjusts: `left-4 sm:left-8 md:left-20`
- Buttons stack on mobile, row on desktop

---

### 7️⃣ Run the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🎨 Animation Customization

### Change Animation Speed:

**In `tailwind.config.ts`:**
```ts
animation: {
  float: "float 6s ease-in-out infinite",  // Change 6s to 8s for slower
  floatSlow: "floatSlow 9s ease-in-out infinite",
  drift: "drift 40s linear infinite",  // Change 40s to 60s for slower
}
```

### Change Animation Distance:

**In `tailwind.config.ts`:**
```ts
keyframes: {
  float: {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-12px)" },  // Change -12px to -20px for more movement
  },
}
```

---

## 📁 File Structure Overview

```
Feeble/
├── app/
│   ├── globals.css          ← Colors & General Sans font
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx         ← Main container
│   │   ├── Birds.tsx        ← UPDATE THIS with your SVGs
│   │   ├── Clouds.tsx       ← Already done (CSS divs)
│   │   └── HeroContent.tsx  ← Heading & buttons
│   └── ui/
│       └── button.tsx
├── public/
│   └── birds/               ← PUT YOUR SVG FILES HERE
├── tailwind.config.ts       ← Animations defined here
└── package.json
```

---

## ✅ Checklist

- [ ] Run `npm install`
- [ ] Export birds from Figma as SVG
- [ ] Save SVG files to `public/birds/`
- [ ] Update `Birds.tsx` to use Image component with your SVGs
- [ ] Test on mobile, tablet, and desktop
- [ ] Customize colors if needed
- [ ] Run `npm run dev` and verify animations

---

## 🆘 Troubleshooting

### Birds not showing?
- Check file paths: Should be `/birds/bird-left.svg`
- Verify files are in `public/birds/` directory
- Check browser console for 404 errors

### Animations not working?
- Verify `tailwindcss-animate` is installed: `npm install tailwindcss-animate`
- Check that classes `animate-float`, `animate-drift` are applied
- Restart dev server after config changes

### Colors not applying?
- Clear browser cache
- Restart dev server
- Check `globals.css` is imported in `layout.tsx`

---

## 🎉 You're Done!

Once you've:
1. Exported your SVGs
2. Updated `Birds.tsx`
3. Tested the animations

Your hero section will be **production-ready** with smooth animations and full responsiveness!

