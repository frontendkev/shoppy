import Star from "../../Svg/Star"
import Ratings from "../Ratings/Ratings"


export default function Reviews({type}) {
    return (
        <>
            <div className="relative w-full h-fit portrait:md:h-[35vh] flex flex-col-reverse portrait:sm:flex-row portrait:sm:items-center portrait:sm:justify-between portrait:md:pl-[2em] portrait:md:pr-[2em] gap-y-4 landscape:flex-row landscape:justify-between landscape:w-[90%] landscape:xl:w-[80%] landscape:mx-auto">


                <div className="relative w-[90%] landscape:w-[40%] landscape:lg:w-[35%] landscape:xl:w-[30%] mx-auto md:mx-0 portrait:sm:w-[40%] portrait:md:w-[35%] h-full flex flex-col gap-y-4">
                    <div className="relative w-full h-fit">
                        <h1 className="relative text-[0.8em] text-gray-800 font-quicksandBold text-start uppercase">
                            reviews
                        </h1>
                    </div>

                    <div className="relative w-full h-fit flex flex-col gap-y-1">
                        <div className="relative flex flex-row w-full h-fit justify-start items-center gap-x-2">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />

                            <h1 className="relative text-[0.8em] font-quicksandregular text-gray-800">
                                4.8
                            </h1>

                            <h1 className="relative text-[0.8em] font-quicksandregular text-gray-800">
                                (2,500)
                            </h1>
                        </div>

                        <div className="relative w-full h-fit">
                            <h3 className="relative text-[0.7em] font-quicksandsemibold text-start capitalize text-gray-400">
                                97% of customers recommend this product
                            </h3>
                        </div>

                    </div>

                    <div className="relative w-full h-fit flex flex-col gap-y-2">
                        <div className="relative w-full h-fiy">
                            <h1 className="text-start font-quicksandBold text-[0.7em] text-gray-600 uppercase">
                                customer rating
                            </h1>
                        </div>

                        <Ratings title={'size'} optionOne={'runs small'} optionTwo={'runs large'} className={'translate-x-[450%]'} />
                        <Ratings title={'comfort'} optionOne={'uncomfortable'} optionTwo={'comfortable'} className={'translate-x-[750%]'} />
                        <Ratings title={'quality'} optionOne={'poor'} optionTwo={'great'} className={'translate-x-[780%]'} />
                    </div>

                </div>



                <div className="relative w-[90%] landscape:w-[40%] landscape:lg:w-[35%] landscape:xl:w-[30%] mx-auto md:mx-0 portrait:sm:w-[40%] portrait:md:w-[35%] h-full flex flex-col gap-y-6 portrait:md:gap-y-4">
                    <div className="relative w-full h-fit">
                        <h1 className="relative text-[0.8em] font-quicksandsemibold text-start uppercase text-gray-800">
                            most recent review
                        </h1>
                    </div>

                    <div className="relative w-full h-fit flex flex-col gap-y-1">
                        <div className="relative w-full h-fit flex flex-row justify-between">
                            <div className="relative flex flex-row w-fit h-fit justify-start items-center gap-x-2 ">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <div className="relative w-fit h-full pt-[0.1em]">
                                <h1 className="relative text-[0.7em] font-quicksandregular text-gray-800 capitalize">
                                    new today
                                </h1>
                            </div>
                        </div>

                        <div className="relative w-full h-fit">
                            <h3 className="relative text-[0.6em] font-quicksandsemibold text-start uppercase text-gray-400">
                                originally posted on shoppy.com
                            </h3>
                        </div>

                    </div>

                    <div className="relative w-full h-fit flex flex-col gap-y-2 portrait:md:gap-y-1">
                        <div className="relative w-full h-fit">
                            <h1 className="text-start font-quicksandBold text-[0.7em] text-gray-800 uppercase">
                                best purchase ever
                            </h1>
                        </div>
                        <div className="relative w-full h-fit">
                            <p className="capitalize font-quicksandregular text-[0.7em] text-gray-700 text-start">the best {type} i have ever tried the are very comfortable</p>
                        </div>
                    </div>

                    <button className="group transition-all duration-300 ease-in-out hover:bg-gray-800 relative w-full h-[2.4em] outline outline-2 outline-gray-300 pt-1">
                        <h1 className="relative group-hover:text-white text-center text-gray-800 text-[0.9em] font-quicksandBold font-bold uppercase">
                            view all reviews
                        </h1>
                    </button>

                    <div className="relative w-full h-fit">
                        <h3 className="font-quicksandregular text-start text-[0.6em] text-gray-700 capitalize">
                            all reviews are verified by shoppy unless otherwise indicated.
                        </h3>
                    </div>

                </div>
            </div>

        </>
    )
}