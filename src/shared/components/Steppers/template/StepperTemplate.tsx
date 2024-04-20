import { StepperProps } from "@/@types/Stepper";
import { Stepper } from "..";

function StepperTemplate({
	circleColor,
	title,
	subTitle,
	timeLapse,
	content
} : StepperProps) {

	return(
		<Stepper.Root>
			<Stepper.Info 
				circleColor={circleColor}
				subTitle={subTitle}
				timeLapse={timeLapse}
				title={title}
			/>
			{
				!!content &&
				<Stepper.Content 
					content={content}
				/>
			}
		</Stepper.Root>
	);
}

export { StepperTemplate };
