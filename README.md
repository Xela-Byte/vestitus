# Vestitus

## Project Overview

**Vestitus** is an Expo-based React Native mobile e-commerce app (runs on iOS, Android, Web) with TypeScript, NativeWind styling, and Zustand state management.

## Architecture & Key Patterns

### File-Based Routing with Expo Router

- Routes live in `/app` directory using folder structure
- `(auth)`, `(app)`, `(tabs)` are route groups that conditionally render based on auth state
- Root `/app/_layout.tsx` controls navigation stack and splash screen lifecycle
- Initial route determined by `useAuthStore` user session - authenticated users see `(app),(tabs)` group, others see `(auth)`
- Prefer folder grouping over flat route structure for organizing related screens

### State Management with Zustand

- **Single store**: `store/index.ts` exports `useAuthStore` with user session data
- Auth state persists to AsyncStorage using Zustand's `persist` middleware
- Pattern: `const user = useAuthStore((state) => state.user)` - always use selectors
- Store actions: `setUser()`, `login()`, `logout()`
- When adding new stores, follow same TypeScript interface + Zustand create pattern

### Styling with NativeWind + Tailwind

- **Not web Tailwind** - uses NativeWind, a React Native className wrapper
- Configure custom fonts in `tailwind.config.ts` theme.extend.fontFamily (Outfit + SF-Pro-Display families)
- Custom color variables defined in config: `primary: #1A1A1A`, `secondary: #808080`
- **Typography**: Use Outfit fonts for primary text, SF-Pro-Display as fallback
- Babel preset must include `nativewind/babel` transformer (already configured)

### Form Handling Pattern

- Use **react-hook-form** with TypeScript `Controller` component
- Reusable component `AppInput` wraps Controller with validation states (error/success borders)
- Pattern:
  ```tsx
  const { control, handleSubmit } = useForm<FormData>({ defaultValues: {...} });
  <AppInput control={control} name="email" rules={{ required: "Required", pattern: EMAIL_REGEX }} />
  ```
- Validation regexes in `utils/regex.ts`: `EMAIL_REGEX`, `PASSWORD_REGEX` (8+ chars, mixed case, number, special char)

### Component Structure

- **UI Components** (`components/ui/`): Reusable `AppButton`, `AppText`, `AppInput`, `HeaderComponent`, etc.
  - `AppText` supports variants: "h1", "h2", "h3", "h4", "body", "caption", "button"
  - Components accept both `className` (NativeWind) and `style` (React Native) props
- **Feature Components** (`components/product/`, `components/notification/`, `components/splash/`): Domain-specific UI
- All components are TypeScript functional components with proper prop typing

### Development Workflow

```bash
npm start              # Start dev server (choose platform: iOS/Android/Web/Expo Go)
npm run android       # Build for Android emulator
npm run ios          # Build for iOS simulator
npm run web          # Run web version
npm run lint         # ESLint with Expo config
npm test             # Run test suite
npm test -- --watch  # Run tests in watch mode
npm test -- --coverage  # Run tests with coverage report
```

### Git Pre-Push Hooks

The project uses **Husky** to automatically run checks before pushing code. This ensures only code that passes all checks gets pushed to the repository.

**Checks that run before push:**
1. `npm run type-check` - TypeScript type checking
2. `npm run test` - Jest test suite
3. `npm run lint` - ESLint linting

If any check fails, the push is blocked until issues are fixed. To bypass hooks (not recommended), use `git push --no-verify`.

**For team members:** Husky hooks are automatically installed when you run `npm install` thanks to the `prepare` script in `package.json`.

### Path Aliases

- Use `@/` for root imports: `@/components/...`, `@/utils/...`, `@/store`, `@/types/...`
- Configured in `tsconfig.json` paths: `"@/*": ["./*"]`

## Critical Patterns & Conventions

### Authentication Flow

- Check auth state with `const user = useAuthStore((state) => state.user)`
- Routes automatically protect via `Stack.Protected` in root layout (conditional rendering)
- Login/logout updates store which triggers route re-render
- AsyncStorage persistence happens automatically via Zustand middleware

### Styling Approach

- **Always use className first**: Prefer NativeWind classes over inline styles
- Font families: Apply via `font-outfit-*` or `font-sf-*` classes
- Shadow/elevation use NativeWind: `shadow-xl shadow-gray-400` (iOS), `elevation-10` (Android)
- Custom spacing uses Outfit font system that scales with `sizeBlock` utility (see `styles/universalStyle.ts`)

### Component Props Pattern

- Accept `className` for styling, `style` for edge cases
- Use TypeScript extends pattern: `interface Props extends TouchableOpacityProps { custom?: string }`
- Favor prop composition over prop spreading (e.g., pass explicit props to children)
- Use generics for form-connected components (e.g., `AppInput<TFieldValues>`)

### Validation & Error Handling

- Form validation lives in `rules` prop on form inputs
- Error UI handled in `AppInput`: red border on error, green border on valid
- Custom regex validation in `utils/regex.ts`

## Files to Understand First

- `app/_layout.tsx` - Root navigation setup, splash screen, auth state integration
- `store/index.ts` - Auth state shape and actions
- `components/ui/AppButton.tsx`, `AppText.tsx`, `AppInput.tsx` - UI primitives
- `tailwind.config.ts` - Styling configuration and theme
- `app/(auth)/login.tsx` - Authentication flow example
- `app/(tabs)/index.tsx` - Main app structure example

## Common Tasks

### Add a New Screen

1. Create file in appropriate route group: `app/(app)/newpage.tsx`
2. Import layout from parent `_layout.tsx`
3. Use SafeAreaView + ScrollView for iOS/Android compatibility
4. Apply NativeWind classes for styling

### Add a Form Field

1. Add to TypeScript interface in component
2. Use `AppInput` with `control` prop from `useForm` hook
3. Add validation rules matching patterns in `utils/regex.ts`
4. Handle submission with `handleSubmit` callback

### Style a Component

1. Use NativeWind `className` prop
2. Reference custom colors from `tailwind.config.ts`
3. Use Outfit font families with weight variants
4. Test on both iOS and Android (NativeWind abstracts platform differences)

## Testing

The project uses **Jest** with **React Native Testing Library** for comprehensive test coverage, including **Expo Router testing** for navigation verification.

### Running Tests

```bash
npm test                    # Run all tests once
npm test -- --watch         # Watch mode (re-runs on file changes)
npm test -- --coverage      # Generate coverage report
npm test -- --verbose       # Detailed test output
npm test -- routing.test    # Run only router tests
```

### Test Structure

Tests are located in `__tests__/` directory:

- `__tests__/components/` - Component tests
- `__tests__/store/` - Store logic tests
- `__tests__/router/` - Router and navigation tests (30 tests)
- `__tests__/setup/` - Test utilities and mocks

### Writing Component Tests

Example component test:

```tsx
import { render, screen } from "../../setup/test-utils";
import MyComponent from "../../../components/MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Expected Text")).toBeDefined();
  });
});
```

### Writing Store Tests

Example store test:

```tsx
import { renderHook, act } from '@testing-library/react-native';
import { useAuthStore } from '@/store';

describe('useAuthStore', () => {
  it('logs in user', () => {
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.login({ email: 'test@example.com', ... });
    });
    expect(result.current.user).toBeDefined();
  });
});
```

### Testing Routes with Expo Router

Test navigation and routing with `renderRouter`:

```tsx
import { renderRouter, screen } from "expo-router/testing-library";
import { View } from "react-native";

describe("App Router", () => {
  it("should navigate to login", async () => {
    renderRouter(
      {
        "(auth)/login": () => <View />,
        "(auth)/onboarding": () => <View />,
      },
      { initialUrl: "/(auth)/login" }
    );

    expect(screen).toHavePathname("/login");
  });

  it("should handle product IDs", async () => {
    renderRouter(
      {
        "(app)/product/[productId]": () => <View />,
      },
      { initialUrl: "/(app)/product/123" }
    );

    expect(screen).toHavePathname("/product/123");
  });
});
```

Router matchers available:

- `toHavePathname(path)` - Assert current route
- `toHavePathnameWithParams(path)` - Assert route with query params
- `toHaveSegments(segments)` - Assert route segments
- `useLocalSearchParams(params)` - Assert local parameters
- `useGlobalSearchParams(params)` - Assert global parameters

See `__tests__/README.md` for detailed router testing guide.

### Test Configuration Files

- `jest.config.js` - Jest configuration with module mappings
- `jest.setup.js` - Pre-test setup with Expo/RN mocks and router matchers
- `__tests__/setup/test-utils.tsx` - Custom render function
- `__tests__/setup/mocks.ts` - Mock helper functions
- `__tests__/setup/expo-router-matchers.d.ts` - TypeScript definitions for router matchers

## Debugging Tips

- **Font loading issues**: Check `app/_layout.tsx` useFonts - ensure fonts imported
- **Styling not applying**: Verify NativeWind is in Babel config and component accepts `className`
- **Navigation not working**: Check `Stack.Protected` guard condition and auth store state
- **Form validation silent**: Ensure `rules` prop on AppInput and form state is tied via `control`
- **Tests failing**: Check relative import paths in test files and ensure jest.setup.js mocks are present
