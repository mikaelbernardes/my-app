/* eslint-disable max-len */
import { SocialMediaLinksData } from "@/shared/data/DataSocialMediaLinks";
import { Banner } from "./Banner";
import { Info } from "./Info";
import { Navigation } from "./Navigation";
import { SocialMediaLinks } from "./SocialMediaLinks";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

function DefaultNavigationHeader() {

	return (
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
			<Link
				href="https://w.app/z6agWN"
				title="Whatsapp"
				className="group fixed bottom-5 right-5 inline-flex items-center justify-center mb-2 mr-2 text-sm font-medium text-BG100 rounded-lg group bg-[#00FF55] focus:ring-4 focus:outline-none w-fit h-fit p-2"
			>
				<FaWhatsapp className="xs:text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl" />
				<div
					className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all"
				>
					<div
						className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-44 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2"
					>
						<div className="rounded-sm bg-Primary py-1 px-2">
							<p className="whitespace-nowrap">Entre em contato comigo</p>
						</div>
					</div>
				</div>
			</Link>
		</header>
	);
}

export { DefaultNavigationHeader };

