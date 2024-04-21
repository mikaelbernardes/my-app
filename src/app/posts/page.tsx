"use server";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";
import { getPosts } from "../_services/notion";
import { CardAtualizationsTemplate } from "@/shared/components/Card/template/CardAtualizationsTemplate";
import Logo from "@public/ampliLogo.jpeg";

export default async function Posts() {

	const posts = await getPosts();

	console.log(posts);

	return(
		<>
			<DefaultNavigationHeader />
			<div>
				{
					posts.map((post) => (
						<CardAtualizationsTemplate 
							content=""
							perfilImage={Logo}
							perfilMarcationName={post.createdAt}
							perfilName={post.title}
							postAlt={post.title}
							postImage={Logo}
							key={post.id}
						/>
					))
				}
			</div>
		</>
	);
}
