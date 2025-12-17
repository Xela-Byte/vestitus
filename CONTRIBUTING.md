# Contributing to Vestitus

Thank you for your interest in contributing to Vestitus! We're excited to have you join our community. This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Code Style Guide](#code-style-guide)
- [Commit Messages](#commit-messages)
- [Documentation](#documentation)
- [Questions & Support](#questions--support)

---

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to understand our expectations for respectful and inclusive behavior.

---

## Getting Started

### Prerequisites

Before you start, make sure you have:

- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **npm** or **yarn** - Package managers
- **Git** - Version control
- **Expo CLI** - Install with `npm install -g expo-cli`
- **Code Editor** - VS Code recommended
- **iOS/Android Development Environment**:
  - **macOS + Xcode** for iOS
  - **Android Studio** for Android

### Fork & Clone

1. **Fork the repository** on GitHub

   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork** locally

   ```bash
   git clone https://github.com/YOUR-USERNAME/vestitus.git
   cd vestitus
   ```

3. **Add upstream remote** to stay in sync
   ```bash
   git remote add upstream https://github.com/Xela-Byte/vestitus.git
   ```

---

## Development Setup

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Verify Installation

Ensure the development environment is properly set up:

```bash
npm run type-check    # TypeScript validation
npm test              # Run tests
npm run lint          # Check code quality
```

### 3. Start Development Server

```bash
npm start
```

Choose your platform:

- Press `i` for iOS
- Press `a` for Android
- Press `w` for Web
- Press `j` for Expo Go

---

## Making Changes

### 1. Create a Feature Branch

Always create a new branch for your changes:

```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create your feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch naming conventions:**

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code improvements
- `test/description` - Test additions

### 2. Make Your Changes

Follow the patterns and conventions in the codebase:

- **Components**: Keep them small and focused
- **State**: Use Zustand for global state
- **Styling**: Use NativeWind classes
- **Forms**: Use `react-hook-form` with `AppInput`
- **Types**: Always use TypeScript interfaces
- **Comments**: Add comments for complex logic

### 3. Update Related Files

If you're adding a feature, remember to update:

- Related components or stores
- Type definitions if applicable
- Tests for your changes
- Documentation (README, inline comments)
- Changelog if major change

### 4. Keep Your Branch Updated

Before submitting a PR, sync with upstream:

```bash
git fetch upstream
git rebase upstream/main
```

If there are conflicts, resolve them and continue:

```bash
# After resolving conflicts
git add .
git rebase --continue
```

---

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode (re-runs on changes)
npm test -- --watch

# Coverage report
npm test -- --coverage

# Run specific test file
npm test -- components/ui/AppButton.test.tsx
```

### Writing Tests

Place tests in `__tests__/` directory matching the source structure:

```
source:  components/ui/AppButton.tsx
test:    __tests__/components/ui/AppButton.test.tsx
```

**Example component test:**

```typescript
import { render, screen } from "@testing-library/react-native";
import { AppButton } from "@/components/ui/AppButton";

describe("AppButton", () => {
  it("renders with label", () => {
    render(<AppButton label="Click me" />);
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const handlePress = jest.fn();
    render(<AppButton label="Click" onPress={handlePress} />);
    screen.getByRole("button").props.onPress();
    expect(handlePress).toHaveBeenCalled();
  });
});
```

**Example store test:**

```typescript
import { renderHook, act } from "@testing-library/react-native";
import { useAuthStore } from "@/store";

describe("useAuthStore", () => {
  beforeEach(() => {
    // Reset store state
    useAuthStore.setState({ user: null });
  });

  it("sets user on login", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setUser({ id: "123", email: "test@example.com" });
    });

    expect(result.current.user).toEqual({
      id: "123",
      email: "test@example.com",
    });
  });
});
```

### Test Requirements

- ✅ Minimum 80% line coverage for new code
- ✅ All new features must have tests
- ✅ Bug fixes should include a test that reproduces the issue
- ✅ Edge cases should be tested

---

## Submitting Pull Requests

### 1. Before You Submit

Ensure your changes pass all checks:

```bash
npm run type-check    # TypeScript
npm test              # Tests
npm run lint          # Linting
```

Fix any issues before committing.

### 2. Commit Your Changes

Write clear, descriptive commits:

```bash
git add .
git commit -m "feat: add product filtering feature"
```

See [Commit Messages](#commit-messages) section for guidelines.

### 3. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 4. Open a Pull Request

Go to GitHub and create a PR with:

**Title:** Clear, concise description

```
feat: add voice search for products
fix: resolve cart calculation bug
```

**Description:** Include:

- **What**: What changes did you make?
- **Why**: Why are these changes needed?
- **How**: How does it work? (if complex)
- **Testing**: How to test the changes?
- **Closes**: Links to related issues (#123)

**Example PR description:**

```markdown
## Description

Added voice search feature using expo-speech-recognition to allow users
to search for products hands-free.

## Changes

- Added SpeechToText component in components/speech/
- Integrated with SearchInput component
- Added voice permission handling
- Updated SearchStore for voice queries

## Testing

1. Navigate to search screen
2. Tap microphone icon
3. Speak product name
4. Verify search results appear

## Screenshots

[Add screenshots if UI changes]

Closes #456
```

### 5. PR Review Process

- **CI Checks**: Ensure all automated checks pass
- **Code Review**: One maintainer reviews your code
- **Revisions**: Address feedback and push updates
- **Merge**: Your changes are merged when approved

---

## Code Style Guide

### TypeScript

- **Always** use TypeScript types
- **Prefer** interfaces over types
- **Use** explicit return types on functions
- **Avoid** `any` type

```typescript
// ✅ Good
interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

function MyComponent({ title, onPress, disabled }: Props): JSX.Element {
  return <></>;
}

// ❌ Avoid
function MyComponent(props: any) {
  return <></>;
}
```

### React Native Components

- **Functional** components only
- **Use** `React.FC` or explicit return type
- **Destructure** props in parameters
- **Use** proper prop spreading

```typescript
// ✅ Good
import { View, Text, ViewProps } from "react-native";

interface Props extends ViewProps {
  label: string;
}

export function MyComponent({ label, ...rest }: Props): JSX.Element {
  return (
    <View {...rest}>
      <Text>{label}</Text>
    </View>
  );
}

// ❌ Avoid
export default function MyComponent(props) {
  return <View {...props} />;
}
```

### Styling

- **Always** use NativeWind className first
- **Avoid** inline styles unless necessary
- **Use** custom theme colors from config
- **Prefer** utility classes over StyleSheet

```typescript
// ✅ Good
<View className="flex-1 bg-white px-4 py-6">
  <Text className="font-outfit-bold text-lg text-primary">Title</Text>
</View>

// ⚠️ Acceptable when necessary
<View style={{ paddingHorizontal: 8 }} className="bg-white">
  <Text>Content</Text>
</View>

// ❌ Avoid
<View style={{ padding: 16, backgroundColor: "white" }}>
  <Text>Content</Text>
</View>
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Functions**: camelCase (e.g., `handleAddToCart()`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS = 100`)
- **Files**: Match component name (e.g., `ProductCard.tsx`)
- **CSS Classes**: kebab-case (e.g., `className="text-primary"`)

### Imports

- **Organize** imports: React/RN → Third-party → Local
- **Use** path aliases: `@/` instead of relative paths
- **Group** related imports

```typescript
// ✅ Good
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAuthStore } from "@/store";
import { AppButton } from "@/components/ui";
import { formatPrice } from "@/utils/helpers";

// ❌ Avoid
import { formatPrice } from "../../../utils/helpers";
import { AppButton } from "../../../components/ui/AppButton";
import { View } from "react-native";
import { useAuthStore } from "@/store";
```

---

## Commit Messages

Use clear, descriptive commit messages following the format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (formatting, semicolons, etc.)
- `refactor` - Code refactoring
- `test` - Test additions/modifications
- `chore` - Build/tooling/dependency updates

### Scope (Optional)

Component or area affected:

- `cart` - Shopping cart
- `product` - Product features
- `auth` - Authentication
- `ui` - UI components
- etc.

### Subject

- Imperative mood ("add", not "added" or "adds")
- Lowercase first letter
- No period at end
- Max 50 characters

### Body (Optional)

- Explain **what** and **why**, not how
- Wrap at 72 characters
- Separate from subject with blank line

### Footer (Optional)

Link to issues:

```
Closes #123
Fixes #456
```

### Examples

```bash
# Simple fix
git commit -m "fix: resolve cart calculation for discounts"

# Feature with body
git commit -m "feat(search): add voice input for product search

- Added SpeechToText component
- Integrated expo-speech-recognition
- Added audio permission handling"

# Bug fix that closes issue
git commit -m "fix(auth): prevent duplicate login attempts

Closes #789"
```

---

## Documentation

### Updating README

If your changes affect usage or installation:

1. Update relevant section in [README.md](README.md)
2. Add code examples if applicable
3. Update table of contents if adding new section

### Code Comments

Add comments for:

- **Complex logic** that isn't self-explanatory
- **Why** decisions were made (not what)
- **TODO** items for future improvements

```typescript
// ✅ Good - explains why
// We debounce search to reduce API calls while user is still typing
const debouncedSearch = useCallback(
  debounce((query: string) => searchProducts(query), 300),
  []
);

// ✅ Good - explains non-obvious behavior
// Sort by date descending, but keep pending orders at top
const sortedOrders = orders.sort((a, b) => {
  if (a.status === "pending") return -1;
  if (b.status === "pending") return 1;
  return new Date(b.date) - new Date(a.date);
});

// ❌ Unnecessary
// Add one to x
const y = x + 1;
```

### JSDoc Comments (for public APIs)

```typescript
/**
 * Formats a price value with currency symbol
 * @param price - The price in cents
 * @param currency - ISO 4217 currency code (default: USD)
 * @returns Formatted price string (e.g., "$19.99")
 */
export function formatPrice(price: number, currency: string = "USD"): string {
  // implementation
}
```

---

## Questions & Support

### Getting Help

- 📖 **Documentation**: Check [README.md](README.md) and [**tests**/README.md](__tests__/README.md)
- 🔍 **Search Issues**: Look for similar issues in [GitHub Issues](https://github.com/Xela-Byte/vestitus/issues)
- 💬 **Ask in Issue**: Comment on relevant issues
- 📧 **Contact Maintainers**: Reach out to project leads

### Before Creating an Issue

1. Read documentation and existing issues
2. Try to reproduce the problem
3. Search for similar issues
4. Check if it's a configuration issue

### Creating an Issue

Include:

- Clear title
- Detailed description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots/video if applicable
- Environment details (OS, Node version, etc.)

---

## Contributor Recognition

We appreciate all contributions! Contributors will be:

- ✅ Added to [CONTRIBUTORS.md](CONTRIBUTORS.md)
- ✅ Mentioned in release notes for significant changes
- ✅ Recognized in our community

---

## License

By contributing to Vestitus, you agree that your contributions will be licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Questions?

Don't hesitate to ask! Open an issue with the label `question` or reach out to maintainers.

Happy coding! 🚀
