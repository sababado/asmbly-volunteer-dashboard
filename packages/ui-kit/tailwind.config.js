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
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                },

                // Legacy Brand Palette (Brand.md) - Kept for specific overrides
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
                // Auth Theme - legacy
                asmbly: {
                    navy: '#222958',
                    yellow: '#fecb00',
                    orange: '#e65133',
                    teal: '#22b298',
                },
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
