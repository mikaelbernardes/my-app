import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		colors: {
			BG100: "#FFFFFF",
			BG300: "#F5F5F5",
			Line: "#DEDEDE",
			TXT100: "#242424",
			TXT300: "#8A8B8F",
			Primary: "#0EA8FF"
		},
		screens: {
			"xs": { max: "429px" },
			"sm": { min: "430px", max: "739px" },
			"md": { min: "740px", max: "1279px" },
			"base": { min: "1280px", max: "1439px" },
			"lg": { min: "1440px", max: "1511px" },
			"xl": { min: "1512px" }
		}
	},
	plugins: [],
};
export default config;
