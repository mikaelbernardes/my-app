import Link from "next/link";

function Navigation() {

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

	return(
		<div className="w-full h-fit border-b-[0.5px] border-Line flex xs:px-5 justify-between pb-1">
			{
				dataLinks.map((item, index) => (
					<Link
						href={item.pathname}
						className="text-TXT300 font-light text-[10px]"
						key={index}
					>{item.name}</Link>
				))
			}
		</div>
	);
}

export { Navigation };
