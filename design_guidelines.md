# Design Guidelines: Ramadan's AI Portfolio Website

## Design Approach: Animation-Forward Modern Portfolio
**Approach:** Reference-based design inspired by modern developer portfolios (Bruno Simon, Lynn Fisher, Brittany Chiang) with emphasis on smooth animations and interactive experiences as specifically requested.

**Core Philosophy:** Create a visually striking, animation-rich portfolio that showcases technical sophistication while maintaining professional credibility for an AI specialist.

---

## Color Palette

### Dark Mode (Primary)
- **Background Base:** 222 47% 11% (Deep charcoal)
- **Background Elevated:** 222 47% 15% (Slightly lighter panels)
- **Primary Accent:** 271 91% 65% (Vibrant purple - tech/AI vibe)
- **Secondary Accent:** 199 89% 48% (Cyan blue - complements purple)
- **Text Primary:** 0 0% 98% (Near white)
- **Text Secondary:** 240 5% 65% (Muted gray)

### Key Principle
Use gradient overlays sparingly on hero section only. Accent colors appear in interactive elements, project cards, and skill badges.

---

## Typography

**Font Stack:** 
- **Display/Headings:** 'Space Grotesk' (Google Fonts) - Bold geometric sans for impact
- **Body/UI:** 'Inter' (Google Fonts) - Clean, readable for content
- **Code/Technical:** 'JetBrains Mono' - For any code snippets or technical details

**Scale:**
- Hero Name: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl font-bold
- Subsections: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small/Meta: text-sm

---

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections

**Grid Strategy:**
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Single column for about/contact sections

---

## Component Library

### Navigation
- Floating nav bar with backdrop blur: bg-black/20 backdrop-blur-md
- Smooth scroll-to-section functionality
- Active state indicators with accent color underline
- Mobile: Hamburger menu with slide-in animation

### Hero Section
- Full viewport (min-h-screen) with centered content
- Professional photo: Circular frame (w-48 md:w-64) with subtle glow effect using box-shadow
- Animated gradient text for name using bg-gradient-to-r from-primary to-secondary
- Typing animation effect for tagline/role
- Floating particles or geometric shapes in background (canvas/CSS)
- Scroll indicator with bounce animation at bottom

### Project Cards
- Glassmorphic cards: bg-white/5 backdrop-blur-sm border border-white/10
- Hover lift effect: transform translateY(-8px) with shadow increase
- Project thumbnail with overlay on hover revealing details
- Tech stack badges with pill design: rounded-full px-3 py-1
- "View Project" CTA with arrow animation on hover

### Skills Section
- Icon + label cards in grid
- Staggered fade-in animation on scroll
- Hover: scale and color shift to accent
- Progress bars or proficiency indicators (optional visual enhancement)

### About Section
- Two-column layout (desktop): Text + additional visual/info graphic
- Timeline design for education/experience
- Animated counter for stats (projects completed, years experience, etc.)

### Contact Section
- Center-aligned with social icons
- Animated button with ripple effect
- Email/social links with hover state color transitions

---

## Animation Strategy

**Entry Animations:**
- Fade up (opacity + translateY): For sections on scroll
- Stagger children: Cards/items animate sequentially
- Hero elements: Cascade timing (photo → name → tagline → CTA)

**Interaction Animations:**
- Hover scale: 1.05 for cards, 1.1 for buttons
- Smooth color transitions: 300ms ease-in-out
- Cursor follow effects on hero section (subtle parallax)

**Scroll Effects:**
- Parallax on hero background elements (slower scroll speed)
- Fade-in-up for sections when 20% visible
- Progress bar showing scroll position (thin line at top)

**Performance:** Use transform and opacity only. Limit concurrent animations to 3-4 elements.

---

## Images

### Primary Image
**Hero Section - Professional Photo:**
- Position: Center of hero, above name
- Treatment: Circular crop (w-48 h-48 md:w-64 md:h-64), subtle purple/cyan glow using box-shadow
- Animation: Scale-in on page load with fade
- Source: User-provided professional portrait

### Supporting Visuals
- Project thumbnails: Placeholder or actual project screenshots (16:9 ratio)
- Background: Subtle geometric pattern or gradient mesh (CSS-generated, not image)
- Optional: AI/tech themed abstract graphics as decorative elements

**Note:** Hero uses large professional photo as primary visual anchor. Additional images limited to project showcase cards.

---

## Key Differentiators

1. **Animation Intensity:** Unlike minimal portfolios, this design embraces motion as requested - scroll triggers, hover effects, and entrance animations throughout
2. **Tech-Forward Aesthetic:** Purple/cyan color scheme signals AI/tech specialization
3. **Glassmorphism:** Modern design trend with frosted glass cards against dark background
4. **Interactive Elements:** Cursor interactions, animated skill visualizations, dynamic project filtering
5. **Personal Branding:** Professional photo treatment with glow effects creates memorable visual identity