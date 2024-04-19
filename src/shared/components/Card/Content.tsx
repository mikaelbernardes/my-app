
interface CardContentProps {
    content: string
}

function CardContent({ content }: CardContentProps) {
	return(
		<div>
			<p className="xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-base font-light text-TXT100 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-6 xl:mt-6">{content}</p>
		</div>
	);
}

export { CardContent };
