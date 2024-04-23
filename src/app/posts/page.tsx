"use server";
import { getPosts } from "../_services/notion";
import PostsPage from "./SearchFilterPosts";

export default async function Posts() {

	const posts = await getPosts();

	return(
		<>
			<PostsPage posts={posts} />
		</>
	);
}
