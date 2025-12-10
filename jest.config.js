module.exports = {
  preset: "jest-expo",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "babel-jest",
      {
        presets: [
          ["babel-preset-expo", { jsxImportSource: "nativewind" }],
          "@babel/preset-typescript",
        ],
      },
    ],
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/coverage/**",
    "!**/.expo/**",
    "!**/*.d.ts",
    "!**/babel.config.js",
    "!**/jest.config.js",
    "!**/metro.config.js",
    "!app/_layout.tsx",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/.expo/", "/coverage/"],
  testPathIgnorePatterns: ["/node_modules/", "/.expo/", "/dist/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx|js)",
    "**/*.(test|spec).(ts|tsx|js)",
  ],
};
