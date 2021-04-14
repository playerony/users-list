module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
      diagnostics: true,
    },
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@pages': '<rootDir>/src/pages/',
    '@router/(.*)': '<rootDir>/src/router/$1',
    '@router': '<rootDir>/src/router',
  },
  modulePathIgnorePatterns: ['node_modules'],
};
