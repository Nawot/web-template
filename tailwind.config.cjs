let plugin = require('tailwindcss/plugin')

module.exports =
{
    content: ["./src/**/*.{html,pug,php}"],
    theme:
    {
        container:
        {
            // Remove breakpoints for container
            screens:{},
        },
        // For desktop first
        screens:
        {
            'lg': {'max': '992px'},
            'md': {'max': '768px'},
            'sm': {'max': '480px'},
        },

        extend:
        {
            
        },
    },
    plugins:
    [
        plugin(function ({addVariant})
        {
            addVariant('isActive', '.active')
        })
    ],
}
