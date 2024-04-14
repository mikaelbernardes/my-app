"use client";
import Link from "next/link";
import { useNavigation } from "../hooks/useNavigation";

function Navigation() {

	const { dataLinks, usePathName } = useNavigation();

	return(
		<div className="xs:w-full h-fit border-b-[0.5px] border-Line flex xs:px-5 sm:px-5 md:px-6 lg:px-16 xl:px-16 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-56 justify-between">
			{
				dataLinks.map((item, index) => (
					<Link
						href={item.pathname}
						className={`
						${ usePathName === item.pathname 
						? "text-Primary font-semibold xs:px-[6px] sm:px-2 md:px-3 lg:px-4 xl:px-4 border-b-2 border-Primary" 
						: "text-TXT300 font-light"} 
						font-light xs:text-[10px] sm:text-sm md:text-base pb-1 transition-all duration-500`
						}
						key={index}
					>{item.name}</Link>
				))
			}
		</div>
	);
}

export { Navigation };
