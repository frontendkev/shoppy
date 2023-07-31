import { useState } from "react"


export default function DropDown({ drop, links, title, height, filter, className, line, textClass }) {
    const [showDropDown, setShowDropDown] = useState(drop)
    return (
        <section aria-label='drop-down-section' className="relative h-fit w-fit cursor-pointer mb-[0.4em]">
            <div onClick={() => setShowDropDown(c => !showDropDown)} className={className ? className : "relative w-full h-fit"}>
                <h2 className={textClass ? textClass : "relative text-start font-quicksandBold text-[0.7em] font-bold text-gray-600 capitalize"}>
                    {title}
                </h2>
            </div>
           { line && < hr style={{ marginBottom: "0.2em", }} />}
            <div className={`${showDropDown ? height : 'h-0'} relative w-full h-fit overflow-hidden transition-all duration-300 ease-in-out`}>
                {
                    links.map((item, index) => {
                        return (
                            <div key={index} className="relative w-full h-fit">
                                <h3 onClick={() => filter && filter(item.gender, item.type)} className="capitalize font-quicksandBold text-gray-500 text-start text-[0.7em] font-bold
                                hover:underline hover:text-orange-400 transition-all duration-200 ease-in-out">
                                    {item.text}
                                </h3>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}