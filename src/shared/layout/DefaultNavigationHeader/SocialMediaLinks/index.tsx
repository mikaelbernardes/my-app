import Link from "next/link";

export interface SocialMediaLinksProps {
    icon: React.ElementType,
    link: string,
    color: string
}

function SocialMediaLinks({ icon: Icon, link, color } : SocialMediaLinksProps) {

	return(
		<Link 
			href={link}
			target="_blank"
			className={`
                w-fit h-fit flex items-center justify-center bg-BG300 rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-inner hover:translate-y-1 duration-300 p-2
                text-TXT300 ${color} shadow-TXT300 
            `}
		>
			<Icon className="xs:text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"/>
		</Link>
	);
}

export { SocialMediaLinks };
