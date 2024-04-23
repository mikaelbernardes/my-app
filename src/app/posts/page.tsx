"use server";
import { CardPostsTemplate } from "@/shared/components/Card/template/CardPostsTemplate";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";
import { getPosts } from "../_services/notion";

export default async function Posts() {

	const posts = await getPosts();

	const filterAllPosts = posts.filter(post => post.tags[0] === "post");

	return(
		<>
			<DefaultNavigationHeader />
			<main className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72">
				{
					filterAllPosts.map((post) => (
						<CardPostsTemplate
							content={post.description}
							createdAt={post.createdAt}
							key={post.id}
							slug={post.slug}
							title={post.title}
						/>
					))
				}
			</main>
		</>
	);
}
