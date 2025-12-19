import { create } from '@storybook/theming/create';
import pkg from '../package.json';

export default create({
    base: 'dark', // or 'light', setting a default base

    // Branding
    brandTitle: `Asmbly UI Kit v${pkg.version}`,
    brandUrl: 'https://asmbly.org',
    brandTarget: '_self',

    // You can customize colors here to match brand if desired
    // colorPrimary: '#3A10E5',
    // colorSecondary: '#585C6D',
});
