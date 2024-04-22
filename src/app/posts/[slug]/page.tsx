import { getPost } from "@/app/_services/notion";
import ReactMarkdown from "react-markdown";

interface PropsSlug {
    params: {
        slug: string
    }
}

export default async function Blog({ params }: PropsSlug) {

	const post = await getPost(params.slug);

	return (
		<>
			<h1>{post.title}</h1>
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</>
	);
}
