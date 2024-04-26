import { BiLogoGmail } from "react-icons/bi";
import { FaBehanceSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialMediaLinksProps } from "../layout/DefaultNavigationHeader/SocialMediaLinks";

export const SocialMediaLinksData: SocialMediaLinksProps[] = [
	{
		icon: FaGithub,
		link: "/",
		color: "hover:text-[#2B3137]"
	},
	{
		icon: FaLinkedin,
		link: "/",
		color: "hover:text-[#0E76A8]"
	},
	{
		icon: FaBehanceSquare,
		link: "/",
		color: "hover:text-[#053eff]"
	},
	{
		icon: BiLogoGmail,
		link: "/",
		color: "hover:text-[#f2a60c]"
	}
];
