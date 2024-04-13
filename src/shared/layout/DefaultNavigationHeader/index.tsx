import { Banner } from "./Banner";
import { Info } from "./Info";
import { Navigation } from "./Navigation";

function DefaultNavigationHeader() {

	return(
		<header className="flex flex-col xs:gap-6 w-full h-fit relative">
			<Banner />
			<div className="absolute xs:w-20 xs:h-20 rounded-full border-2 border-BG100 bg-perfil bg-cover bg-center left-5 top-9" />
			<Info />
			<Navigation />
		</header>
	);
}

export { DefaultNavigationHeader };
