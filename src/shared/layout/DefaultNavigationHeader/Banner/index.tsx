
function Banner() {
	return (
		<div 
			className={`
		bg-Primary xs:w-full xs:h-[76px] sm:h-[126px] md:h-[200px] lg:h-[260px] xl:h-[260px] md:mx-24 lg:mx-40 xl:mx-56 flex flex-col items-end justify-center relative xs:px-2 
		sm:px-4 md:px-5 lg:px-9 xl:px-10 md:rounded-3xl lg:rounded-3xl xl:rounded-3xl
		`}
		>
			<h1 className="text-BG100 xs:text-sm sm:text-sm md:text-lg lg:text-4xl xl:text-4xl">Mikael Bernardes</h1>
			<p className="text-BG300 xs:text-[8px] sm:text-[10px] md:text-sm lg:text-lg xl:text-lg italic">Conectando pessoas, potencializando negócios</p>
		</div>
	);
}

export { Banner };

