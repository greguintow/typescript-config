import { sayHello } from './index'

describe('Hello Function', () => {
	it('should return Hello, World!', () => {
		expect(sayHello()).toBe('Hello, World!')
	})
})
