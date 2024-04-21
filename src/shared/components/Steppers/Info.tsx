import { StepperProps } from "@/@types/Stepper";
import Image from "next/image";
import Link from "next/link";

function StepperInfo({
	title,
	subTitle,
	timeLapse,
	link,
	position,
	image
}: StepperProps) {

	let circleColor = "bg-Line";

	if (position === 0) {
		circleColor = "bg-Primary";
	} else if (position === 1) {
		circleColor = "bg-TXT300";
	} else if (position <= 2) {
		circleColor = "bg-Line";
	}

	return (
		<div className="flex items-center gap-[6px]">
			{
				image ?
					<div 
						className="xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-full"
					>
						<Image 
							src={image}
							alt={`Logo da ${title}`}
							className="rounded-full"
							objectFit="cover"
							objectPosition="center"
						/>
					</div>
					:
					<div 
						className={`xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-20 xl:h-20 ${circleColor} rounded-full`}
					></div>
			}
			<div className="flex flex-col items-start justify-center w-fit h-fit">
				{
					!link ?
						<h2 className="xs:text-[10px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg text-TXT100">{title}</h2>
						:
						<Link href={link} className="xs:text-[10px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg text-TXT100 hover:text-Primary transition-all">{title}</Link>
				}
				<p className="xs:text-[8px] sm:text-[8px] md:text-[10px] lg:text-sm xl:text-sm text-TXT300">{subTitle}</p>
				<span className="xs:text-[8px] sm:text-[8px] md:text-[10px] lg:text-sm xl:text-sm text-TXT300">{timeLapse}</span>
			</div>
		</div>
	);
}

export { StepperInfo };
