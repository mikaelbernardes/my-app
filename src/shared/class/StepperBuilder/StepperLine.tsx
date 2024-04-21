function StepperLine({ position, size }: { position: number, size: number }) {
	let lineColorClass = "bg-Line";
	let circleColorClass = "bg-Line";

	if (position === 0) {
		circleColorClass = "bg-Primary";
		lineColorClass = "bg-gradient-to-b from-Primary to-TXT300";
	} else if (position === 1) {
		circleColorClass = "bg-TXT300";
		lineColorClass = "bg-gradient-to-b from-TXT300 to-Line";
	} else if (position <= 2) {
		circleColorClass = "bg-Line";
		lineColorClass = "bg-Line";
	}

	return (
		<div className="flex flex-col items-center relative">
			<div className={`xs:w-2 xs:h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 rounded-full ${circleColorClass} xs:mt-4 sm:mt-4 md:mt-5 lg:mt-8 xl:mt-8`}></div>
			{
				position < size - 1 && 
				<div 
					className={`
					w-[1px] xs:h-[128px] sm:h-[128px] md:h-[128px] lg:h-[160px] xl:h-[160px] ${lineColorClass} absolute xs:top-6 sm:top-6 md:top-7 lg:top-12 xl:top-12
					xs:left-[3.4px] sm:left-[3.4px] md:left-[3.6px] lg:left-2 xl:left-2
					`}
				></div>
			}
		</div>
	);
}

export { StepperLine };
