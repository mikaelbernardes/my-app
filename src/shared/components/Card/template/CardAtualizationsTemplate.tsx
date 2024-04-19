import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Card } from "..";

interface CardAtualizationsTemplateProps {
    perfilImage: string | StaticImport,
    perfilName: string,
    perfilMarcationName: string,
    content: string,
    postImage: string | StaticImport,
    postAlt: string
}

function CardAtualizationsTemplate({
	perfilImage,
	perfilName,
	perfilMarcationName,
	content,
	postImage,
	postAlt
}: CardAtualizationsTemplateProps) {

	return (
		<Card.Root>
			<Card.Perfil
				image={perfilImage}
				name={perfilName}
				marcationName={perfilMarcationName}
			/>
			<Card.Content
				content={content}
			/>
			{
				!!postImage &&
                <Card.ImagePost src={postImage} alt={postAlt} />
			}
		</Card.Root>
	);
}

export { CardAtualizationsTemplate };
