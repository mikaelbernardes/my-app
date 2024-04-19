import { CardAtualizationsTemplate } from "@/shared/components/Card/template/CardAtualizationsTemplate";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";
import Perfil from "@public/perfil.jpg";

export default function Home() {
	return (
		<main className="h-fit">
			<DefaultNavigationHeader />
			<div className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72">
				<CardAtualizationsTemplate
					perfilImage={Perfil}
					perfilMarcationName="@mikaelbernardes"
					perfilName="Mikael Bernardes"
					postAlt=""
					postImage={Perfil}
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro deserunt magnam adipisci, unde illo exercitationem? Officia, nisi. Cupiditate"
				/>
			</div>
		</main>
	);
}
