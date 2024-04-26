export default function Loading() {

	return (
		<>
			<header className="animate flex flex-col xs:gap-6 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 md:mt-6 lg:mt-10 xl:mt-14 w-full h-fit relative">
				<div
					className={` animate-pulse
		                bg-Line xs:w-full xs:h-[76px] sm:h-[126px] md:h-[200px] lg:h-[260px] xl:h-[260px] md:mx-24 lg:mx-40 xl:mx-56 flex flex-col items-end 
                        justify-center relative xs:px-2 sm:px-4 md:px-5 lg:px-9 xl:px-10 md:rounded-3xl lg:rounded-3xl xl:rounded-3xl
		            `}
				></div>
				<div
					className={` animate-pulse
					absolute xs:w-20 sm:w-28 md:w-40 lg:w-48 xl:w-52 xs:h-20 sm:h-28 md:h-40 lg:h-48 xl:h-52 rounded-full border-2 border-BG100 bg-Line
					bg-cover bg-center xs:left-5 sm:left-16 md:left-32 lg:left-56 xl:left-72 xs:top-9 sm:top-16 md:top-[110px] lg:top-[146px] xl:top-[146px]
				`}
				/>
				<div
					className={`
				absolute xs:top-[86px] sm:top-36 md:top-56 lg:top-72 xs:right-3 sm:right-5 md:right-28 lg:right-44 flex items-center xs:gap-3 sm:gap-3 md:gap-6 lg:gap-8
				xl:top-72 right-60 xl:gap-8
				`}
				>
					<div
						className={` animate-pulse
                            w-fit h-fit flex items-center justify-center bg-Line rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-inner 
                            hover:translate-y-1 duration-300 p-2 text-TXT300  shadow-TXT300 
                        `}
					></div>
					<div
						className={` animate-pulse
                            w-fit h-fit flex items-center justify-center bg-Line rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-inner 
                            hover:translate-y-1 duration-300 p-2 text-TXT300  shadow-TXT300 
                        `}
					></div>
					<div
						className={` animate-pulse
                            w-fit h-fit flex items-center justify-center bg-Line rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-inner 
                            hover:translate-y-1 duration-300 p-2 text-TXT300  shadow-TXT300 
                        `}
					></div>
					<div
						className={` animate-pulse
                            w-fit h-fit flex items-center justify-center bg-Line rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-inner 
                            hover:translate-y-1 duration-300 p-2 text-TXT300  shadow-TXT300 
                        `}
					></div>
				</div>
				<div
					className={`
			flex flex-col xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 items-start xs:px-5 sm:px-16 md:px-32 lg:px-56 xl:px-72 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 w-full
			`}
				>
					<section className=" flex flex-col gap-[2px] items-start w-1/2">
						<div className="animate-pulse text-TXT100 bg-Line italic font-medium xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl w-1/3 h-2"></div>
						<p className="animate-pulse text-TXT300 bg-Line italic font-light xs:text-[8px] sm:text-xs md:text-xs lg:text-sm xl:text-sm w-1/3 h-2"></p>
					</section>
					<section className="w-1/2">
						<p className="animate-pulse text-TXT100 bg-Line font-light xs:text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-lg w-1/3 h-2"></p>
					</section>
					<section className="flex items-center xs:gap-4 sm:gap-4 md:gap-10 lg:gap-16 xl:gap-20 w-1/2">
						<div className=" flex items-center xs:gap-[2px] sm:gap-1 md:gap-2 lg:gap-3 xl:gap-3 w-1/2">
							<div
								className="animate-pulse text-Primary bg-Line font-normal xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-base w-1/3 h-2"
							></div>
						</div>
						<div className=" flex items-center xs:gap-[2px] sm:gap-1 md:gap-2 lg:gap-3 xl:gap-3 w-1/2">
							<div className="animate-pulse text-TXT300 bg-Line font-normal xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-base w-1/3 h-2"></div>
						</div>
					</section>
					<section className=" flex items-center xs:gap-4 sm:gap-4 md:gap-10 lg:gap-16 xl:gap-20 w-1/2">
						<p className="animate-pulse text-TXT300 font-light xs:text-[8px] bg-Line sm:text-xs md:text-sm lg:text-base xl:text-base w-1/3 h-2"></p>
						<p className="animate-pulse text-TXT300 bg-Line font-light xs:text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-base w-1/3 h-2"></p>
					</section>
				</div>
				<div className="xs:w-full h-1 bg-Line flex xs:px-5 sm:px-5 md:px-6 lg:px-16 xl:px-16 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-56 justify-between">
				</div>
			</header>
		</>
	);
}
