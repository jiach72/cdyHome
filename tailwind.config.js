/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0056b3',
                    50: '#e6f0ff',
                    100: '#cce0ff',
                    200: '#99c2ff',
                    300: '#66a3ff',
                    400: '#3385ff',
                    500: '#0056b3',
                    600: '#004590',
                    700: '#00336d',
                    800: '#00224a',
                    900: '#001127',
                },
                secondary: {
                    DEFAULT: '#28a745',
                    50: '#e8f8eb',
                    100: '#d1f1d7',
                    200: '#a3e3af',
                    300: '#75d587',
                    400: '#47c75f',
                    500: '#28a745',
                    600: '#208637',
                    700: '#186429',
                    800: '#10431c',
                    900: '#08210e',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
