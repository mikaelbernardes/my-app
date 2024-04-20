import { StepperProps } from "@/@types/Stepper";
import { StepperTemplate } from "../components/Steppers/template/StepperTemplate";


function StepperBuilder() {

	const SteppersArray: StepperProps[] = [];

	return(
		<section>
			<div></div>
			<div>
				{
					SteppersArray.map((item, index) => {

						return(
							<StepperTemplate 
								circleColor={item.circleColor}
								content={item.content}
								subTitle={item.subTitle}
								title={item.title}
								timeLapse={item.timeLapse}
								key={index}
							/>
						);
					})
				}
			</div>
		</section>
	);
}

export { StepperBuilder };
