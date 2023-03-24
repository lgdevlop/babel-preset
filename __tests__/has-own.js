import options from '../babel.config'
import { transformAsync } from '@babel/core'

describe('Object.hasOwn test suite', () => {
    test('Should add polyfills import for Object.hasOwn built-in usage', async () => {
        const input = `Object.hasOwn({abc: 'abc'}, 'abc')`

        const { code: output } = await transformAsync(input, {
            ...options,
            filename: 'file.ts'
        })
        expect(output).toMatchSnapshot()

        const evaluated = eval(output)

        expect(evaluated).toEqual(true)
    })
})
