import { DataStepperBuilder } from "@/@types/Stepper";
import CartsysLogo from "@public/cartsysLogo.jpeg";
import ProcipaLogo from "@public/procipaLogo.jpeg";
import ExercitoBrasileiroLogo from "@public/exercitoBrasileiroLogo.jpeg";
import PrefeituraCristinaLogo from "@public/prefeituraCristinaLogo.png";


export const SteppersArray: DataStepperBuilder[] = [
	{
		title: "Cartsys Software Ltda.",
		subTitle: "Desenvolvedor Frontend",
		timeLapse: "Agosto de 2023 - O momento",
		content: "Atuei como desenvolvedor Frontend Pleno, utilizando meu conhecimento em tecnologias como NextJs, TailwindCSS, Zustand",
		image: CartsysLogo
	},
	{
		title: "Freelancer",
		subTitle: "Desenvolvedor FullStack",
		timeLapse: "Fevereiro de 2022 - Abril de 2023",
		content: "Desenvolvedor Fullstack atuando majoritariamente com React Native, NextJS, Java, Spring Boot e SQL"
	},
	{
		title: "Procipa Ltda.",
		subTitle: "Desenvolvedor Frontend",
		timeLapse: "Janeiro de 2022 - Abril de 2022",
		content: "Atuei com acabamento de artefatos de couro para EPI's liderando o setor de empacotamento e amarração",
		image: ProcipaLogo
	},
	{
		title: "Exército Brasileiro",
		subTitle: "Desenvolvedor Frontend",
		timeLapse: "Fevereiro de 2021 - Janeiro de 2021",
		content: "Soldado EV Corneteiro no 4° Batalhão de Engenharia de Combate de Itajubá/MG",
		image: ExercitoBrasileiroLogo
	},
	{
		title: "Prefeitura de Cristina/MG",
		subTitle: "Professor de Música",
		timeLapse: "Fevereiro de 2020 - Novembro de 2020",
		content: "Professor de Musicalização Infantil e construção de instrumentos com materiais recicláveis, projeto da Prefeitura de Cristina Minas Gerais",
		image: PrefeituraCristinaLogo
	}
];
