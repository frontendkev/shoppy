


export default function Filter({children}) {

   

    return (
        <section
            aria-label="filter-section"
            className="relative w-full bg-gray-200 h-fit landscape:md:h-[6em] landscape:lg:h-[8em]  z-20 ">

            <div
                className="relative w-[95%] portrait:sm:w-[42.5em] h-full bg-inherit mx-auto flex flex-row flex-wrap gap-x-2 items-center gap-y-[-3em] portrait:pr-2 portrait:justify-center landscape:gap-x-4 landscape:pl-2 landscape:pr-2 landscape:md:justify-center landscape:md:pr-2 landscape:md:pl-2 landscape:md:flex-nowrap landscape:md:gap-x-2 portrait:sm:justify-start portrait:lg:justify-center">
                
                {
                    children
                }


            </div>

        </section>
    )
}