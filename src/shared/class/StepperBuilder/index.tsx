"use client";
import React, { Component, ReactNode } from "react";
import { DataStepperBuilder } from "@/@types/Stepper";
import { StepperTemplate } from "../../components/Steppers/template/StepperTemplate";
import { StepperLine } from "./StepperLine";

interface StepperBuilderProps {
    data: DataStepperBuilder[]
}

interface StepperBuilderState {
    stepperLines: ReactNode[];
}

class StepperBuilder extends Component<StepperBuilderProps, StepperBuilderState> {
	constructor(props: StepperBuilderProps) {
		super(props);
		this.state = {
			stepperLines: [],
		};
	}

	componentDidMount() {
		this.buildStepperLines();
	}

	componentDidUpdate(prevProps: StepperBuilderProps) {
		if (prevProps.data !== this.props.data) {
			this.buildStepperLines();
		}
	}

	private buildStepperLines() {
		const { data } = this.props;
		const stepperLines = data.map((_, index) => (
			<div className="flex xs:gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4" key={index}>
				<StepperLine position={index} size={data.length} />
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
		));
		this.setState({ stepperLines });
	}

	render(): ReactNode {
		const { stepperLines } = this.state;

		return (
			<section className="flex flex-col gap-8">
				{stepperLines}
			</section>
		);
	}
}

class StepperBuilderBuilder {
	private data: DataStepperBuilder[] = [];

	withData(data: DataStepperBuilder[]): StepperBuilderBuilder {
		this.data = data;
		return this;
	}

	build(): ReactNode {
		return <StepperBuilder data={this.data} />;
	}
}

export { StepperBuilder, StepperBuilderBuilder };
