/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Brand Palette (Brand.md)
                brand: {
                    purple: '#292D6A',
                    woodwork: '#F3B61B',
                    metal: '#578BC9',
                    electronics: '#00916E',
                    lasers: '#D33E43',
                    printing: '#EE6E23',
                    textiles: '#79CCC4',
                    ceramics: '#B34A9A',
                    white: '#F2F4EF',
                },
                // Auth Theme (code.html) - for fidelity
                asmbly: {
                    navy: '#222958',
                    yellow: '#fecb00',
                    orange: '#e65133',
                    teal: '#22b298',
                },
                background: {
                    light: '#f6f7f8',
                    dark: '#0f1126',
                },
                border: {
                    dark: '#343b6a',
                },
                surface: {
                    dark: '#222958'
                }
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(254, 203, 0, 0.15)',
            },
            backgroundImage: {
                'auth-gradient': 'linear-gradient(to bottom right, rgba(34, 41, 88, 0.9), rgba(15, 17, 38, 0.95))',
            }
        },
    },
    plugins: [],
}
