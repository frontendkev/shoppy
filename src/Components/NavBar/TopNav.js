import { Link, useParams } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"
import User from "../../Svg/User"
import Heart from "../../Svg/Heart"
import Bag from "../../Svg/Bag"


export default function TopNav({wishlist, cartCount}) {
    const params = useParams()
    return (
        <section className='relative w-full h-[3.5em] landscape:h-[2.3em] portrait:sm:h-[2.3em] landscape:lg:h-[2.5em] bg-gray-800 top-menu'>

            <section className='relative w-full landscape:w-full portrait:sm:w-full h-full mx-auto flex flex-col portrait:sm:flex-row pl-1 pr-1 md:p-0 landscape:flex-row landscape:gap-x-0 landscape:lg:gap-x-4 landscape:pr-2 landscape:pl-2 portrait:sm:justify-between'>


                <div className="relative w-full h-full portrait:sm:w-fit flex flex-row gap-x-2 md:gap-x-4 items-center portrait:sm:gap-x-[0.6em] portrait:sm:pl-2 portrait:sm:pr-2 landscape:w-[30%]">

                    
                    <Link to={'/'}>
                        <div className='relative w-fit h-full'>
                            <h1 className='text-white font-quicksandBold lowercase text-[0.8em] landscape:md:text-[1em] text-center portrait:sm:text-[1em] landscape:text-[1em]'>
                                shoppy
                            </h1>
                        </div>
                    </Link>

                    <div className="relative h-[0.7em] mt-[0.3em] md:h-[60%] outline outline-[0.1em] outline-gray-500">

                    </div>

                    <Link to='shoppy/female'>
                        <div className='relative w-fit h-full'>
                            <h1 className='text-white font-quicksandBold lowercase text-[0.8em] landscape:md:text-[1em]  portrait:sm:text-[1em] landscape:text-[1em]'>
                                women
                            </h1>
                        </div>
                    </Link>



                    <div className="relative h-[0.7em] md:h-[60%] mt-[0.3em] outline outline-[0.1em] outline-gray-500">

                    </div>

                    <Link to='shoppy/male'>
                        <div className='relative w-fit h-full'>
                            <h1 className={`text-white font-quicksandBold lowercase text-[0.8em] landscape:md:text-[1em]  portrait:sm:text-[1em] landscape:text-[1em]`}>
                                men
                            </h1>
                        </div>
                    </Link>
               </div>



                <div className="relative w-full h-full portrait:sm:w-[70%] flex flex-row gap-x-4 md:gap-x-4 landscape:justify-between portrait:sm:justify-between portrait:sm:items-center landscape:items-center landscape:w-[70%] landscape:pr-2">
                    <div className='relative w-[75%] landscape:lg:w-[45em] h-[90%] portrait:sm:h-[75%] landscape:h-[75%] md:h-full'>
                        <SearchBar />
                    </div>

                    <div className="relative w-[25%] landscape:w-fit h-[90%] landscape:gap-x-4 landscape:md:gap-x-2 landscape:h-[75%]  md:h-full flex flex-row gap-x-2 items-center ">
                        <Link to={'/shoppy/dashboard'}>
                            <div className='relative w-[1.2em] md:w-[2.5em] h-full'>
                                <User className={'relative w-full h-full mx-auto md:w-6 md:h-6'} />
                            </div>
                        </Link>

                        <Link to={`/shoppy/${params.gender}/wishlist`}>
                            <div className='relative w-[1.2em] md:w-[2.5em] h-full'>
                                <div className='absolute w-5 h-5 rounded-full right-[-0.3em] md:right-1 top-2 landscape:w-4 landscape:h-4 landscape:md:h-5 landscape:md:w-5 portrait:w-4 portrait:h-4 portrait:sm:h-[1.2em] portrait:sm:w-[1.2em] flex justify-center items-center overflow-hidden'>
                                    <div className="absolute w-full h-full bg-red-500 opacity-80 z-[5]">

                                    </div>
                                    <h3 className='text-[0.9em] landscape:md:text-[0.9em] relative text-white font-quicksandBold landscape:text-[0.7em] portrait:text-[0.7em] portrait:sm:text-[0.85em] z-[6]'>
                                        {wishlist.count}
                                    </h3>
                                </div>
                                
                                <Heart className={'relative w-full h-full md:w-6 md:h-6 mx-auto stroke-white z-[3]'} />
                            </div>
                        </Link>

                        <Link to={`shoppy/${params.gender}/cart`}>
                            <div className='relative w-[1.2em] md:w-[2.5em] h-full'>
                                <div className='absolute w-5 h-5 rounded-full right-[-0.3em] md:right-1 top-2 landscape:w-4 landscape:h-4 landscape:md:h-5 landscape:md:w-5 portrait:w-4 portrait:h-4 portrait:sm:h-[1.2em] portrait:sm:w-[1.2em] flex justify-center items-center overflow-hidden'>
                                    <div className="absolute w-full h-full bg-red-500 opacity-80 z-[5]">

                                    </div>
                                    <h3 className='text-[0.9em] landscape:md:text-[0.9em] relative text-white font-quicksandBold landscape:text-[0.7em] portrait:text-[0.7em] portrait:sm:text-[0.85em] z-[6]'>
                                        {cartCount ? cartCount : 0}
                                    </h3>
                                </div>
                                <Bag className={'relative w-full md:w-6 h-full md:h-6 mx-auto stroke-white z-[3]'} />
                            </div>
                        </Link>
                   </div>
               </div>
            </section>
        </section>
    )
}