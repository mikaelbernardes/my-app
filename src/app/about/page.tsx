import { StepperTemplate } from "@/shared/components/Steppers/template/StepperTemplate";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";

export default function About() {
	return(
		<>
			<DefaultNavigationHeader />
			<div className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72">
				<h2 className="my-4">Experiência</h2>
				<section className="flex gap-3">
					<div className="flex flex-col items-center">
						<div className="xs:w-2 xs:h-2 rounded-full bg-Primary mt-4"></div>
						<div className="xs:w-[1px] xs:h-32 bg-Primary"></div>
					</div>
					<div>
						<StepperTemplate 
							circleColor="bg-Primary"
							content="Desenvolvedor Frontend trabalhando com Typescript, usando o framework NextJS e libs como Axios e Zustand, mantendo poucas libs. Projeto re"
							subTitle="Desenvolvedor Frontend"
							title="Cartsys Software Ltda."
							timeLapse="Agosto de 2023 - O momento"
						/>
					</div>
				</section>
			</div>
		</>
	);
}
