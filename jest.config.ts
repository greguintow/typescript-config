import type { Config } from '@jest/types'
import tsPaths from 'tsconfig-paths-jest'
import tsConfig from './tsconfig.json'

const moduleNameMapper = tsPaths(tsConfig)

export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	coverageDirectory: './coverage',
	clearMocks: true,
	moduleNameMapper
} as Config.InitialOptions
