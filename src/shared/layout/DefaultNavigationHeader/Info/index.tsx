import { FiLink } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";

function Info() {
	return(
		<div 
			className={`
			flex flex-col xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 items-start xs:px-5 sm:px-16 md:px-32 lg:px-56 xl:px-72 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20
			`}
		>
			<section className="flex flex-col gap-[2px] items-start">
				<h1 className="text-TXT100 italic font-medium xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">Mikael Bernardes</h1>
				<p className="text-TXT300 italic font-light xs:text-[8px] sm:text-xs md:text-xs lg:text-sm xl:text-sm">@mikaelbernardes</p>
			</section>
			<section>
				<p className="text-TXT100 font-light xs:text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-lg">Engenheiro de Software | Java | Typescript</p>
			</section>
			<section className="flex items-center xs:gap-4 sm:gap-4 md:gap-10 lg:gap-16 xl:gap-20">
				<div className="flex items-center xs:gap-[2px] sm:gap-1 md:gap-2 lg:gap-3 xl:gap-3">
					<FiLink className="text-TXT300 xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base"/>
					<p className="text-Primary font-normal xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-base">mikaelbernardes</p>
				</div>
				<div className="flex items-center xs:gap-[2px] sm:gap-1 md:gap-2 lg:gap-3 xl:gap-3">
					<BsCalendar3 className="text-TXT300 xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base" />
					<p className="text-TXT300 font-normal xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-base">desde 22/02/2021</p>
				</div>
			</section>
			<section className="flex items-center xs:gap-4 sm:gap-4 md:gap-10 lg:gap-16 xl:gap-20">
				<p className="text-TXT300 font-light xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-base">
					<span className="text-TXT100 font-medium">4.202 </span> Seguindo</p>
				<p className="text-TXT300 font-light xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-base">
					<span className="text-TXT100 font-medium">4.593 </span> Seguidores</p>
			</section>
		</div>
	);
}
export { Info };
