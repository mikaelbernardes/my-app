"use client";
import Link from "next/link";
import { useNavigation } from "../hooks/useNavigation";

function Navigation() {

	const { dataLinks, usePathName } = useNavigation();

	return(
		<div className="w-full h-fit border-b-[0.5px] border-Line flex xs:px-5 justify-between">
			{
				dataLinks.map((item, index) => (
					<Link
						href={item.pathname}
						className={`
						${ usePathName === item.pathname 
						? "text-Primary font-semibold px-[6px] border-b-2 border-Primary" 
						: "text-TXT300 font-light"} 
						font-light text-[10px] pb-1 transition-all duration-500`
						}
						key={index}
					>{item.name}</Link>
				))
			}
		</div>
	);
}

export { Navigation };
