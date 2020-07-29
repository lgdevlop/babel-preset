import options from '../babel.config'
import { transformAsync } from '@babel/core'

describe('features', () => {
    test('optional chaining', async () => {
        const input = `const A = null; const B = A?.toFixed(2) || 3; B;`

        const { code: output } = await transformAsync(input, {
            ...options,
            filename: 'file.ts'
        })
        expect(output).toMatchSnapshot()

        const evaluated = eval(output)

        expect(evaluated).toEqual(3)
    })
    it('null coalesce', async () => {
        const input = `const A = null; A ?? 2`

        const { code: output } = await transformAsync(input, {
            ...options,
            filename: 'file.ts'
        })
        expect(output).toMatchSnapshot()

        const evaluated = eval(output)

        expect(evaluated).toEqual(2)
    })
    it('private methods', async () => {
        const input = `class B {

            #b () {
                return 42
            }

            getB () {
                return 42
            }

        }
        
        export default B
        `

        const { code: output } = await transformAsync(input, {
            ...options,
            filename: 'file.ts'
        })
        expect(output).toMatchSnapshot()

        const B = eval(output)
        const b = new B()

        expect(b.getB()).toEqual(42)
    })
})
