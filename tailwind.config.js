/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
        colors: {
            'bleu-nuit': '#0B1C2D',
            'cyan': '#2FD2C8',
        },
        fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        },
    },
    plugins: [],
}