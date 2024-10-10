import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        380: "380px",
        1186: "1186px",
        "2xl": "1400px",
        large: { raw: "(min-width: 1440px) and (min-height: 1040px)" },
        tablet: { raw: "(max-width: 999px)" },
      },
      colors: {
        as: "#E5BE39",
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
            boulder: "#7B7B7B",
            boulder50: "#F6F6F6",
            boulder100: "#E7E7E7",
            boulder200: "#D1D1D1",
            boulder600: "#5D5D5D",
            boulder300: "#B0B0B0",
            boulder400: "#7B7B7B",
            boulder500: "#6D6D6D",
            boulder700: "#4F4F4F",
            boulder900: "#3D3D3D",
            boulder950: "#262626",
            vulcan950: "#181721",
            madras: "#423306",
            activeLink: "#0F2942",
            inActiveLink: "#BDBDBD",
            success: "#039855",
            tan: "#111111",
            tulip100: "#FEF0C3",
            tulip50: "#FEF9E8",
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
            darkYellow: "#FFBB0A", // yellow - 800
            yellow700: "#EAB308",
            brown: "#876307",
            lightYellow: "#D5AE35",
            white300: "#FEFEFE",
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
            grayText: "#575757",
          },
        },
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
      },
    },
  },
  plugins: [],
};
export default config;
