import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        resolve()
    ]
}