import uiKitConfig from '../../packages/ui-kit/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
    presets: [uiKitConfig],
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui-kit/src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
