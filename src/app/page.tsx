/* eslint-disable max-len */
import { CardAtualizationsTemplate } from "@/shared/components/Card/template/CardAtualizationsTemplate";
import { dataAtualizationPage } from "@/shared/data/DataAtualizationPage";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";

export default function Home() {
	return (
		<main className="h-fit">
			<DefaultNavigationHeader />
			<div className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72">
				{
					dataAtualizationPage.map((post, index) => (
						<CardAtualizationsTemplate
							perfilImage={post.perfilImage}
							perfilMarcationName={post.perfilMarcationName}
							perfilName={post.perfilName}
							content={post.content}
							postAlt={post.postAlt}
							postImage={post.postImage}
							key={index}
						/>
					))
				}
			</div>
		</main>
	);
}
