/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5044E5',
            },
            fontFamily: {
                sans: ['Noto Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
