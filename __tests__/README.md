# Testing Architecture Guide for Vestitus 🧪

Welcome! This guide explains how testing works in the Vestitus project in simple, beginner-friendly terms.

## 📚 Table of Contents

1. [What is Testing?](#what-is-testing)
2. [Tools We Use](#tools-we-use)
3. [Project Structure](#project-structure)
4. [How to Write Tests](#how-to-write-tests)
5. [Common Testing Patterns](#common-testing-patterns)
6. [Running Tests](#running-tests)
7. [Debugging Tests](#debugging-tests)
8. [Tips for Newbies](#tips-for-newbies)

---

## What is Testing?

**Testing** is like quality assurance for your code. Instead of manually clicking through the app 100 times to make sure it works, you write automated tests that check:

- Does this component render correctly?
- When I click this button, does the right thing happen?
- Does my form validation work?
- Does user data get saved and loaded properly?

Think of it like a robot that repeatedly tests your app while you sleep! 🤖

### Why Test?

- **Catch bugs early** before they reach production
- **Feel confident** when making changes (tests tell you if you broke something)
- **Save time** (run 100 tests in seconds instead of manually testing for hours)
- **Document behavior** (tests show how code should work)

---

## Tools We Use

### Jest

**What it is:** The main testing framework (the "boss" that runs all tests)

**What it does:**

- Finds and runs all test files
- Checks if tests pass or fail
- Generates coverage reports

### React Native Testing Library

**What it is:** Tools for testing React Native components

**What it does:**

- Renders components in a virtual environment (no real phone needed)
- Lets you simulate user interactions (pressing buttons, typing, etc.)
- Finds elements on screen by text, ID, or placeholder
- Makes assertions (checks if something is true)

### Zustand

**What it is:** State management library with built-in testing support

**What it does:**

- Stores app data (like user login info)
- Tests can read and modify store state easily

---

## Project Structure

```
__tests__/
├── components/          ← Tests for UI components
│   ├── ui/             ← Tests for basic components (Button, Input, etc.)
│   ├── product/        ← Tests for product-related components
│   ├── notification/   ← Tests for notification components
│   └── splash/         ← Tests for splash screen
├── store/              ← Tests for state management
│   └── auth.store.test.ts
└── setup/              ← Configuration and helpers
    ├── test-utils.tsx  ← Custom render function
    ├── mocks.ts        ← Mock data helpers
    ├── fileMock.js     ← Handles image/file imports in tests
    └── svgTransform.js ← Handles SVG imports in tests
```

### Root Test Configuration Files

```
jest.config.js          ← Main Jest configuration
jest.setup.js           ← Global setup (mocks, globals)
```

---

## How to Write Tests

### File Naming Convention

Test files should be named like the component they test with `.test.tsx` or `.spec.ts`:

```
Component: AppButton.tsx
Test File: AppButton.test.tsx

Component: auth.store.ts
Test File: auth.store.test.ts
```

### Basic Test Structure

Here's a simple template:

```typescript
import { render, fireEvent, screen } from "../../setup/test-utils";
import MyComponent from "@/components/MyComponent";

describe("MyComponent", () => {
  // Group of related tests

  it("renders correctly", () => {
    // Setup
    render(<MyComponent title="Hello" />);

    // Test
    const element = screen.getByText("Hello");

    // Assert (check)
    expect(element).toBeDefined();
  });

  it("calls handler when pressed", () => {
    const mockHandler = jest.fn();
    const { getByTestId } = render(
      <MyComponent onPress={mockHandler} testID="my-button" />
    );

    fireEvent.press(getByTestId("my-button"));

    expect(mockHandler).toHaveBeenCalled();
  });
});
```

### Breaking Down the Structure

```typescript
describe("Component Name", () => {
  // describe() = Creates a group of related tests

  it("should do something", () => {
    // it() = One individual test
    // The description tells you what this test checks
  });

  beforeEach(() => {
    // Runs before EACH test (cleanup/setup)
  });

  afterEach(() => {
    // Runs after EACH test (cleanup)
  });
});
```

---

## Common Testing Patterns

### 1. Testing Component Rendering

**Goal:** Make sure a component shows up on screen

```typescript
it("renders with text", () => {
  render(<AppButton label="Click Me" onPress={jest.fn()} />);

  // Method 1: Find by text
  expect(screen.getByText("Click Me")).toBeDefined();

  // Method 2: Find by testID
  expect(screen.getByTestId("my-button")).toBeDefined();

  // Method 3: Find by placeholder (for inputs)
  expect(screen.getByPlaceholderText("Enter text")).toBeDefined();
});
```

### 2. Testing User Interactions

**Goal:** Simulate a user pressing a button or typing

```typescript
it("calls handler when pressed", () => {
  const mockPress = jest.fn(); // Create a fake function to track calls

  const { getByTestId } = render(
    <AppButton label="Press" onPress={mockPress} testID="btn" />
  );

  // Simulate pressing the button
  fireEvent.press(getByTestId("btn"));

  // Check if handler was called
  expect(mockPress).toHaveBeenCalled();
  expect(mockPress).toHaveBeenCalledTimes(1);
});
```

### 3. Testing Forms

**Goal:** Make sure form inputs work correctly

```typescript
it("validates email input", () => {
  const { getByPlaceholderText } = render(
    <AppInputWrapper
      name="email"
      placeholder="Email"
      rules={{ pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
    />
  );

  const input = getByPlaceholderText("Email");

  // Type invalid email
  fireEvent.changeText(input, "notanemail");

  // Type valid email
  fireEvent.changeText(input, "valid@email.com");
  expect(input.props.value).toBe("valid@email.com");
});
```

### 4. Testing State Management (Zustand)

**Goal:** Make sure store actions work correctly

```typescript
import { useAuthStore } from "@/store";
import { renderHook, act } from "@testing-library/react-native";

describe("useAuthStore", () => {
  it("logs in user correctly", () => {
    const { result } = renderHook(() => useAuthStore());

    const mockUser = {
      fullName: "John Doe",
      email: "john@example.com",
      password: "pass123",
    };

    // Update state inside act()
    act(() => {
      result.current.login(mockUser);
    });

    // Check state changed
    expect(result.current.user).toEqual(mockUser);
  });

  it("logs out user", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
  });
});
```

### 5. Testing Multiple States/Props

**Goal:** Test component with different props

```typescript
it("renders with different sizes", () => {
  const sizes = ["sm", "md", "lg"];

  sizes.forEach((size) => {
    const { getByText } = render(
      <AppButton size={size} label={`${size} Button`} onPress={jest.fn()} />
    );

    expect(getByText(`${size} Button`)).toBeDefined();
  });
});
```

---

## Setup & Mocking Explained

### What is Mocking?

**Mocking** = Creating fake versions of things to avoid real-world side effects

**Example:** We don't want tests to actually:

- Save data to a real phone's storage (AsyncStorage)
- Load real fonts from disk (expo-font)
- Navigate to real screens (expo-router)

So we create fake (mocked) versions that just pretend to do these things.

### Key Mocks in jest.setup.js

```javascript
// Mock AsyncStorage (data storage)
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  // etc...
}));
// Why? Tests shouldn't persist data to your device

// Mock expo-font (font loading)
jest.mock("expo-font", () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
}));
// Why? Tests run without actually loading fonts from disk

// Mock expo-router (navigation)
jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    // etc...
  })),
}));
// Why? Tests don't need real navigation between screens
```

### Using Mock Data

In `setup/mocks.ts`, helpers create fake data:

```typescript
// Create a fake router
const mockRouter = createMockRouter();
// Returns: { push: jest.fn(), replace: jest.fn(), ... }

// Create a fake navigation
const mockNav = createMockNavigation();
// Returns: { navigate: jest.fn(), setParams: jest.fn(), ... }
```

---

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

Keep tests running and re-run when you make changes:

```bash
npm test -- --watch
```

### Run Tests for One File

```bash
npm test -- AppButton
```

### Run Tests with Coverage Report

See what percentage of code is covered by tests:

```bash
npm test -- --coverage
```

This shows you which lines aren't tested. High coverage = more confidence!

### Run Tests in CI/CD

```bash
npm test -- --ci --coverage
```

---

## Test Queries: How to Find Elements

Testing Library provides several ways to find elements:

### 1. By Text (Most User-Focused)

```typescript
screen.getByText("Click Me"); // Find by exact text
screen.getByText(/click/i); // Find by regex (case-insensitive)
screen.queryByText("Not There"); // Returns null if not found
screen.getAllByText("Multiple"); // Find multiple elements
```

**Best for:** Finding text content users see

### 2. By TestID (Most Specific)

```typescript
screen.getByTestId("submit-button");
```

Add to component:

```tsx
<TouchableOpacity testID="submit-button" onPress={handlePress}>
  <Text>Submit</Text>
</TouchableOpacity>
```

**Best for:** Complex components or when text isn't enough

### 3. By Placeholder (For Inputs)

```typescript
screen.getByPlaceholderText("Enter email");
```

**Best for:** Text inputs

### 4. By Label (For Inputs)

```typescript
screen.getByLabelText("Email Address");
```

**Best for:** Accessible form fields

---

## Debugging Tests

### Print to Console

```typescript
it("debug test", () => {
  const { debug } = render(<MyComponent />);

  // Print the component tree to console
  debug();

  // Or print specific element
  const element = screen.getByText("Hello");
  debug(element);
});
```

### View Raw HTML/JSX Structure

```typescript
it("debug test", () => {
  const { getByText } = render(<MyComponent />);
  const element = getByText("Hello");

  // See element properties
  console.log(element.props);
});
```

### Run Single Test

Use `.only` to run just one test while debugging:

```typescript
it.only("debug this test", () => {
  // Only this test runs
});
```

Remove `.only` before committing!

### Run with Verbose Output

```bash
npm test -- --verbose
```

---

## Tips for Newbies

### ✅ DO's

- **Test behavior, not implementation** - Focus on what users see/do, not how it works internally
- **Write descriptive test names** - `it("shows error when email is invalid")` not `it("works")`
- **Test one thing per test** - Each test should check one specific behavior
- **Use semantic queries** - Prefer `getByText` over `getByTestId` when possible
- **Clean up after tests** - Use `beforeEach`/`afterEach` to reset state
- **Test edge cases** - Empty input, very long text, special characters, etc.

### ❌ DON'Ts

- **Don't test implementation details** - Don't test that a variable exists; test that it affects the UI
- **Don't create massive tests** - If a test is hard to read, break it into smaller tests
- **Don't forget `act()`** - Wrap state updates in `act()` to avoid warnings
- **Don't mock everything** - Mock only external dependencies, not your own code
- **Don't ignore test failures** - Fix them immediately, not later!

### Naming Convention

```typescript
// ❌ BAD
it("works", () => { ... })
it("test 1", () => { ... })

// ✅ GOOD
it("renders product title when data is loaded", () => { ... })
it("shows error message when email is invalid", () => { ... })
it("calls onPress callback when button is clicked", () => { ... })
```

### Organization Example

```typescript
describe("LoginScreen", () => {
  describe("rendering", () => {
    it("shows email and password fields", () => { ... });
    it("shows login button", () => { ... });
  });

  describe("validation", () => {
    it("shows error for invalid email", () => { ... });
    it("shows error for short password", () => { ... });
  });

  describe("interactions", () => {
    it("logs in when valid credentials provided", () => { ... });
    it("calls onLogin callback with user data", () => { ... });
  });
});
```

---

## Common Assertions (Checks)

Here are the most common ways to check if something is true:

```typescript
// Existence
expect(element).toBeDefined();
expect(element).toBeTruthy();
expect(element).not.toBeNull();

// Values
expect(value).toBe(5); // Exact match
expect(value).toEqual({ name: "John" }); // Deep comparison
expect(text).toContain("hello"); // String contains
expect(array).toHaveLength(3); // Array length

// Functions
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith("arg1");
expect(mockFn).toHaveBeenCalledTimes(2);

// Visibility
expect(element).toBeVisible();
expect(element).not.toBeVisible();

// Disabled
expect(button).toBeDisabled();
expect(button).not.toBeDisabled();
```

---

## Quick Start: Writing Your First Test

### Step 1: Create Test File

Create `__tests__/components/ui/MyButton.test.tsx`

### Step 2: Import Testing Tools

```typescript
import { render, screen } from "../../setup/test-utils";
import MyButton from "@/components/ui/MyButton";
```

### Step 3: Write Describe Block

```typescript
describe("MyButton", () => {
  // Tests go here
});
```

### Step 4: Write Your First Test

```typescript
it("renders with label text", () => {
  render(<MyButton label="Press Me" onPress={jest.fn()} />);
  expect(screen.getByText("Press Me")).toBeDefined();
});
```

### Step 5: Run It!

```bash
npm test -- MyButton
```

Congrats! You wrote your first test! 🎉

---

## Resources & Next Steps

- **Jest Documentation:** https://jestjs.io/docs/getting-started
- **React Native Testing Library:** https://callstack.github.io/react-native-testing-library/
- **Look at existing tests** in this project for examples
- **Ask questions** - Testing is a skill that improves with practice

---

Happy testing! 🚀
