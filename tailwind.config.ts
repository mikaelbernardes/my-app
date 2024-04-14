import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		colors: {
			BG100: "#FFFFFF",
			BG300: "#F5F5F5",
			Line: "#BDC5CD",
			TXT100: "#141619",
			TXT300: "#687684",
			Primary: "#4C9EEB"
		},
		screens: {
			"xs": { max: "429px" },
			"sm": { min: "430px", max: "739px" },
			"md": { min: "740px", max: "1279px" },
			"lg": { min: "1280px", max: "1439px" },
			"xl": { min: "1440px" }
		},
		backgroundImage: {
			perfil: "url(/perfil.jpg)"
		}
	},
	plugins: [],
};
export default config;
