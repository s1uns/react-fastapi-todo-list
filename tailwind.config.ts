import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            width: {
                "600": "600px",
                "10rem": "10rem",
            },
            height: {
                "600": "600px",
                "12rem": "12rem",
            },
            boxShadow: {
                "btn-hover": "0 0.5rem 2rem rgba(0, 0, 0, 0.5)",
                "btn-active": "0 0.2rem 1rem rgba(0, 0, 0, 0.4)",
            },
            backgroundPosition: {
                "pos-0": "0% 0%",
                "pos-100": "100% 100%",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ['light'],
      }
};
export default config;
