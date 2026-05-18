/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ls-black': '#0a0a0a',
                'ls-white': '#fafafa',
                'ls-gold': '#D4AF37',
                'ls-gold-hover': '#b5952f',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-out forwards',
                'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
            },
        },
    },
    plugins: [],
}