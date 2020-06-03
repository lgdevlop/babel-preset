import { declare } from '@babel/helper-plugin-utils'
import constEnum from 'babel-plugin-const-enum'

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

export const presets = [
    [
        '@babel/env',
        {
            useBuiltIns: false,
            targets: {
                browsers: ['ie >= 11']
            }
        }
    ],
    '@babel/react',
    '@babel/preset-typescript',
    'const-enum',
    '@babel/flow'
]

export const plugins = [
    require('@babel/plugin-transform-flow-strip-types'),
    require('@babel/plugin-proposal-optional-chaining'),
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-transform-async-to-generator'),
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-transform-modules-commonjs')
]
