/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.(css|less)$': 'jest-transform-stub'
  }
};