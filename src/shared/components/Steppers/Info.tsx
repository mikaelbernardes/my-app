import { Colors } from "@/@types/Stepper";

interface StepperInfoProps {
    title: string,
    subTitle: string,
    timeLapse: string,
    circleColor: Colors
}

function StepperInfo({
	title,
	subTitle,
	timeLapse,
	circleColor
} : StepperInfoProps) {

	return(
		<div className="flex items-center gap-[6px]">
			<div className={`xs:w-10 xs:h-10 ${circleColor} rounded-full`}></div>
			<div className="flex flex-col items-start justify-center w-fit h-fit">
				<h2 className="xs:text-[10px] text-TXT100">{title}</h2>
				<p className="xs:text-[8px] text-TXT300">{subTitle}</p>
				<span className="xs:text-[8px] text-TXT300">{timeLapse}</span>
			</div>
		</div>
	);
}

export { StepperInfo };
