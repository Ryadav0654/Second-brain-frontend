import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // scrollbar: {
      //   none: {
      //     "&::-webkit-scrollbar": {
      //       display: "none",
      //     },
      //     "-ms-overflow-style": "none" /* IE and Edge */,
      //     "scrollbar-width": "none" /* Firefox */,
      //   },
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "steel-gray": {
          "50": "#f4f6fa",
          "100": "#e5e8f4",
          "200": "#d1d8ec",
          "300": "#b1bfdf",
          "400": "#8c9ece",
          "500": "#7080c1",
          "600": "#5d68b3",
          "700": "#5258a3",
          "800": "#474b86",
          "900": "#3d416b",
          "950": "#202135",
        },
        "persian-blue": {
          "50": "#ecf2ff",
          "100": "#dde6ff",
          "200": "#c2d1ff",
          "300": "#9db2ff",
          "400": "#7687ff",
          "500": "#565ffe",
          "600": "#3e38f3",
          "700": "#2f27ce",
          "800": "#2a26ad",
          "900": "#272788",
          "950": "#18174f",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
