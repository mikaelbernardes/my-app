
interface CardContentProps {
    content: string,
	title?: string
}

function CardContent({ content, title }: CardContentProps) {
	return(
		<div className="flex flex-col gap-1 ">
			{
				title ?
					<h2 className="xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-Primary xs:mt-4 sm:mt-4 md:mt-4 lg:mt-6 xl:mt-6">{title}</h2>
					:
					null
			}
			<p 
				className={`xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-base font-light text-TXT100 ${title ? "xs:mt-4 sm:mt-4 md:mt-4 lg:mt-6 xl:mt-6" : ""}`}
			>{content}</p>
		</div>
	);
}

export { CardContent };
