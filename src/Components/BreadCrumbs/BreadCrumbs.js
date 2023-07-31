import { Link, useMatches } from "react-router-dom"
import RightArrow from "../../Svg/RightArrow"


export default function BreadCrumbs() {
    const matches = useMatches()
    let crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data))
    
    return (
        <>
            <div className="relative portrait:w-full w-fit portrait:h-[1.6em] h-[2em] landscape:xl:h-[1.8em] flex flex-row justify-start portrait:pl-2 landscape:xl:pl-5 items-center gap-x-1">
                {
                    crumbs.map((crumb, index) => {
                        return (
                                <div key={index} className="relative group w-fit h-fit p-2 text-black last:text-rose-500 flex flex-row items-center justify-center gap-x-1">
                                    <h1 className="capitalize text-[0.7em] md:text-[0.8em] text-gray-500 font-quicksandsemibLinkd hover:underline hover:group-last:no-underline ease-in-out transition-all duration-300">
                                        {crumb}
                                    </h1>

                                    <div className="relative w-3 h-full group-last:hidden">
                                        <RightArrow className={'relative w-3 h-3 stroke-2 stroke-gray-800'} />

                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}