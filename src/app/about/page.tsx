/* eslint-disable max-len */
import { StepperBuilder } from "@/shared/class/StepperBuilder";
import { StudiesSteppers, worksSteppers } from "@/shared/data/DataStepperBuilder";
import { DefaultNavigationHeader } from "@/shared/layout/DefaultNavigationHeader";

function Title({ title }: { title: string }) {
	return (
		<h2
			className={`
						w-fit xs:my-4 sm:my-4 md:my-6 lg:my-8 xl:my-10 xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
						bg-gradient-to-r from-Primary to-TXT300 bg-clip-text text-transparent 
					`}
		>{title}</h2>
	);
}

export default function About() {
	return (
		<>
			<DefaultNavigationHeader />
			<main className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72 pb-4 xl:pb-12">
				<section className="flex flex-col">
					<Title title="Sobre mim" />
					<div className="flex flex-col gap-5 text-TXT100 xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-base">
						<p>Com uma trajetória profissional diversificada e uma paixão pela excelência, trago uma combinação única de habilidades e experiências para cada projeto que assumo. Sou reconhecido por minha dedicação e foco no resultado, sempre buscando superar as expectativas dos clientes.</p>
						<p>Minha abordagem centrada no cliente e minha capacidade de adaptação garantem que eu possa entregar soluções sob medida para cada desafio. Estou constantemente buscando aprender e me aprimorar, mantendo-me atualizado com as últimas tendências e práticas da indústria.</p>
						<p>Com uma sólida base de conhecimento e uma mentalidade de crescimento, estou pronto para enfrentar qualquer desafio e agregar valor aos projetos de meus clientes.</p>
						<p>Para saber mais sobre como posso contribuir para o seu projeto, fique à vontade para fazer o download do meu currículo abaixo.</p>
					</div>
					<div className="w-full gap-6 h-fit flex flex-col items-center justify-center xs:my-4 sm:my-4 md:my-6 lg:my-8 xl:my-10 relative">
						<p className="xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-TXT300">Baixar Currículo</p>
						<a className="w-[55px] h-[50px] border-none outline-none cursor-pointer select-none touch-manipulation rounded-full relative duration-300">
							<span className="bg-TXT300 rounded-full absolute left-0 top-0 w-full h-full"></span>
							<span className="bg-Primary rounded-full shadow-sm shadow-Primary absolute border border-Primary left-0 top-0 w-full h-full flex justify-center items-center text-xl font-semibold -translate-y-[15%] duration-150 text-Line active:translate-y-[0%] active:shadow-none"></span>
						</a>
					</div>
				</section>
				<section className="flex flex-col">
					<Title title="Experiência Profissional" />
					<StepperBuilder data={worksSteppers} />
				</section>
				<section className="flex flex-col mt-4">
					<Title title="Graduações e Cursos" />
					<StepperBuilder data={StudiesSteppers} />
				</section>
			</main>
		</>
	);
}
