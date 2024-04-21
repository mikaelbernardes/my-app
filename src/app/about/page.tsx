import { StepperBuilder } from "@/shared/class/StepperBuilder";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";

export default function About() {
	return(
		<>
			<DefaultNavigationHeader />
			<div className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72 pb-4 xl:pb-12">
				<h2 
					className={`
						w-fit xs:my-4 sm:my-4 md:my-6 lg:my-8 xl:my-10 xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
						bg-gradient-to-r from-Primary to-TXT300 bg-clip-text text-transparent 
					`}
				>Experiência</h2>
				<section className="flex gap-3">
					<StepperBuilder />
				</section>
			</div>
		</>
	);
}
