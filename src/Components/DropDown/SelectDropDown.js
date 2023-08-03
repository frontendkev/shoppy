import {useEffect, useState} from "react";
import ArrowDown from "../../Svg/ArrowDown";
import Check from "../../Svg/Check";

export const SelectDropDown = ({ children, id, optionsId, value, optBoxClass, showDefault, filter }) => {


    const [translate, setTranslate] = useState(false)
    const container = document.getElementById(`${id}`)
    const options = document.getElementById(`${optionsId}`)
    const [toggleOptions, setToggleOptions] = useState(false)

    function displayOptions() {
        setTranslate(c => !translate)
    }


    function hideOptions () {
        options.classList.remove('z-10')
        options.classList.remove('opacity-100')
        options.classList.remove('max-h-[28em]')
        options.classList.add('opacity-0')
        options.classList.add('z-0')
        options.classList.add('hidden')
        setToggleOptions(c => false)
    }

    function showOptions () {
        options.classList.add('opacity-100')
        options.classList.add('z-10')
        options.classList.add('max-h-[28em]')
        options.classList.remove('opacity-0')
        options.classList.remove('z-0')
        options.classList.remove('hidden')
        setToggleOptions(c => true)
    }

    useEffect(() => {
        window.addEventListener('click', (event) => {
            if (container && !container.contains(event.target)) {
                if (!toggleOptions) {
                    return hideOptions()
                }
            }
            else if (container && container.contains(event.target)) {
                if (!toggleOptions) {
                    return showOptions()
                }
                else if (toggleOptions) {
                    return hideOptions()
                }
            }
        })
    }, [translate])


    return (
        <div className="relative w-fit h-fit">
            < hr style={{ marginBottom: "0.2em", borderTop: "0.5px solid rgb(0, 0, 0, 0.3)" }} />
            <div id={id} className={"relative portrait:w-[9em] landscape:w-[10em] landscape:md:w-[8em] portrait:h-[1.3em] landscape:h-[1.3em] landscape:pt-0 pt-1 bg-inherit landscape:lg:w-[10em] portrait:sm:w-[8em] portrait:sm:h-[1.3em] portrait:sm:pt-0 portrait:sm:gap-x-2 portrait:pt-0"}>
                <div
                    onClick={() => displayOptions()}
                    className={`absolute w-full h-fit z-5 bg-inherit cursor-pointer pl-1 pr-1`}>

                    <h2 className={"font-quicksandregular text-gray-500 capitalize portrait:text-[0.75em] landscape:text-[0.75em] float-left portrait:sm:text-[0.75em]"}>
                        {value ? value : 'value'}
                    </h2>

                    <div className="relative w-fit h-full float-right pt-1">
                        <ArrowDown className={'w-3 h-3 float-right'} />
                    </div>
                </div>

                <div
                    id={optionsId}
                    className={`relative shadow-light transition-all flex flex-col gap-y-2 duration-300 bg-gray-200 rounded-[0.2em] ease-in-out top-[1.9em] overflow-hidden ${optBoxClass ? optBoxClass : "w-[16em]"} z-0 opacity-0 hidden portrait:w-[10em] portrait:sm:w-[9em] landscape:w-full landscape:md:w-[9em]  landscape:lg:w-full`}>
                    {
                        showDefault && <div className="relative w-full h-[4em] portrait:h-[3em] portrait:pt-[0.5em] bg-gray-100 pt-[1em] pl-2 pr-2 shadow-bottom">
                            <button className="relative w-full h-[1.8em] pr-2 pl-2 shadow-light outline-gray-600 flex gap-x-1 flex-row items-center justify-between">
                                <Check className={'relative w-3 h-3 float-left'} />
                                <h2 className="uppercase float-right font-quicksandBold text-gray-600 text-[0.65em]">
                                    {filter}
                                </h2>
                            </button>
                        </div>
                    }

                    <div className="relative w-full cursor-pointer h-fit pl-2 pr-2 pt-2 portrait:pt-1 flex flex-col gap-y-2 justify-center items-center">
                        {children}
                    </div>


                </div>
            </div>
            < hr
                style={{
                    marginBottom: "0.2em",
                    borderTop: "0.5px solid rgb(0, 0, 0, 0.3)"
                }} />
        </div>

    )
}


export const PriceRange = ({ min, interval, max, getPrice }) => {
    return (
        <>
            <div className="relative w-full h-[4em] portrait:h-[2.7em] bg-gray-100 pt-[0.2em] portrait:sm:pl-[0.2em] pl-[0.5em] pr-[0.5em] text-start leading-[1.5em] portrait:leading-[1em]">
                <h2 className="font-quicksandregular text-gray-700 text-[0.8em] portrait:text-[0.7em] portrait:sm:text-[0.6em] landscape:md:text-[0.6em] landscape:text-[0.6em] capitalize">
                    price range selected
                </h2>
                <h2 className="font-quicksandregular text-gray-700 text-[0.8em] portrait:sm:text-[0.6em] portrait:text-[0.7em] landscape:md:text-[0.6em] landscape:text-[0.6em] capitalize">
                    NGN 1000 - NGN {getPrice().price}
                </h2>
                < hr style={{ position: 'absolute', width: "100%", borderBottom: '1px solid rgb(0, 0, 0, 0.2)', bottom: '0em', left: "0" }} />
            </div>
            <div className="relative w-full h-[5em] landscape:md:h-[4.3em] mb-[0.5em] bg-white">
                <div className="relative w-full pl-2 pr-2 pt-2 h-[2em] flex flex-row justify-between">
                    <h2 className="text-gray-700 font-quicksandsemibold text-[0.7em] portrait:text-[0.6em] landscape:md:text-[0.6em] landscape:text-[0.6em]">
                        NGN {max ? Math.ceil(max / 3) : 5000}
                    </h2>
                    <h2 className="text-gray-700 font-quicksandsemibold text-[0.7em] float-right  portrait:text-[0.6em] landscape:md:text-[0.6em] landscape:text-[0.6em]">
                        NGN {min ? Math.ceil(min * 2) : 15000}
                    </h2>
                    <h2 className="text-gray-700 font-quicksandsemibold text-[0.7em]  portrait:text-[0.6em] landscape:md:text-[0.6em] landscape:text-[0.6em]">
                        NGN {max ? max : 20000}
                    </h2>
                </div>
                <div className="relative w-full h-[3em] pl-2 pr-2">
                    <input
                        type={'range'}
                        className={'relative w-full h-[2em]'}
                        min={min ? min : 50}
                        step={interval ? interval : Math.ceil(max / 3)}
                        max={max ? Math.ceil(min * 3) : 100}
                        onChange={(e) => getPrice().setPrice(e.target.value)}

                    />
                </div>
            </div>
        </>
    )
}