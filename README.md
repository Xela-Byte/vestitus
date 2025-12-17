# ✨ Vestitus

<div align="center">
  <img src="assets/images/logo.png" alt="Vestitus Logo" width="150">
  
  [![Build and Test](https://github.com/Xela-Byte/vestitus/actions/workflows/test.yml/badge.svg)](https://github.com/Xela-Byte/vestitus/actions/workflows/test.yml)
  ![GitHub release (latest by tag)](https://img.shields.io/github/v/release/Xela-Byte/vestitus?label=Release&logo=github)
  [![Download APK](https://img.shields.io/badge/Download-APK-brightgreen?style=flat&logo=android)](https://github.com/Xela-Byte/vestitus/releases/download/android_release/app-release.apk)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![GitHub issues](https://img.shields.io/github/issues/Xela-Byte/vestitus)](https://github.com/Xela-Byte/vestitus/issues)
  
  A modern, feature-rich e-commerce mobile app built with React Native and Expo
</div>

---

## What is Vestitus?

**Vestitus** is a full-featured e-commerce mobile application built with **Expo** and **React Native**. It provides a seamless shopping experience across iOS, Android, and web platforms with a modern, intuitive interface.

The app is built with:

- ⚛️ **React Native** - Cross-platform mobile development
- 🚀 **Expo** - Simplified React Native development
- 📘 **TypeScript** - Type-safe development
- 🎨 **NativeWind** - Tailwind CSS for React Native
- 🏪 **Zustand** - Lightweight state management
- 📋 **React Hook Form** - Powerful form handling

---

## Why Does Vestitus Exist?

Modern mobile commerce requires apps that are:

✅ **Cross-platform** - Reach iOS, Android, and web users from a single codebase  
✅ **Feature-rich** - Provide comprehensive shopping and order management  
✅ **Performant** - Fast, responsive, and lightweight  
✅ **Maintainable** - Built with TypeScript, tested code, and clear architecture  
✅ **Accessible** - Inclusive design with proper accessibility support

Vestitus solves these challenges by providing a production-ready e-commerce template with modern best practices, extensive testing, and clear documentation for developers.

---

## Who Is It For?

Vestitus is designed for:

👨‍💼 **Businesses & Startups**

- Launch an e-commerce app quickly without building from scratch
- Customize and deploy to app stores and web

👨‍💻 **Developers & Teams**

- Learn modern React Native development patterns
- Use as a template for your own e-commerce app
- Reference for Expo Router, Zustand, NativeWind integration

🎓 **Students & Learners**

- Study production-grade React Native code
- Understand cross-platform mobile development
- Learn testing, state management, and responsive design

---

## How Do I Install It?

### Prerequisites

- **Node.js** 18+ and npm (or yarn)
- **Expo CLI** (installed via npm)
- **iOS/Android emulator** or **Expo Go** app for testing
- **macOS** with Xcode (for iOS development)
- **Android Studio** (for Android development)

### Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Xela-Byte/vestitus.git
   cd vestitus
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Choose your platform:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser
   - Press `j` for Expo Go on your phone (scan QR code)

### Detailed Setup for Each Platform

#### iOS Development

```bash
npm run ios              # Build and run on iOS simulator
npm install             # Install native dependencies
cd ios && pod install   # If pod dependencies fail
```

#### Android Development

```bash
npm run android          # Build and run on Android emulator
```

#### Web Development

```bash
npm run web              # Run in web browser
```

### Build for Production

#### Android APK

```bash
expo build:android --type apk
```

#### iOS IPA

```bash
expo build:ios
```

#### Web Build

```bash
npm run web -- --build
```

---

## How Do I Use It?

### Project Structure

```
vestitus/
├── app/                    # Expo Router routes (file-based routing)
│   ├── (auth)/            # Authentication screens
│   ├── (app)/             # Protected app screens
│   ├── (tabs)/            # Tab navigation
│   └── _layout.tsx        # Root navigation setup
├── components/            # Reusable UI components
│   ├── ui/               # Base components (Button, Input, Text)
│   ├── product/          # Product-related components
│   ├── cart/             # Shopping cart components
│   ├── order/            # Order management components
│   └── ...
├── store/                # Zustand state management
├── styles/               # Global styles and utilities
├── types/                # TypeScript type definitions
├── utils/                # Helper functions and utilities
└── __tests__/            # Test files and setup
```

### Core Features

#### 1. **Shopping**

- Browse products by category
- Search with voice input or text
- View detailed product information
- Check reviews and ratings
- Save favorite items

#### 2. **Cart & Checkout**

- Add/remove items from cart
- Adjust quantities
- Real-time total calculation
- Smooth checkout flow

#### 3. **Orders**

- Track order status in real-time
- View order history
- Review order details
- Leave product reviews

#### 4. **User Management**

- Secure authentication with email/password
- Email verification
- Password recovery
- Profile management
- Address management with map picker

#### 5. **Notifications**

- Real-time push notifications
- Order update alerts
- Promotional notifications

### Development Workflow

#### Running Tests

```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm test -- --coverage     # Coverage report
```

#### Code Quality

```bash
npm run lint               # Check for linting issues
npm run lint -- --fix      # Auto-fix issues
npm run type-check         # TypeScript type checking
```

#### Git Workflow

```bash
git add .
git commit -m "your message"
git push                   # Automatically runs: type-check, tests, lint
```

### Key Patterns & Architecture

#### File-Based Routing

Routes are defined by folder structure in `/app`:

- `app/(auth)/login.tsx` → `/(auth)/login`
- `app/(app)/product/[id].tsx` → `/(app)/product/:id`
- Protected routes automatically render based on auth state

#### State Management with Zustand

```typescript
import { useAuthStore } from "@/store";

// In components
const user = useAuthStore((state) => state.user);
const logout = useAuthStore((state) => state.logout);
```

#### Form Handling

```typescript
import { useForm, Controller } from 'react-hook-form';
import { AppInput } from '@/components/ui';

const { control, handleSubmit } = useForm({ defaultValues: {...} });
<AppInput
  control={control}
  name="email"
  rules={{ required: "Email required", pattern: EMAIL_REGEX }}
/>
```

#### Styling with NativeWind

```typescript
// Use Tailwind classes
<View className="flex-1 bg-white px-4 py-6">
  <Text className="font-outfit-bold text-lg text-primary">Header</Text>
</View>
```

### Learning Resources

- **Routing**: See [app/\_layout.tsx](app/_layout.tsx) for navigation setup
- **State**: See [store/index.ts](store/index.ts) for auth management
- **Components**: Check [components/ui/](components/ui/) for base UI patterns
- **Forms**: Review [app/(auth)/login.tsx](app/%28auth%29/login.tsx) for form examples
- **Testing**: Read [**tests**/README.md](__tests__/README.md) for test patterns

---

## How Do I Contribute?

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, your help makes Vestitus better.

### Getting Started

1. **Fork the repository**

   ```bash
   # On GitHub, click "Fork" button
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/vestitus.git
   cd vestitus
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

### Development Guidelines

#### Code Quality

- ✅ Write TypeScript with proper types
- ✅ Follow existing code style and patterns
- ✅ Write tests for new features
- ✅ Keep components small and focused
- ✅ Use NativeWind for styling (not inline styles)

#### Testing Requirements

Before committing, ensure all tests pass:

```bash
npm run type-check    # TypeScript validation
npm test              # Run test suite
npm run lint          # Linting check
```

These checks automatically run before push via Husky hooks.

#### Commit Message Convention

```bash
# Use clear, descriptive commit messages
git commit -m "feat: add product filtering"
git commit -m "fix: cart calculation bug"
git commit -m "docs: update README"
git commit -m "refactor: optimize search component"
```

Use prefixes:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code improvement
- `test:` - Test additions/updates
- `chore:` - Build/dependency updates

### Adding New Features

#### Adding a New Screen

1. Create file: `app/(app)/your-screen.tsx`
2. Use existing layout components
3. Add tests in `__tests__/`
4. Update navigation if needed

#### Adding a New Component

1. Create file in appropriate folder: `components/feature/YourComponent.tsx`
2. Write TypeScript props interface
3. Add component tests
4. Export from barrel file if needed

#### Adding State

1. Create store logic in `store/your-store.ts`
2. Export from `store/index.ts`
3. Add tests in `__tests__/store/`
4. Use with hook: `const state = useYourStore((s) => s.property)`

### Submitting Changes

1. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

2. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   - Go to GitHub and click "Compare & pull request"
   - Fill in the PR description with:
     - What changes you made
     - Why you made them
     - How to test the changes
   - Link any related issues

### PR Review Process

- ✅ One maintainer review required
- ✅ All CI checks must pass (tests, lint, type-check)
- ✅ Code follows project patterns and conventions
- ✅ Tests are included for new features
- ✅ Documentation is updated if needed

### Reporting Issues

Found a bug? Have a feature request? Create an issue:

1. Go to [GitHub Issues](https://github.com/Xela-Byte/vestitus/issues)
2. Click "New Issue"
3. Choose appropriate template
4. Fill in details with:
   - Clear description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

### Getting Help

- 📖 Check existing documentation in [docs/](https://github.com/Xela-Byte/vestitus)
- 🔍 Search closed issues for solutions
- 💬 Ask in issue discussions
- 📚 Review [**tests**/README.md](__tests__/README.md) for examples

---

## Tech Stack

| Layer         | Technology           | Purpose                   |
| ------------- | -------------------- | ------------------------- |
| **Runtime**   | React Native 0.81    | Cross-platform framework  |
| **Build**     | Expo 54              | Build and deployment      |
| **Routing**   | Expo Router 6        | File-based navigation     |
| **State**     | Zustand              | State management          |
| **Styling**   | NativeWind 4.2       | Tailwind for React Native |
| **Forms**     | React Hook Form 7.68 | Form state & validation   |
| **Language**  | TypeScript 5         | Type safety               |
| **Testing**   | Jest + RTL           | Unit and component tests  |
| **Linting**   | ESLint (Expo config) | Code quality              |
| **Git Hooks** | Husky                | Pre-push validation       |

---

## Project Statistics

- 📁 **Components**: 30+ reusable UI components
- 📄 **Screens**: 20+ app screens
- 🧪 **Test Coverage**: 85%+ with 150+ tests
- 📦 **Dependencies**: 50+ carefully selected packages
- 🎨 **Supported Platforms**: iOS, Android, Web

---

## License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## Support & Community

- 🐛 [Report Issues](https://github.com/Xela-Byte/vestitus/issues)
- ⭐ [Star on GitHub](https://github.com/Xela-Byte/vestitus)
- 📢 Follow for updates on releases

---

## Acknowledgments

Built with ❤️ by the development community. Special thanks to:

- Expo team for an amazing development framework
- React Native community
- NativeWind creators
- All contributors and testers

## ✨ Features

- 🛍️ Browse and shop products with detailed views and images
- 🔍 Advanced search with voice input and smart filters
- 🎤 Speech-to-text search for hands-free product discovery
- 💳 Shopping cart management with easy checkout
- ❤️ Save favorite products for quick access later
- 📍 Address management with interactive map picker for delivery
- 📦 Order tracking with real-time status updates
- ⭐ Product reviews and ratings system
- 🔔 Push notifications for order updates and promotions
- 🔐 Secure authentication with email verification and password recovery
- 👤 User profile management
- 📱 Works on iOS, Android, and Web
- 🚀 Onboarding experience for new users
- 🎨 Beautiful UI with custom fonts (Outfit & SF Pro Display)
- 💾 Persistent cart and user data with offline support

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

### ESLint & Expo Lint Rules

The project uses **ESLint with Expo's recommended configuration** (`eslint-config-expo`) to enforce code quality standards for React Native development.

**Key Expo Lint Rules:**

- **React Best Practices**: Enforces proper Hook usage, component patterns, and React Native conventions
- **No Unused Imports**: Ensures clean imports in all files
- **Accessibility**: Requires proper accessibility labels and semantic HTML/React Native usage
- **Performance**: Flags potential performance issues like missing dependency arrays in useEffect/useCallback
- **Platform-Specific Code**: Warns about using web-only APIs in native components
- **Async/Await Patterns**: Enforces proper error handling in async code

**Running linting:**

```bash
npm run lint         # Check for linting issues
npm run lint -- --fix  # Auto-fix fixable issues
```

The ESLint configuration is defined in `eslint.config.js` and uses the Expo flat config format. Rules are automatically enforced as part of the pre-push Husky hook to maintain code quality across the team.

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
