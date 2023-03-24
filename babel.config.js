module.exports = {
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                shippedProposals: true,
                targets: {
                    browsers: ['ie >= 11']
                },
                corejs: '3.29.1'
            }
        ],
        '@babel/react',
        '@babel/preset-typescript',
        [
            'const-enum',
            {
                transform: 'constObject'
            }
        ]
    ],
    plugins: [require('babel-plugin-styled-components'), require('babel-plugin-add-react-displayname')]
}
