
interface StepperContentProps {
    content: string
}

function StepperContent({ content } : StepperContentProps) {

	return(
		<div className="w-full h-fit">
			<p className="xs:text-[10px] sm:text-[10px] md:text-xs lg:text-base xl:text-base">{ content }</p>
		</div>
	);
}

export { StepperContent };
