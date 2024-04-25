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
			Primary: "#4C9EEB",
			transparent: "transparent"
		},
		screens: {
			"xs": { max: "429px" },
			"sm": { min: "430px", max: "739px" },
			"md": { min: "740px", max: "1279px" },
			"lg": { min: "1280px", max: "1439px" },
			"xl": { min: "1440px" }
		},
		extend: {
			backgroundImage: {
				perfil: "url(/perfil.jpg)"
			},
			keyframes: {
				smokeOneKey : {
					"0%": { bottom: "20px", opacity: "0" },
					"40%": { bottom: "50px", opacity: ".5" },
					"80%": { bottom: "80px", opacity: ".3" },
					"100%": { bottom: "80px", opacity: "0" }
				},
				smokeTwoKey : {
					"0%": { bottom: "40px", opacity: "0" },
					"40%": { bottom: "70px", opacity: ".5" },
					"80%": { bottom: "80px", opacity: ".3" },
					"100%": { bottom: "80px", opacity: "0" }
				}
			},
			animation: {
				smokeOne: "smokeOneKey 3s 4s linear infinite",
				smokeTwo : "smokeTwoKey 3s 5s linear infinite",
				smokeThree : "smokeTwoKey 3s 6s linear infinite",
				smokeFour : "smokeOneKey 3s 5s linear infinite",
			}
		}
	},
	plugins: [],
};
export default config;
