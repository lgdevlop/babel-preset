import options from '../babel.config'
import { transformAsync } from '@babel/core'

describe('module system test suite', () => {
    test('commonjs', async () => {
        const input = `module.exports = 2`

        const { code: output } = await transformAsync(input, {
            ...options,
            filename: 'file.ts'
        })
        expect(output).toMatchSnapshot()

        const evaluated = eval(output)

        expect(evaluated).toEqual(2)
    })
})
