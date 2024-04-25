import { DataStepperBuilder } from "@/@types/Stepper";
import CartsysLogo from "@public/cartsysLogo.jpeg";
import ProcipaLogo from "@public/procipaLogo.jpeg";
import ExercitoBrasileiroLogo from "@public/exercitoBrasileiroLogo.jpeg";
import PrefeituraCristinaLogo from "@public/prefeituraCristinaLogo.png";
import RocketseatLogo from "@public/rocketseatLogo.jpeg";
import UdemyLogo from "@public/udemyLogo.jpeg";
import DevQuestLogo from "@public/devquestLogo.jpeg";
import AmpliLogo from "@public/ampliLogo.jpeg";

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
		timeLapse: "Fevereiro de 2021 - Janeiro de 2021",
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
		title: "Faculdade Ampli",
		subTitle: "Egenharia de Software",
		timeLapse: "Abril de 2024 - O momento",
		content: "Curso dos gêmeos DevEmDobro com mentoria e suporte de Dev's Sênior's",
		image: AmpliLogo,
		link: "https://www.ampli.com.br/"
	},
	{
		title: "Udemy",
		subTitle: "Curso de UML",
		timeLapse: "",
		content: "Curso avançado de criação de UML com o renomado professor Nélio Alves",
		image: UdemyLogo,
		link: "https://www.udemy.com/"
	},
	{
		title: "Udemy",
		subTitle: "Curso de Spring Boot e Micro Serviços",
		timeLapse: "",
		content: "Curso avançado de Spring Boot com padrão de micro serviços com o renomado professor Nélio Alves",
		image: UdemyLogo,
		link: "https://www.udemy.com/"
	},
	{
		title: "Udemy",
		subTitle: "Curso de Java",
		timeLapse: "",
		content: "Curso avançado de Java com o renomado professor Nélio Alves",
		image: UdemyLogo,
		link: "https://www.udemy.com/"
	},
	{
		title: "Udemy",
		subTitle: "Curso de ReactJS/NextJS",
		timeLapse: "",
		content: "Curso avançado em frontend com framework NextJS e a lib ReactJS com ênfase no estudo por padrões de arquitetura com o professor Luiz Otávio Miranda",
		image: UdemyLogo,
		link: "https://www.udemy.com/"
	},
	{
		title: "DevQuest",
		subTitle: "Curso de Frontend",
		timeLapse: "",
		content: "Curso dos gêmeos DevEmDobro com mentoria e suporte de Dev's Sênior's",
		image: DevQuestLogo,
		link: "https://devemdobro.com/devquest-starter/"
	},
	{
		title: "RocketSeat",
		subTitle: "Curso de Frontend",
		timeLapse: "",
		content: "Curso de introdução a programação frontend na Rocketseat",
		image: RocketseatLogo,
		link: "https://www.rocketseat.com.br/"
	},
];
