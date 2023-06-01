import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  roots: ["<rootDir>/src", "<rootDir>/tests"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/components/**/*",
    "!<rootDir>/src/pages/**/*",
    "!<rootDir>/src/styles/**/*",
    "!<rootDir>/src/context/**/*",
    "!<rootDir>/src/hooks/**/*",
    "!<rootDir>/src/helpers/**/*",
    "!**/*.d.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/tests/(.*)": "<rootDir>/tests/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
