# ⚡ Quick Reference - Code Snippets

## 🔄 Replace Bird Placeholders

Once you have your SVG files, replace the placeholder divs in `components/Hero/Birds.tsx`:

### Before (Placeholder):
```tsx
<div className="w-full h-full bg-blue-500/20 rounded-full flex items-center justify-center">
  <span className="text-xs sm:text-sm md:text-base">🐦</span>
</div>
```

### After (With SVG):
```tsx
<Image 
  src="/birds/bird-left.svg" 
  alt="Flying bird" 
  width={80} 
  height={80}
  className="w-full h-full"
/>
```

---

## 📝 Complete Bird Component Example

Here's a complete example for one bird position:

```tsx
{/* Bird Left - Top */}
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

## 🎨 Animation Classes Reference

| Class | Effect | Duration |
|-------|--------|----------|
| `animate-float` | Up/down floating | 6s |
| `animate-floatSlow` | Slower up/down | 9s |
| `animate-drift` | Horizontal drift | 40s |

---

## 🎯 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | < 640px | Mobile |
| `sm:` | ≥ 640px | Tablet |
| `md:` | ≥ 768px | Desktop |
| `lg:` | ≥ 1024px | Large |

---

## 🎨 Color Classes

| Class | Color | Hex |
|-------|-------|-----|
| `bg-sky` | Sky background | #EEF6FF |
| `bg-cloud-light` | Light cloud | #E4F0FF |
| `bg-cloud-medium` | Medium cloud | #D6E8FF |
| `bg-cloud-dark` | Dark cloud | #C9DEFF |

---

## 📦 Import Statement Needed

At the top of `Birds.tsx`, make sure you have:

```tsx
import Image from "next/image"
```

---

## 🔧 Common Customizations

### Make birds float faster:
```tsx
// In tailwind.config.ts
animation: {
  float: "float 4s ease-in-out infinite",  // Changed from 6s
}
```

### Make birds move more:
```tsx
// In tailwind.config.ts
keyframes: {
  float: {
    "50%": { transform: "translateY(-20px)" },  // Changed from -12px
  },
}
```

### Add more birds:
```tsx
{/* New bird position */}
<div className="absolute left-1/2 top-1/2 animate-float" style={{ animationDelay: "1.5s" }}>
  <div className="relative w-14 h-14 sm:w-18 sm:h-18">
    <Image src="/birds/bird-center.svg" alt="Bird" width={72} height={72} />
  </div>
</div>
```

