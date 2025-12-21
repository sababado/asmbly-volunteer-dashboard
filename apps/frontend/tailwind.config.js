import uiKitConfig from '@voldash/ui-kit/tailwind.config';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const uiKitPath = path.dirname(require.resolve('@voldash/ui-kit/package.json'));

/** @type {import('tailwindcss').Config} */
export default {
    presets: [uiKitConfig],
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        path.join(uiKitPath, "src/**/*.{js,ts,jsx,tsx}")
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
