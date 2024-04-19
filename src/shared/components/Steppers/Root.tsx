
interface StepperRootProps {
    children: React.ReactNode
}

function StepperRoot({ children }: StepperRootProps) {

	return(
		<div className="w-fit h-fit flex flex-col xs:gap-4">
			{ children }
		</div>
	);
}

export { StepperRoot };
