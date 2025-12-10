/**
 * Mock store creator for testing Zustand stores
 * Allows you to create isolated store instances for each test
 */
export const createTestStore = <T extends object>(initialState: T) => {
  return {
    getState: jest.fn(() => initialState),
    setState: jest.fn(),
    subscribe: jest.fn(),
    destroy: jest.fn(),
    ...initialState,
  };
};

/**
 * Helper to mock router navigation
 */
export const createMockRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  navigate: jest.fn(),
  canGoBack: jest.fn(() => true),
});

/**
 * Helper to mock navigation params
 */
export const createMockNavigation = () => ({
  navigate: jest.fn(),
  setParams: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(() => true),
  addListener: jest.fn(() => jest.fn()),
});
