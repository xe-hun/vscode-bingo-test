# Anime Bubble Aesthetic Design Spec

## Project: Soc Ops Bingo Game Redesign

**Status**: In Progress  
**Started**: Jan 19, 2026

## Design System

### Color Palette
- **Bubble Gradient 1** (Pink-Purple): `from-pink-300 via-purple-300 to-purple-400`
- **Bubble Gradient 2** (Blue-Cyan): `from-blue-300 via-cyan-300 to-blue-400`
- **Bubble Gradient 3** (Mint-Purple): `from-green-300 via-purple-200 to-pink-300`
- **Bubble Gradient 4** (Warm-Orange): `from-orange-300 via-yellow-200 to-pink-300`
- **Accent Colors**:
  - Electric Purple: `#7c3aed`
  - Neon Pink: `#ff1493`
  - Sky Blue: `#0ea5e9`
- **Marked State**: Bright green with glow effect
- **Background**: Soft gradients, translucent effects

### Typography
- **Headings**: Poppins (rounded, geometric feel)
- **Body**: Inter (existing)
- **Roundness**: Increased with font-weight choices

### Animation System
- **Spring Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` over 0.3s
- **Glow Pulse**: Subtle opacity oscillation
- **Mark Animation**: scale 0.95 → 1.0 with brightness boost
- **Modal Entrance**: scale-in with glow

## Implementation Progress

### Phase 1: CSS Foundation
- [ ] Import Poppins font from Google Fonts
- [ ] Define custom keyframes for spring-bounce, gentle-pulse, glow-pulse
- [ ] Create CSS variables for gradients and glow colors
- [ ] Define custom shadow utilities for glow effects
- [ ] Add prefers-reduced-motion media query

### Phase 2: Component Redesigns
- [ ] BingoSquare: Gradient cycling, glow, animations
- [ ] BingoBoard: Soft styling, improved gap
- [ ] StartScreen: Hero gradient, button styling
- [ ] GameScreen: Background, header styling
- [ ] BingoModal: Enhanced glow effects
- [ ] WelcomeTour: Palette alignment

### Phase 3: Testing & Refinement
- [ ] Visual regression testing
- [ ] Performance check (animations)
- [ ] Responsive behavior verification
- [ ] Accessibility (prefers-reduced-motion)
- [ ] Cross-browser testing

## Design Decisions

(Decisions will be documented as implementation proceeds)

## Notes

- Develop iteratively with visual feedback from browser
- Test on multiple screen sizes
- Verify animations are smooth and accessible
