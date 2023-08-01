import { useRef, useState } from "react"
import LeftArrow from "../../Svg/LeftArrow"
import RightArrow from "../../Svg/RightArrow"

export default function Limited({ children, btnClass, className }) {

    const [count, setCount] = useState(0)
    const length = 6

    const nextBtn = useRef()
    const prevBtn = useRef()

    function scrollFunction(direction) {

        switch (direction) {

            case "next": {
                if (count < length - 1) {
                    nextBtn.current.disabled = false
                    prevBtn.current.disabled = false
                    return setCount(c => c + 1)
                }
                else if (count === length - 1) {
                    nextBtn.current.disabled = true
                    return setCount(c => count)
                }
                return;

            }

            case "prev": {
                if (count > 0) {
                    prevBtn.current.disabled = false
                    nextBtn.current.disabled = false
                    return setCount(c => c - 1)
                }
                else if (count === 0) {
                    prevBtn.current.disabled = true
                    return setCount(c => count)
                }
                return;
            }

            default: return direction
        }



    }



    return (
        <div className={`${className} relative w-full h-fit portrait:sm:h-[30em] landscape:lg:h-[33em] landscape:lg:mt-0 landscape:lg:mb-0 mt-[3em] mb-[3em] pt-2 pb-2 sm:pt-4 sm:pb-2 md:mt-0 md:mb-0 flex flex-col landscape:lg:items-center gap-y-4 landscape:gap-y-2 landscape:lg:gap-y-2`}>

            <div className="relative w-[90%] lg:w-fit h-fit mx-auto text-center lg:pt-1">
                <div className="relative w-[4em] landscape:lg:w-[6em] landscape:w-[5em] landscape:h-[1.6em] h-[1.7em] landscape:lg:h-[2em] mx-auto rounded-[4em] bg-gray-900 flex items-center justify-center">
                    <h2 className="relative text-center text-gray-300 font-quicksandBold text-[0.8em] landscape:lg:text-[0.9em] landscape:text-[0.8em] uppercase">
                        sale
                    </h2>
                </div>
                <h2 className="font-quicksandBold text-[1.5em] landscape:lg:text-[2.3em] landscape:text-[1em] uppercase text-gray-700 font-black italic">
                    up to 60% off the sale!
                </h2>

                <h4 className="font-quicksandsemibold lowercase text-[1em] landscape:lg:text-[1.5em] landscape:text-[0.8em] text-gray-700 font-black">
                    it's a treat-yo'self day!
                </h4>

                <h6 className="relative font-quicksandregular text-[0.6em] lg:text-[0.7em] lg:mt-[0.5em] text-gray-700">
                    limited time only, selected styles marked down on site.
                </h6>
            </div>

            <div className="relatve portrait:w-[20.5em] portrait:sm:w-[31em] landscape:w-[31em] landscape:md:w-[41.5em] landscape:lg:w-[62.5em] mx-auto portrait:h-[15em] overflow-hidden landscape:h-[17em]">
                
                <div className="left-0 absolute landscape:lg:hidden landscape:xl:hidden z-10 w-full h-[4em] bottom-[40%] flex flex-row justify-between items-center pl-4 pr-4">
                    <button
                        onClick={() => scrollFunction('prev')}
                        ref={prevBtn}
                        className="relative group w-[3em] h-[3em] rounded-full overflow-hidden shadow-light">
                        <LeftArrow
                            className={'relative w-6 h-6 mx-auto z-[10] group-disabled:opacity-[0.5]'}
                            stroke={"rgb(0, 0, 0, 0.5"}
                            fill={'rgb(0,0,0,0.5)'} />
                        <div className={"transition-all z-[5] duration-300 ease-in-out absolute group-disabled:opacity-[0.2] bg-gray-300 opacity-[0.7] w-[3em] h-[3em] top-0"}>

                        </div>

                    </button>
                    <button
                        onClick={() => scrollFunction('next')}
                        ref={nextBtn}
                        className="relative group w-[3em] h-[3em] rounded-full overflow-hidden shadow-light">
                        <RightArrow
                            className={'relative w-6 h-6 mx-auto z-[10] group-disabled:opacity-[0.5]'}
                            stroke={"rgb(0, 0, 0, 0.5"}
                            fill={'rgb(0,0,0,0.5)'} />
                        <div className={"transition-all z-[5] duration-300 ease-in-out absolute group-disabled:opacity-[0.2] bg-gray-300 opacity-[0.7] w-[3em] h-[3em] top-0"}>

                        </div>

                    </button>
                </div>


                <div
                    id='slider'
                    style={{ transform: `translateX(calc(-${count}*16.7%))` }}
                    className={`relative w-fit h-full flex flex-row justify-start gap-x-2 transition-all duration-300 ease-in-out`}>
                    
                    {children}
                    
                </div>
            </div>

            <div
                className={`relative w-full h-fit pt-[2em] bottom-[1.8em]`}>
                <button
                    className={`${btnClass} relative w-[6em] landscape:w-[8em] landscape:h-[2.5em] shadow-light h-[2em] mx-auto bg-white font-quicksandBold text-[0.8em] landscape:text-[0.8em] uppercase text-gray-800 text-center`}>
                    view all
                </button>
            </div>
        </div>
    )
}