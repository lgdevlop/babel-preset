import React from 'react'
import { transformAsync } from '@babel/core'

import { render } from '@testing-library/react'
import { presets, plugins } from '../babel.config'

const options = {
    presets,
    plugins
}

describe('plugins test', () => {
    test('styled-components', async () => {
        const componentName = 'MyComponent'

        const input = `
            import styled from 'styled-components';
            import React from 'react';

            const ${componentName} = styled.div\`
                background: red;
            \`;

            export default ${componentName}
        `

        const { code: output } = await transformAsync(input, {
            ...options,
            filename: 'file.ts'
        })
        const Component = eval(output)
        const view = render(React.createElement(Component))

        expect(view.container.firstChild.className).toContain(componentName)
    })
})
