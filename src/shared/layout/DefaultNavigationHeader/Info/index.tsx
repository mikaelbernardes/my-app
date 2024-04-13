
function Info() {
	return(
		<div className="flex flex-col xs:gap-3 items-start px-5 mt-8">
			<section className="flex flex-col xs:gap-[2px] items-start">
				<h1 className="text-TXT100 italic font-medium xs:text-sm">Mikael Bernardes</h1>
				<p className="text-TXT300 italic font-light xs:text-[8px]">@mikaelbernardes</p>
			</section>
			<section>
				<p className="text-TXT100 font-light xs:text-[10px]">Engenheiro de Software | Java | Typescript</p>
			</section>
			<section className="flex items-center xs:gap-4">
				<div>
					<p className="text-Primary font-normal text-[8px]">mikaelbernardes</p>
				</div>
				<div>
					<p className="text-TXT300 font-normal text-[8px]">desde 22/02/2021</p>
				</div>
			</section>
			<section className="flex items-center xs:gap-4">
				<p className="text-TXT300 font-light xs:text-[8px]"><span className="text-TXT100 font-medium">4.202 </span> Seguindo</p>
				<p className="text-TXT300 font-light xs:text-[8px]"><span className="text-TXT100 font-medium">4.593 </span> Seguidores</p>
			</section>
		</div>
	);
}
export { Info };
