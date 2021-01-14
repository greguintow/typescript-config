import type { Config } from '@jest/types'

export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	clearMocks: true
} as Config.InitialOptions
