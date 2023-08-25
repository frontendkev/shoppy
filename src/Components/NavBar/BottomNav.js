import ButtonSlide from "../ButtonWithSlide/ButtonSlide"
import {Link} from "react-router-dom"

export default function BottomNav() {
    return (
        <section className={`w-full portrait:h-[30px] portrait:sm:h-[40px] landscape:h-[30px] landscape:lg:h-[40px] relative bg-gray-600 overflow-hidden`}>
            <section className='relative w-full h-full'>
                <div className='relative w-full h-full flex flex-row justify-center items-center '>

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[12px] portrait:sm:text-[0.7em] font-quicksandsemibold landscape:md:text-[0.7em]'} top={false} text={'clothing'} />

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[12px] portrait:sm:text-[0.7em] font-quicksandsemibold landscape:md:text-[0.7em]'} top={false} text={'shoes'} />

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[12px] portrait:sm:text-[0.7em] font-quicksandsemibold landscape:md:text-[0.7em]'} top={false} text={'sportswear'} />

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[12px] portrait:sm:text-[0.7em] font-quicksandsemibold landscape:md:text-[0.7em]'} top={false} text={'accessories'} />

                    <Link to="/shoppy/server">
                        <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[12px] portrait:sm:text-[0.7em] font-quicksandsemibold landscape:md:text-[0.7em]'} top={false} text={'winter'} />
                    </Link>
                    <Link to='/shoppy/uploadpage'>
                        <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[12px] portrait:sm:text-[0.7em] font-quicksandsemibold landscape:md:text-[0.7em]'} top={false} text={'brands'} />
                    </Link>
                </div>
            </section>
        </section>
    )
}
