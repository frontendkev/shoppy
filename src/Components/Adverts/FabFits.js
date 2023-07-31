

export default function FabFits() {
    return (
        <>
            <div className="relative w-full h-[13em] landscape:lg:h-[13em] landscape:xl:h-[15em] portrait:h-[10.65em] portrait:sm:h-[12em] landscape:h-[11em] bg-gradient-to-r from-white via-rose-300 to-white">
                <div className="relative w-fit h-full mx-auto text-center pt-2 flex flex-col gap-y-2 landscape:lg:gap-y-1 portrait:lg:gap-y-1 portrait:sm:gap-y-[0.5em]">
                    <div className="relative landscape:w-[4.5em] landscape:xl:w-[5em] portrait:w-[5em] landscape:xl:h-[2em] portrait:sm:w-[6em] portrait:h-[1.5em] portrait:sm:h-[1.8em] portrait:lg:h-[2em] landscape:h-[1.6em] mx-auto rounded-[4em] bg-gray-900 flex justify-center items-center">
                        <h2 className="relative text-center text-white font-quicksandBold text-[0.7em] lg:text-[0.8em] uppercase portrait:sm:text-[1em]">
                            sale
                        </h2>
                    </div>
                    <h2 className="font-quicksandBold text-[1em] landscape:xl:text-[1.7em] portrait:lg:text-[1.5em] uppercase text-gray-800 font-black leading-[1.3em] landscape:xl:leading-[1.2em] portrait:lg:leading-[1.2em]">
                        extra 20% off <br />
                        sporty brands!
                    </h2>

                    <h2 className="font-quicksandBold text-[1em] lg:text-[2em] portrait:lg:text-[1.5em] uppercase text-gray-800 font-black portrait:sm:text-[1.4em] italic ">
                       up to 70% off already!
                    </h2>

                    <h4 className="font-quicksandsemibold lowercase text-[1em] lg:text-[1.5em] text-gray-800 font-black">
                        it's a treat-yo'self day!
                    </h4>

                    <h6 className="relative font-quicksandregular text-[0.5em] lg:text-[0.7em]">
                        limited time only, selected styles marked down on site.
                    </h6>
                </div>
            </div>
        </>
    )
}