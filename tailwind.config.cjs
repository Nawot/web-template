module.exports =
{
    content: ["./src/**/*.{html,pug,php}"],
    theme:
    {
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
    plugins: [],
}
