import { StepperTemplate } from "../../components/Steppers/template/StepperTemplate";
import { SteppersArray } from "../../data/DataStepperBuilder";
import { StepperLine } from "./StepperLine";

function StepperBuilder() {

	const stepperLines = SteppersArray.map((_, index) => <StepperLine key={index} position={index} size={SteppersArray.length} />);

	return (
		<section className="flex flex-col gap-8">
			{stepperLines.map((line, index) => (
				<div className="flex xs:gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4" key={index}>
					{line}
					<div className="flex flex-col items-center">
						<StepperTemplate
							position={index}
							content={SteppersArray[index].content}
							subTitle={SteppersArray[index].subTitle}
							title={SteppersArray[index].title}
							timeLapse={SteppersArray[index].timeLapse}
							image={SteppersArray[index].image}
							link={SteppersArray[index].link}
						/>
					</div>
				</div>
			))}
		</section>
	);
}

export { StepperBuilder };

