
interface StepperRootProps {
    children: React.ReactNode
}

function StepperRoot({ children }: StepperRootProps) {

	return(
		<div className="w-fit xs:h-[100px] sm:h-[100px] md:h-[100px] lg:h-[140px] xl:h-[140px] flex flex-col xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6">
			{ children }
		</div>
	);
}

export { StepperRoot };
