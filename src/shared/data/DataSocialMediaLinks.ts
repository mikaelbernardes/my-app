import { BiLogoGmail } from "react-icons/bi";
import { FaBehanceSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialMediaLinksProps } from "../layout/DefaultNavigationHeader/SocialMediaLinks";

export const SocialMediaLinksData: SocialMediaLinksProps[] = [
	{
		icon: FaGithub,
		link: "https://github.com/mikaelbernardes",
		color: "hover:text-[#2B3137]",
		name: "Github"
	},
	{
		icon: FaLinkedin,
		link: "https://www.linkedin.com/in/bernardesmikael/",
		color: "hover:text-[#0E76A8]",
		name: "Linkedin"
	},
	{
		icon: FaBehanceSquare,
		link: "https://www.behance.net/mikaelbernardes1",
		color: "hover:text-[#053eff]",
		name: "Behance"
	},
	{
		icon: BiLogoGmail,
		link: "mailto:mikaelbernardes2022@gmail.com",
		color: "hover:text-[#f2a60c]",
		name: "Gmail"
	}
];
