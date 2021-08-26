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
            function factory (React) {
                return class MyClassComponent extends React.Component {
                    render() {
                        return <div>1</div>
                    }
                }
            }
    `

        const { code: classComponentOutput } = await transformAsync(classComponentInput, options)

        expect(classComponentOutput).toMatchSnapshot()

        const MyComponentFactory = new Function(`
        ${classComponentOutput}
return factory;
`)()
        const MyComponent = MyComponentFactory(React)
        const element = <MyComponent />

        expect(element.type.name).toBe('MyClassComponent')
    })

    it('Transforms function components', async () => {
        const classComponentInput = `
            function factory (React) {
                return function MyFunctionComponent () {
                    return <div>1</div>
                }
            }
    `

        const { code: classComponentOutput } = await transformAsync(classComponentInput, options)

        expect(classComponentOutput).toMatchSnapshot()

        const MyComponentFactory = new Function(`
        ${classComponentOutput}
return factory;
`)()
        const MyComponent = MyComponentFactory(React)
        const element = <MyComponent />

        expect(element.type.name).toBe('MyFunctionComponent')
    })
})
