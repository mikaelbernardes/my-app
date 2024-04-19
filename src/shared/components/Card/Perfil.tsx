import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CardPerfilProps {
    image: string | StaticImport,
    name: string,
    marcationName: string
}

function CardPerfil({
	image,
	name,
	marcationName
}: CardPerfilProps) {
    
	return(
		<div className="flex xs:gap-[6px] sm:gap-[6px] md:gap-[6px] lg:gap-[8px] xl:gap-[8px] items-center">
			<div className="xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-full relative">
				<Image 
					src={image}
					alt={`Foto de Perfil de ${ name }`}
					className="rounded-full"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className="flex flex-col justify-center">
				<h2 className="xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-base font-light text-TXT100">{ name }</h2>
				<p className="xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-sm font-light text-TXT300">{ marcationName }</p>
			</div>
		</div>
	);
}

export { CardPerfil };
