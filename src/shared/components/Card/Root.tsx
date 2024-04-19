
interface CardRootProps {
    children: React.ReactNode
}

function CardRoot({ children } : CardRootProps) {
	return(
		<div className="w-full h-fit xs:py-4 sm:py-4 md:py-4 lg:py-6 xl:py-6 border-b-[0.5px] border-Line">
			{ children }
		</div>
	);
}

export { CardRoot };
