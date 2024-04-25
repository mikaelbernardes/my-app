"use server";
import { CardPostsTemplate } from "@/shared/components/Card/template/CardPostsTemplate";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";
import { getPosts } from "../_services/notion";

export default async function Projects() {

	const posts = await getPosts();

	const filteredPostsForProjects = posts.filter(post => post.tags[0] === "project");

	return(
		<>
			<DefaultNavigationHeader />
			<main className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72 flex flex-col items-center">
				{
					filteredPostsForProjects.map((post) => (
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
