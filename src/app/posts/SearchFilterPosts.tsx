"use client";
import { CardPostsTemplate } from "@/shared/components/Card/template/CardPostsTemplate";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";
import { useState } from "react";

interface PostsProps {
    posts: {
        id: string;
        title: string;
        slug: string;
        tags: string[];
        createdAt: string;
        description: string;
    }[]
}

export default function PostsPage({ posts }: PostsProps) {

	const [searchPost, setSearchPost] = useState<string>("");

	const filterAllPosts = posts.filter(post => post.tags[0] === "post");

	const filteredPosts = filterAllPosts.filter(post =>
		post.title.toLowerCase().includes(searchPost.toLowerCase())
	);

	return (
		<>
			<DefaultNavigationHeader />
			<main className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72 flex flex-col items-center">
				<input
					id="username"
					name="username"
					type="search"
					onChange={(e) => setSearchPost(e.target.value)}
					value={searchPost}
					placeholder="Pesquisar Post"
					className={`
							xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-1 bg-[#EFEFEF] rounded-md px-2
							focus:outline-none peer bg-inherit text-TXT100 xs:my-4 sm:my-4 md:my-4 lg:my-5 xl:my-6 xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3
						`}
				/>
				{
					filteredPosts.map((post) => (
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
