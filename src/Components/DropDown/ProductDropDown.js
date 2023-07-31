import { useState } from "react"
import Plus from "../../Svg/Plus"

export default function ProductDropDown({ title, text, height }) {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <section aria-label='drop-down-section' className="relative h-fit w-full cursor-pointer mb-[0.4em]">
            <div onClick={() => setShowDropDown(c => !showDropDown)} className="relative w-full h-fit flex flex-row justify-between">
                <div className="relative w-fit h-fit pt-2">
                <h2 className="relative text-start font-quicksandregular text-[0.8em] text-gray-600 capitalize">
                    {title}
                </h2>
                </div>
                <div className="relative w-[2em] h-[2em]">
                    <Plus />
                </div>
            </div>
            < hr style={{ marginBottom: "0.2em", }} />
            <div className={`${showDropDown ? 'h-fit' : 'h-0'} relative w-full h-fit overflow-hidden transition-all duration-300 ease-in-out`}>

                <div className="relative w-full h-fit">
                    <h3 className="capitalize font-quicksandBold text-gray-500 text-start text-[0.7em] font-bold
                                 transition-all duration-200 ease-in-out">
                        {text}
                    </h3>
                </div>
            </div>
        </section>
    )
}