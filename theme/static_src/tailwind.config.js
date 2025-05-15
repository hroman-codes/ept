/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../../templates/**/*.{html,js}",     // go up 2 directories to get to templates
        "./**/*.{js,jsx,ts,tsx}",             // pick up all JS/TS files inside static_src
        "./templates/**/*.html",
        "./tailwind_theme/templates/**/*.html",
        "./tailwind_theme/static_src/**/*.{js,jsx,ts,tsx}",
        "./static_src/**/*.{js,jsx,ts,tsx}",
        "./dist/*.{html,js}"
    ],
    theme: {
        extend: {
            // Extend or customize your theme here
            colors: {
                'eptblue': '#25283B',
                'eptred': '#DF0B6C',
                'eptpink': '#DA7AE8',
                'eptteal': '#9EE5D3',
                'eptyellow': '#F8E67C',
                'eptbabyblue': '#89CFF1',
            },
            spacing: {
                // Add custom spacing
            },
            fontFamily: {
                // Add custom fonts
            },
        },
    },
    plugins: [
        // Add plugins here
    ],
};