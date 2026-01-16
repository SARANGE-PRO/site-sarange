/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'lg:col-span-5',
        'lg:col-span-7',
        'col-span-5',
        'col-span-7',
    ],
    theme: {
        extend: {
            colors: {
                // Primary color palette (Orange)
                primary: {
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    DEFAULT: 'var(--color-primary-500)',
                },
                // Secondary color palette (Slate/Dark)
                secondary: {
                    50: 'var(--color-secondary-50)',
                    100: 'var(--color-secondary-100)',
                    200: 'var(--color-secondary-200)',
                    300: 'var(--color-secondary-300)',
                    400: 'var(--color-secondary-400)',
                    500: 'var(--color-secondary-500)',
                    600: 'var(--color-secondary-600)',
                    700: 'var(--color-secondary-700)',
                    800: 'var(--color-secondary-800)',
                    900: 'var(--color-secondary-900)',
                    950: 'var(--color-secondary-950)',
                    DEFAULT: 'var(--color-secondary-900)',
                },
                // Accent color palette (Blue)
                accent: {
                    50: 'var(--color-accent-50)',
                    100: 'var(--color-accent-100)',
                    200: 'var(--color-accent-200)',
                    300: 'var(--color-accent-300)',
                    400: 'var(--color-accent-400)',
                    500: 'var(--color-accent-500)',
                    600: 'var(--color-accent-600)',
                    700: 'var(--color-accent-700)',
                    800: 'var(--color-accent-800)',
                    900: 'var(--color-accent-900)',
                    DEFAULT: 'var(--color-accent-500)',
                },
                // Semantic colors
                success: {
                    50: 'var(--color-success-50)',
                    100: 'var(--color-success-100)',
                    500: 'var(--color-success-500)',
                    600: 'var(--color-success-600)',
                    700: 'var(--color-success-700)',
                    DEFAULT: 'var(--color-success-500)',
                },
                warning: {
                    500: 'var(--color-warning-500)',
                    DEFAULT: 'var(--color-warning-500)',
                },
                error: {
                    500: 'var(--color-error-500)',
                    DEFAULT: 'var(--color-error-500)',
                },
            },
        },
    },
    plugins: [],
}
