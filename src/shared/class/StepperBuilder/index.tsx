import { DataStepperBuilder } from "@/@types/Stepper";
import { StepperTemplate } from "../../components/Steppers/template/StepperTemplate";
import { StepperLine } from "./StepperLine";

interface StepperBuilderProps {
	data: DataStepperBuilder[]
}

function StepperBuilder({ data } : StepperBuilderProps) {

	const stepperLines = data.map((_, index) => <StepperLine key={index} position={index} size={data.length} />);

	return (
		<section className="flex flex-col gap-8">
			{stepperLines.map((line, index) => (
				<div className="flex xs:gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4" key={index}>
					{line}
					<div className="flex flex-col items-center">
						<StepperTemplate
							position={index}
							content={data[index].content}
							subTitle={data[index].subTitle}
							title={data[index].title}
							timeLapse={data[index].timeLapse}
							image={data[index].image}
							link={data[index].link}
						/>
					</div>
				</div>
			))}
		</section>
	);
}

export { StepperBuilder };

