import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CardImageProps {
    src: string | StaticImport,
    alt: string
}

function CardImage({ src, alt } : CardImageProps) {
	return (
		<Image
			src={src}
			alt={alt}
			className="xs:mt-4 sm:mt-4 md:mt-4 lg:mt-6 xl:mt-6"
		/>
	);
}

export { CardImage };
