import { transformAsync } from '@babel/core'
import options from '../lib/babel.config'

const input = `const enum Direction { Left, Right, Down, Up };
`

it('Transforms *.ts', async () => {
    const { code: output } = await transformAsync(input, {
        ...options,
        filename: 'file.ts'
    })
    expect(output).toMatchSnapshot()
})

it('Transforms *.tsx', async () => {
    const { code: output } = await transformAsync(input, {
        ...options,
        filename: 'file.tsx'
    })
    expect(output).toMatchSnapshot()
})
