const plugin = require('tailwindcss/plugin');

const buttonsPlugin = plugin(function ({
    addComponents
}) {
    addComponents({
        '.btn': {
            '@apply py-1.5 px-3 transition-all outline-none flex items-center gap-2': {}
        },
        '.btn-xs': {
            '@apply py-1 px-3 text-xs': {}
        },
        '.btn-sm': {
            '@apply py-1 px-3 text-sm': {}
        },
        '.btn-md': {
            '@apply py-1 px-4': {}
        },
        '.btn-lg': {
            '@apply py-2 px-6 text-lg': {}
        },
        '.btn-xl': {
            '@apply py-4 px-8 text-xl': {}
        },
        '.btn-primary': {
            '@apply border-2 border-transparent bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:outline-none hover:bg-blue-700 text-white !important': {}
        },
        '.btn-primary-outline': {
            '@apply border-2 border-blue-600 focus:bg-blue-600 focus:text-white focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:outline-none hover:bg-blue-600 hover:text-white text-blue-600 !important': {}
        },
        '.btn-secondary': {
            '@apply border-2 border-transparent bg-gray-600 focus:bg-gray-700 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none hover:bg-gray-700 text-white !important': {}
        },
        '.btn-secondary-outline': {
            '@apply border-2 border-gray-600 focus:bg-gray-600 focus:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none hover:bg-gray-600 hover:text-white text-gray-600 !important': {}
        },
        '.btn-success': {
            '@apply border-2 border-transparent bg-green-600 focus:bg-green-700 focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:outline-none hover:bg-green-700 text-white !important': {}
        },
        '.btn-success-outline': {
            '@apply border-2 border-green-600 focus:bg-green-600 focus:text-white focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:outline-none hover:bg-green-600 hover:text-white text-green-600 !important': {}
        },
        '.btn-danger': {
            '@apply border-2 border-transparent bg-red-600 focus:bg-red-700 focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:outline-none hover:bg-red-700 text-white !important': {}
        },
        '.btn-danger-outline': {
            '@apply border-2 border-red-600 focus:bg-red-600 focus:text-white focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:outline-none hover:bg-red-600 hover:text-white text-red-600 !important': {}
        },
        '.btn-warning': {
            '@apply border-2 border-transparent bg-yellow-600 focus:bg-yellow-700 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none hover:bg-yellow-700 text-white !important': {}
        },
        '.btn-warning-outline': {
            '@apply border-2 border-yellow-600 focus:bg-yellow-600 focus:text-white focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none hover:bg-yellow-600 hover:text-white text-yellow-600 !important': {}
        },
        '.btn-info': {
            '@apply border-2 border-transparent bg-cyan-600 focus:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:outline-none hover:bg-cyan-700 text-white !important': {}
        },
        '.btn-info-outline': {
            '@apply border-2 border-cyan-600 focus:bg-cyan-600 focus:text-white focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:outline-none hover:bg-cyan-600 hover:text-white text-cyan-600 !important': {}
        },
    })
});

module.exports = buttonsPlugin;