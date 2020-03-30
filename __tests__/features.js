import { transformAsync } from '@babel/core'
import preset from '../src'

const options = {
    presets: [preset]
}

describe('optional chaining', () => {
    it('should transform properly', async () => {
        const input = `const A = null; const B = A?.toFixed(2) || 3; B;`

        const { code: output } = await transformAsync(input, {
            ...options,
            filename: 'file.ts'
        })
        expect(output).toMatchSnapshot()

        const evaluated = eval(output)

        expect(evaluated).toEqual(3)
    })
})
