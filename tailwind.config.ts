import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      screens: {
        "8xl": "90rem",
      },
      colors: {
        inputBg: {
          DEFAULT: "hsl(var(--input-bg))",
          foreground: "hsl(var(--input-bg-foreground))",
        },
        inputLabelColor: {
          DEFAULT: "hsl(var(--input-label-color))",
          foreground: "hsl(var(--input-label-color-foreground))",
        },
        inputLabelColor2: {
          DEFAULT: "hsl(var(--input-label-color-2))",
          foreground: "hsl(var(--input-label-color-2-foreground))",
        },
        primaryBlue: {
          DEFAULT: "hsl(var(--primary-blue))",
          foreground: "hsl(var(--primary-blue-foreground))",
        },
        footerColor: {
          DEFAULT: "hsl(var(--footer-color))",
          foreground: "hsl(var(--footer-color-foreground))",
        },
        footerText: {
          DEFAULT: "hsl(var(--footer-text))",
          foreground: "hsl(var(--footer-text-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        customSecondary: {
          DEFAULT: "hsl(var(--custom-secondary))",
          foreground: "hsl(var(--custom-secondary-foreground))",
        },
        primaryFormText: {
          DEFAULT: "hsl(var(--primary-form-text))",
          foreground: "hsl(var(--primary-form-text-foreground))",
        },
        secondaryText: {
          DEFAULT: "hsl(var(--secondary-text))",
          foreground: "hsl(var(--secondary-text-foreground))",
        },
        primaryText: {
          DEFAULT: "hsl(var(--primary-text))",
          foreground: "hsl(var(--primary-text-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        notoSans: ["var(--font-noto-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
