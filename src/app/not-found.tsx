/* eslint-disable max-len */
import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
	return (
		<main className="w-screen h-[100vh] bg-TXT100 gap-8 overflow-hidden flex flex-col items-center justify-end py-40 px-4 text-center xl:px-24">
			<div data-js="astro" className="astronaut">
				<div className="head"></div>
				<div className="arm arm-left"></div>
				<div className="arm arm-right"></div>
				<div className="body">
					<div className="panel"></div>
				</div>
				<div className="leg leg-left"></div>
				<div className="leg leg-right"></div>
				<div className="schoolbag"></div>
			</div>
			<p
				className="text-BG100 font-medium xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-base"
			>Oh, oh! Parece que você encontrou uma página que até mesmo nosso astronauta mais experiente não conseguiu localizar no vasto universo da internet! Clique no botão para ser ejetado de volta para a navegação segura!</p>
			<Link
				href="/"
				className="w-[55px] h-[50px] border-none outline-none cursor-pointer select-none touch-manipulation rounded-full relative duration-300"
			>
				<span className="bg-BG300 rounded-full absolute left-0 top-0 w-full h-full"></span>
				<span className="bg-Primary rounded-full shadow-sm shadow-BG100 absolute border border-BG100 left-0 top-0 w-full h-full flex justify-center items-center text-xl font-semibold -translate-y-[15%] duration-150 text-Line active:translate-y-[0%] active:shadow-none"></span>
			</Link>
		</main>
	);
}
