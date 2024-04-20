
interface StepperContentProps {
    content: string
}

function StepperContent({ content } : StepperContentProps) {

	return(
		<div className="w-full h-fit">
			<p className="xs:text-[10px]">{ content }</p>
		</div>
	);
}

export { StepperContent };
