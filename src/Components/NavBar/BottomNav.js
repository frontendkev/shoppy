import ButtonSlide from "../ButtonWithSlide/ButtonSlide"
import {Link, useParams} from "react-router-dom"

export default function BottomNav() {
   const params = useParams()
    return (
        <section className={`w-full portrait:h-[30px] landscape:h-6 landscape:lg:h-[2em] relative bg-gray-600 overflow-hidden`}>
            <section className='relative w-full pl-1 landscape:lg:pl-4 h-full'>
                <div className='relative w-full h-full flex flex-row '>

                    <Link to={`/shoppy/${params.gender}/newin`}>
                        <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal landscape:lg:text-sm text-[13px] portrait:sm:text-[0.7em] font-quicksandBold landscape:md:text-[0.7em]'} top={false} text={'new in'} />
                    </Link>

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[13px] portrait:sm:text-[0.7em] font-quicksandBold landscape:md:text-[0.7em]'} top={false} text={'clothing'} />

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[13px] portrait:sm:text-[0.7em] font-quicksandBold landscape:md:text-[0.7em]'} top={false} text={'shoes'} />

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[13px] portrait:sm:text-[0.7em] font-quicksandBold landscape:md:text-[0.7em]'} top={false} text={'sportswear'} />

                    <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[13px] portrait:sm:text-[0.7em] font-quicksandBold landscape:md:text-[0.7em]'} top={false} text={'accessories'} />

                    <Link to="/shoppy/server">
                        <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[13px] portrait:sm:text-[0.7em] font-quicksandBold landscape:md:text-[0.7em]'} top={false} text={'winter'} />
                    </Link>
                    <Link to='/shoppy/uploadpage'>
                        <ButtonSlide textColor={'text-white'} paddingTop={'pt-1 lg:pt-1'} fontWeight={'font-normal lg:text-sm text-[13px] portrait:sm:text-[0.7em] font-quicksandBold landscape:md:text-[0.7em]'} top={false} text={'brands'} />
                    </Link>
                </div>
            </section>
        </section>
    )
}
