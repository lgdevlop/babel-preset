/* eslint-disable no-eval */
/* eslint-disable no-new-func */
import { transformAsync } from '@babel/core'
import babelOptions from '../babel.config'
import React from 'react'

const options = {
    filename: 'file.tsx',
    ...babelOptions
}
describe('react-display-name test suite', () => {
    it('Transforms class components', async () => {
        const classComponentInput = `
            import React from 'react'

            class MyClassComponent extends React.Component {
                render() {
                    return <div>1</div>
                }
            }
            export default MyClassComponent
        `

        const { code: classComponentOutput } = await transformAsync(classComponentInput, {
            ...options,
            sourceType: 'module'
        })

        expect(classComponentOutput).toMatchSnapshot()
        const MyComponent = eval(classComponentOutput)
        const element = <MyComponent />

        expect(element.type.displayName).toBe('MyClassComponent')
    })

    it('Transforms function components', async () => {
        const classComponentInput = `
            import React from 'react'

            function MyFunctionComponent () {
                return <div>1</div>
            }
            export default MyFunctionComponent
        `

        const { code: classComponentOutput } = await transformAsync(classComponentInput, {
            ...options,
            sourceType: 'module'
        })

        expect(classComponentOutput).toMatchSnapshot()
        const MyComponent = eval(classComponentOutput)
        const element = <MyComponent />

        expect(element.type.displayName).toBe('MyFunctionComponent')
    })

    it('Transforms function expression components', async () => {
        const classComponentInput = `
            import React from 'react'

            const MyFunctionExpressionComponent = () => {
                return <div>1</div>
            }
            export default MyFunctionExpressionComponent
        `

        const { code: classComponentOutput } = await transformAsync(classComponentInput, {
            ...options,
            sourceType: 'module'
        })

        expect(classComponentOutput).toMatchSnapshot()
        const MyComponent = eval(classComponentOutput)
        const element = <MyComponent />

        expect(element.type.displayName).toBe('MyFunctionExpressionComponent')
    })
})
