import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Card } from "..";
import Link from "next/link";
import { transformDateToBrasilianDate } from "@/utils/transformDateToBrasilianDate";
import PerfilImg from "@public/perfil.jpg";

interface CardPostsTemplateProps {
    perfilImage?: string | StaticImport,
    perfilName?: string,
    createdAt: string,
    content: string,
    slug: string,
	title: string
}

function CardPostsTemplate({
	perfilImage = PerfilImg,
	perfilName = "Mikael Bernardes",
	createdAt,
	content,
	slug,
	title
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
					title={title}
					content={content}
				/>
			</Link>
		</Card.Root>
	);
}

export { CardPostsTemplate };
