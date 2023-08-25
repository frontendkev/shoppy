import {Link} from "react-router-dom"
import {SearchBar} from "../SearchBar/SearchBar"
import User from "../../Svg/User"
import Heart from "../../Svg/Heart"
import Bag from "../../Svg/Bag"
import homeLogo from '../../images/logo/home.png'


export default function TopNav({wishlist, cartCount}) {
    return (
        <section className='relative w-full portrait:h-[38px] landscape:h-[40px] portrait:sm:h-[50px] landscape:lg:h-[40px] bg-gray-800 top-menu px-2 overflow-hidden'>

            <section className='relative w-full h-full mx-auto flex flex-row portrait:gap-x-2 portrait:sm:flex-row pl-1 pr-1 md:p-0 landscape:gap-x-0 landscape:lg:gap-x-4 landscape:pr-2 landscape:pl-2 justify-between items-center overflow-hidden'>


                <div className="relative portrait:w-[80px] portrait:h-[40px] landscape:h-full portrait:sm:w-fit flex flex-row landscape:gap-x-2 portrait:gap-x-[2.5px] md:gap-x-4 items-center justify-center portrait:sm:gap-x-[0.6em] landscape:w-[7em]">

                    
                    <Link to={'/'} className={'relative portrait:w-[20px] portrait:h-[20px] landscape:h-[25px] landscape:w-[25px]'}>
                            <figure className={'relative w-full h-full flex items-center justify-center'}>
                                <img src={homeLogo} alt={'logo here'} />
                            </figure>
                    </Link>


                    <Link to='/' className={'relative w-fit h-[20px] flex items-center justify-center'}>
                            <h1 className='text-white font-quicksandBold lowercase portrait:text-[0.8em] landscape:md:text-[1em]  portrait:sm:text-[1em] landscape:text-[1em]'>
                                shoppy
                            </h1>
                    </Link>


               </div>

                <div className='relative portrait:w-[30em] portrait:sm:w-[30em] landscape:lg:w-[45em] landscape:w-[30em] landscape:h-[30px] portrait:h-[30px] landscape:lg:h-[30px] md:h-full'>
                    <SearchBar />
                </div>

                <div className="relative portrait:w-[10em] portrait:sm:w-[6em] portrait:h-[40px] landscape:h-full flex flex-row portrait:gap-x-[8px] landscape:gap-x-4 md:gap-x-4 justify-center items-center landscape:items-center landscape:w-[120px] landscape:pr-2 overflow-hidden">

                        <Link to={'/shoppy/dashboard'} className={'relative landscape:w-[30px] portrait:w-[20px] landscape:h-[30px] portrait:h-[20px] '}>
                            <div className='relative w-full h-full'>
                                <User className={'relative w-full h-full mx-auto md:w-6 md:h-6'} />
                            </div>
                        </Link>

                        <Link to={`/shoppy/wishlist`} className={'relative landscape:w-[30px] portrait:w-[20px] landscape:h-[30px] portrait:h-[20px]'}>
                            <div className='relative w-full h-full'>
                                <div className='absolute w-5 h-5 rounded-full portrait:right-[-5px] portrait:bottom-0 landscape:right-[-0.3em] md:right-1 top-2 landscape:w-4 landscape:h-4 landscape:md:h-5 landscape:md:w-5 portrait:w-4 portrait:h-4 portrait:sm:h-[1.2em] portrait:sm:w-[1.2em] flex justify-center items-center overflow-hidden'>
                                    <div className="absolute w-full h-full bg-red-500 opacity-80 z-[5]">

                                    </div>
                                    <h3 className='text-[0.9em] landscape:md:text-[0.9em] relative text-white font-quicksandBold landscape:text-[0.7em] portrait:text-[0.7em] portrait:sm:text-[0.85em] z-[6]'>
                                        {wishlist.count}
                                    </h3>
                                </div>
                                
                                <Heart className={'relative w-full h-full md:w-6 md:h-6 mx-auto stroke-white z-[3]'} />
                            </div>
                        </Link>

                        <Link to={`shoppy/cart`} className={'relative landscape:w-[30px] portrait:w-[20px] landscape:h-[30px] portrait:h-[20px]'}>
                            <div className='relative w-full h-full'>
                                <div className='absolute w-5 h-5 rounded-full portrait:right-[-5px] landscape:right-[-0.3em] md:right-1 top-2 landscape:w-4 landscape:h-4 landscape:md:h-5 landscape:md:w-5 portrait:w-4 portrait:h-4 portrait:sm:h-[1.2em] portrait:sm:w-[1.2em] flex justify-center items-center overflow-hidden'>
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
            </section>
        </section>
    )
}
