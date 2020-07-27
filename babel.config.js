module.exports = {
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: false,
                shippedProposals: true,
                targets: {
                    browsers: ['ie >= 11']
                }
            }
        ],
        '@babel/react',
        '@babel/preset-typescript',
        [
            'const-enum',
            {
                transform: 'constObject'
            }
        ],
        '@babel/flow'
    ],
    plugins: [require('babel-plugin-styled-components')]
}
