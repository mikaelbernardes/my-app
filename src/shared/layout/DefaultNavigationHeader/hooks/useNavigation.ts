import { usePathname } from "next/navigation";

export function useNavigation() {

	const dataLinks: { name: string, pathname: string }[] = [
		{
			name: "Atualizações",
			pathname: "/"
		},
		{
			name: "Sobre",
			pathname: "/about"
		},
		{
			name: "Posts",
			pathname: "/posts"
		},
		{
			name: "Projetos",
			pathname: "/projects"
		}
	];

	const usePathName = usePathname();

	return {
		dataLinks,
		usePathName
	};
}
