/* eslint-disable max-len */
import { DataStepperBuilder } from "@/@types/Stepper";
import CartsysLogo from "@public/cartsysLogo.jpeg";
import ProcipaLogo from "@public/procipaLogo.jpeg";
import ExercitoBrasileiroLogo from "@public/exercitoBrasileiroLogo.jpeg";
import PrefeituraCristinaLogo from "@public/prefeituraCristinaLogo.png";
import RocketseatLogo from "@public/rocketseatLogo.jpeg";
import UdemyLogo from "@public/udemyLogo.jpeg";
import DevQuestLogo from "@public/devquestLogo.jpeg";
import WorkanaLogo from "@public/workanaLogo.jpeg";

export const worksSteppers: DataStepperBuilder[] = [
	{
		title: "Cartsys Software Ltda.",
		subTitle: "Desenvolvedor Frontend",
		timeLapse: "Agosto de 2023 - O momento",
		content: "Atuei como desenvolvedor Frontend Pleno, utilizando meu conhecimento em tecnologias como NextJs, TailwindCSS, Zustand",
		image: CartsysLogo,
		link: "https://www.cartsys.com.br/"
	},
	{
		title: "Freelancer",
		image: WorkanaLogo,
		
		subTitle: "Desenvolvedor FullStack",
		timeLapse: "Fevereiro de 2022 - O momento",
		content: "Desenvolvedor Fullstack atuando majoritariamente com React Native, NextJS, Java, Spring Boot e SQL"
	},
	{
		title: "Procipa Ltda.",
		subTitle: "Gerente de Setor",
		timeLapse: "Janeiro de 2022 - Abril de 2022",
		content: "Atuei com acabamento de artefatos de couro para EPI's liderando o setor de empacotamento e amarração",
		image: ProcipaLogo,
		link: "https://procipa.com.br/"
	},
	{
		title: "Exército Brasileiro",
		subTitle: "Soldado EV",
		timeLapse: "Fevereiro de 2021 - Janeiro de 2022",
		content: "Soldado EV Corneteiro no 4° Batalhão de Engenharia de Combate de Itajubá/MG",
		image: ExercitoBrasileiroLogo,
		link: "https://www.eb.mil.br/"
	},
	{
		title: "Prefeitura de Cristina/MG",
		subTitle: "Professor de Música",
		timeLapse: "Fevereiro de 2020 - Dezembro de 2020",
		content: "Professor de Musicalização Infantil e construção de instrumentos com materiais recicláveis, projeto da Prefeitura de Cristina Minas Gerais",
		image: PrefeituraCristinaLogo,
		link: "https://www.cristina.mg.gov.br/"
	}
];

export const StudiesSteppers: DataStepperBuilder[] = [
	{
		title: "Udemy",
		subTitle: "Cursos",
		timeLapse: "",
		content: "Cursos básicos e avançados tanto em frontend com typescript como backend com Java, diversos cursos e vertificados que agregam valor ao meu conhecimento, clique no link do título para ter acesso a todos",
		image: UdemyLogo,
		link: "https://www.udemy.com/"
	},
	{
		title: "RocketSeat",
		subTitle: "Curso Fullstack",
		timeLapse: "",
		content: "Curso focado em Javascript com React | NextJS | React Native e atualizado com aulas de Java | IA e cursos básicos como Figma",
		image: RocketseatLogo,
		link: "https://www.rocketseat.com.br/"
	},
	{
		title: "DevQuest",
		subTitle: "Curso de Frontend",
		timeLapse: "",
		content: "Curso dos gêmeos DevEmDobro com mentoria e suporte de Dev's Sênior's onde iniciei meus estudos de programação Frontend",
		image: DevQuestLogo,
		link: "https://devemdobro.com/devquest-starter/"
	}
];
