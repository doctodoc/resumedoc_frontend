import type { Config } from "tailwindcss";

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontSize: {
        default: "16px",
        reg_size: "16px",
        base: "16px",
        main_header_size: "18px",
        sub_header_size: "14px",
        "5xl": pxToRem(46),
        "3xl": pxToRem(32),
        "2xl": pxToRem(26),
        xl: pxToRem(24),
        lg: pxToRem(20),
        18: pxToRem(18),
        16: pxToRem(16),
      },
      colors: {
        // backgrounds
        primary: "#0DD354",
        primary_dark: "#1E1E1E",
        secondary_dark: "#2C2C2C",
        primary_light: "#D1FFE2",
        title_grey: "#515151",
        power_purple: "#D60CE8",
        power_purple_light: "#FCDAFF",
        footer_bg: "#D9D9D9",
        dark_footer_bg: "rgba(0,0,0,1)",
        light_gray_bg: "#CDC9C9",
        dark_icon_circle: "#3D3B3B",
        light_gray_widget: "#F5F5F5",
        light_bg: "#FFFFFF",

        // fonts
        copyright_color: "#515151",
        grey_icon: "#1E1E1E",
        dark_primary_text: "#FFFFFF",
        dark_secondary_text: "#D9D9D9",
        primary_text: "#000000",
        secondary_text: "#515151",

        // borders
        input_border_grey: "#D9D9D9",
        light_border_color: "#E2E1E1",
        dark_input_border_grey: "#1E1E1E",
      },
      zIndex: {
        drop_down_menu: "600",
        nav_bar: "400",
        side_bar: "300",
        floater: "200",
      },
    },
  },
  plugins: [],
};
export default config;
