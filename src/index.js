import { declare } from '@babel/helper-plugin-utils'
import constEnum from 'babel-plugin-const-enum'
import { presets, plugins } from '../lib/babel.config'

export default declare((api, { allExtensions = false, transform }) => {
    api.assertVersion(7)

    if (typeof allExtensions !== 'boolean') {
        throw new Error('allExtensions option must be boolean|undefined')
    }

    const tsPlugins = [[constEnum, { transform }]]

    return {
        overrides: [
            {
                presets,
                plugins
            },
            {
                test: /\.tsx?$/,
                plugins: tsPlugins
            }
        ]
    }
})
