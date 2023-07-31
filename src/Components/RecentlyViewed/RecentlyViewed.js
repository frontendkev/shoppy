import { useState, useRef, useEffect } from "react"
import LeftArrow from "../../Svg/LeftArrow"
import RightArrow from "../../Svg/RightArrow"
import Heart from "../../Svg/Heart"
import { useSelector, useDispatch } from "react-redux"
import { clearLastViewed } from "../../Redux/ReduxSlices/ProductsSlice"

export default function RecentlyViewed() {
    const dispatch = useDispatch()
    const [index, setIndex] = useState(0)
    const { lastViewed } = useSelector(store => store.products)
    const NextRef = useRef()
    const PrevRef = useRef()

    const [width, setWidth] = useState(0)


    function scrollNext() {

       

        if (index === lastViewed.length - 1) {
            NextRef.current.disabled = true
            return setIndex(c => index)
        }

        setIndex(c => c + 1)

        PrevRef.current.disabled = false

        return NextRef.current.disabled = false

    }

    function scrollPrev() {

        if (index === 0) {

            setIndex(c => 0)

            return PrevRef.current.disabled = true
        }
        setIndex(c => c - 1)
        NextRef.current.disabled = false
        return PrevRef.current.disabled = false
    }



    useEffect(() => {
        if (window.innerWidth >= 360) return setWidth(10.5)
        else if (window.innerWidth >= 768) return setWidth(10.5)

        
    }, [window.innerWidth])


    return (
        <div className="relative w-[90%] portrait:h-[30vh] portrait:sm:h-[25vh] landscape:w-[41.5em] landscape:h-[15em] portrait:md:w-[41.5em] flex flex-col mx-auto gap-y-2 overflow-hidden landscape:md:w-[50em] landscape:md:h-[18em]">

            <div className="relative h-[10%] portrait:w-[20.5em] landscape:w-[31em] landscape:md:w-[41.5em] portrait:sm:w-[31em] mx-auto">
                <div className="relative w-fit h-full float-left flex items-center justify-center">
                    <h2 className="font-quicksandBold text-gray-700 text-[0.8em] portrait:text-[0.7em] md:text-[1em] uppercase font-extrabold">
                        recently viewed
                    </h2>
                </div>
                <div className="relative w-fit h-full float-right overflow-hidden clear-right">
                    <button onClick={() => dispatch(clearLastViewed())} className="relative w-[7em] h-full bg-gray-300 text-center text-gray-600 font-quicksandsemibold uppercase text-[0.8em] portrait:text-[0.65em]">
                        clear all
                    </button>
                </div>
            </div>


            <div className="relative w-full h-[90%]">

                <div className={`absolute w-full landscape:h-[2.8em] top-[40%] z-[10] portrait:h-[3em]`}>

                    <div className="relative w-full mx-auto h-full flex flex-row justify-between items-center">
                        <button ref={PrevRef} onClick={() => scrollPrev()} className="relative w-[5em] portrait:w-[2em] h-full cursor-pointer group overflow-hidden">
                            <LeftArrow className={`relative w-full h-[2em] stroke-slate-700 hover:stroke-slate-400 transition-all duration-300 ease-in-out group-disabled:stroke-slate-300 mx-auto`} />
                        </button>


                        <button ref={NextRef} onClick={() => scrollNext()} className={`relative w-[5em] portrait:w-[2em] h-full cursor-pointer group`}>
                            <RightArrow className={`relative w-full h-[2em] stroke-slate-700 hover:stroke-slate-400 transition-all duration-300 ease-in-out group-disabled:stroke-slate-300 mx-auto mr-2`} />
                        </button>
                   </div>

                </div>

                

                <div className="relative w-full h-full portrait:w-[20.5em] landscape:w-[31em] landscape:md:w-[41.5em] portrait:sm:w-[31em] mx-auto overflow-hidden ">
                    <div
                        style={{ transform: `translateX(calc(-${index}*${width}em))` }}
                        className={`relative w-fit h-full transition-all duration-300 ease-in-out flex flex-row justify-start items-center overflow-hidden landscape:gap-x-2 portrait:gap-x-2`}>
                        {
                            lastViewed && lastViewed && lastViewed.map((item, index) => {
                                return (
                                    <div key={index} className="relative landscape:w-[10em] portrait:w-[10em] h-full overflow-hidden">
                                        <figure className="relative w-full h-full overflow-hidden">
                                            <div className="absolute rounded-full w-[2em] h-[2em] portrait:w-[1.8em] portrait:h-[1.8em] bottom-3 right-3 overflow-hidden z-10 flex items-center justify-center">
                                                <div className="absolute bg-white opacity-[0.4] w-[2em] h-[2em]">
                                                </div>
                                                <Heart className={'relative w-[1em] h-[1em]'} />
                                            </div>
                                            <img className="relative w-full h-full object-cover object-top" src={item.image} alt='' />
                                        </figure>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}