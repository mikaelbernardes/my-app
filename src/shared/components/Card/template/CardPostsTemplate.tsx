import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Card } from "..";
import Link from "next/link";
import { transformDateToBrasilianDate } from "@/utils/transformDateToBrasilianDate";

interface CardPostsTemplateProps {
    perfilImage: string | StaticImport,
    perfilName: string,
    createdAt: string,
    content: string,
    slug: string
}

function CardPostsTemplate({
	perfilImage,
	perfilName,
	createdAt,
	content,
	slug
}: CardPostsTemplateProps) {

	return (
		<Card.Root>
			<Card.Perfil
				image={perfilImage}
				name={perfilName}
				marcationName={transformDateToBrasilianDate(createdAt)}
			/>
			<Link 
				href={`/posts/${slug}`}
				className="w-fit h-fit"
			>
				<Card.Content
					content={content}
				/>
			</Link>
		</Card.Root>
	);
}

export { CardPostsTemplate };
