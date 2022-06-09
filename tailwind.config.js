module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {

        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            'display': ['Roboto', ],
            'body': ['Roboto', ],
            'sans': ['Roboto', ],
            'serif': ['Roboto', ],
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
}