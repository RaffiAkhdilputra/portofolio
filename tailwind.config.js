/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
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
                gold: {
                    DEFAULT: "hsl(var(--gold))",
                    dark: "hsl(var(--gold-dark))",
                },
                navy: {
                    dark: "hsl(var(--navy-dark))",
                    medium: "hsl(var(--navy-medium))",
                },
                blue: {
                    bright: "hsl(var(--blue-bright))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                heading: "var(--font-heading)",
                body: "var(--font-body)",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    from: { opacity: "0", transform: "translateX(-50px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideInRight: {
                    from: { opacity: "0", transform: "translateX(50px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "scroll-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "stripe-scroll": {
                    "0%": { backgroundPosition: "0 0" },
                    "100%": { backgroundPosition: "100px 0" },
                },
                "gradient-shift": {
                    "0%, 100%": { backgroundPosition: "0% center" },
                    "50%": { backgroundPosition: "100% center" },
                },
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-in-left": "slideInLeft 0.6s ease-out forwards",
                "slide-in-right": "slideInRight 0.6s ease-out forwards",
                "scroll-left": "scroll-left 30s linear infinite",
                "stripe-scroll": "stripe-scroll 20s linear infinite",
                "gradient-shift": "gradient-shift 3s ease infinite",
            },
        },
    },
    plugins: [],
}