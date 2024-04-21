import { StepperProps } from "@/@types/Stepper";
import { Stepper } from "..";

function StepperTemplate({
	title,
	subTitle,
	timeLapse,
	position,
	content,
	link,
	image
} : StepperProps) {

	return(
		<Stepper.Root>
			<Stepper.Info
				subTitle={subTitle}
				timeLapse={timeLapse}
				title={title}
				link={link}
				position={position}
				image={image}
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
