"use server";
import { CardPostsTemplate } from "@/shared/components/Card/template/CardPostsTemplate";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";
import PerfilImg from "@public/perfil.jpg";
import { getPosts } from "../_services/notion";

export default async function Posts() {

	const posts = await getPosts();

	console.log(posts);

	return(
		<>
			<DefaultNavigationHeader />
			<main className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72">
				{
					posts.map((post) => (
						<CardPostsTemplate
							content={post.description}
							createdAt={post.createdAt}
							perfilImage={PerfilImg}
							perfilName={post.title}
							key={post.id}
							slug={post.slug}
						/>
					))
				}
			</main>
		</>
	);
}
