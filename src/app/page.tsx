/* eslint-disable max-len */
import { CardAtualizationsTemplate } from "@/shared/components/Card/template/CardAtualizationsTemplate";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";
import Perfil from "@public/perfil.jpg";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
	return (
		<main className="h-fit">
			<DefaultNavigationHeader />
			<div className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72">
				<CardAtualizationsTemplate
					perfilImage={Perfil}
					perfilMarcationName="@mikaelbernardes"
					perfilName="Mikael Bernardes"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro deserunt magnam adipisci, unde illo exercitationem? Officia, nisi. Cupiditate"
				/>
			</div>
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
		</main>
	);
}
