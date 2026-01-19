# Tailwind v4 Development Essentials

## Setup & Build
- **Entry Point**: `src/index.css` imports `@tailwind` directives (base, components, utilities)
- **Vite Plugin**: `@tailwindcss/vite` handles CSS processing—no JIT config needed
- **Content Paths**: `tailwind.config.ts` scans `src/**/*.{js,jsx,ts,tsx}` for class detection
- **Dev**: HMR rebuilds automatically; no rebuild delays

## Core Classes (v4 Syntax)
```
Spacing: gap-1, p-4, mb-2 (1-unit = 0.25rem)
Grid: grid grid-cols-5 gap-1 aspect-square (auto-responsive)
Flex: flex justify-center items-center gap-3
Text: text-sm font-semibold text-gray-800
Colors: bg-blue-500 hover:bg-blue-600 (dark mode: dark:bg-gray-900)
Rounded: rounded-lg (default 0.5rem radius)
Borders: border border-gray-300 (1px default)
Shadows: shadow-md (preset shadow)
Transitions: transition duration-200 ease-in-out
```

## State Variants
- **Hover**: `hover:bg-blue-600` (auto-applied on mouse over)
- **Focus**: `focus:outline-blue-500` (keyboard navigation)
- **Active**: `active:scale-95` (click state)
- **Disabled**: `disabled:opacity-50 disabled:cursor-not-allowed`
- **Dark Mode**: `dark:bg-gray-900` (requires `darkMode: 'class'` in config)
- **Group States**: `group-hover:text-white` (style children on parent hover)

## Layout Patterns
```typescript
// 5×5 Grid (Game Board)
<div className="grid grid-cols-5 gap-1 aspect-square w-full max-w-md">

// Flex Row (Centered)
<div className="flex justify-center items-center gap-4">

// Responsive Stack
<div className="flex flex-col md:flex-row gap-4">
```

## Common Pitfalls
- **Dynamic Classes**: Use string interpolation carefully; Tailwind scans static strings only. Avoid `className={\`bg-${color}-500\`}`—use complete class names instead.
- **Conflicts**: If specificity issues arise, check utilities order in `index.css`
- **Arbitrary Values**: Use `gap-[5px]` for custom spacing (parsed at build time)
- **Important**: Rarely needed; leverage specificity and cascade instead

## Performance
- **Purging**: Unused classes auto-removed in production builds
- **Bundle Size**: ~40KB gzipped (base + most utilities)
- **Custom Fonts**: Define in `tailwind.config.ts` under `theme.fontFamily`

## Testing
- Classes applied in test snapshots; use `testing-library` to query by role (`getByRole('button')`)
- Mock Tailwind responsiveness with `window.matchMedia` if testing breakpoints

## Resources
- [Tailwind v4 Docs](https://tailwindcss.com/docs)
- [IntelliSense Plugin**: VS Code Tailwind CSS extension auto-completes class names
