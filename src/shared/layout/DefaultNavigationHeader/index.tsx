import { SocialMediaLinksData } from "@/shared/data/DataSocialMediaLinks";
import { Banner } from "./Banner";
import { Info } from "./Info";
import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";

function DefaultNavigationHeader() {

	return(
		<header className="flex flex-col xs:gap-6 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 md:mt-6 lg:mt-10 xl:mt-14 w-full h-fit relative">
			<Banner />
			<div 
				className={`
					absolute xs:w-20 sm:w-28 md:w-40 lg:w-48 xl:w-52 xs:h-20 sm:h-28 md:h-40 lg:h-48 xl:h-52 rounded-full border-2 border-BG100 bg-perfil
					bg-cover bg-center xs:left-5 sm:left-16 md:left-32 lg:left-56 xl:left-72 xs:top-9 sm:top-16 md:top-[110px] lg:top-[146px] xl:top-[146px]
				`} 
			/>
			<div 
				className={`
				absolute xs:top-[86px] sm:top-36 md:top-56 lg:top-72 xs:right-3 sm:right-5 md:right-28 lg:right-44 flex items-center xs:gap-3 sm:gap-3 md:gap-6 lg:gap-8
				xl:top-72 right-60 xl:gap-8 xl:right-56
				`}
			>
				{
					SocialMediaLinksData.map((item, index) => (
						<SocialMediaLinks 
							icon={item.icon}
							link={item.link}
							name={item.name}
							key={index}
							color={item.color}
						/>
					))
				}
			</div>
			<Info />
			<Navigation />
		</header>
	);
}

export { DefaultNavigationHeader };

