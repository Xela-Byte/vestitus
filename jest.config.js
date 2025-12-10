module.exports = {
  preset: "jest-expo",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/__tests__/setup/fileMock.js",
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
    "\\.svg$": "<rootDir>/__tests__/setup/svgTransform.js",
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
