


export default function Ratings({ title, optionOne, optionTwo, className }) {
    return (
        <div className="relative w-full h-fit flex flex-col gap-y-2 portrait:md:gap-y-1">
            <div className="relative w-full h-fit">
                <h2 className="relative text-start text-[0.9em] font-quicksandBold text-gray-800">
                    {title+':'}
                </h2>
            </div>
            <div className="relative w-full h-[0.8em] bg-gray-200 overflow-hidden">
                <div className={`relative w-[10%] h-full bg-gray-700 ${className}`}>

                </div>
            </div>
            <div className="relative w-fill h-fit">
                <h2 className="relative float-left font-quicksandregular text-gray-800 capitalize text-[0.7em]">
                    {optionOne}
                </h2>

                <h2 className="relative float-right font-quicksandregular text-gray-800 capitalize text-[0.7em]">
                    {optionTwo}
                </h2>
            </div>
        </div>
    )
}