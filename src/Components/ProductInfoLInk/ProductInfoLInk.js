

import {ButtonSlide} from '../ButtonWithSlide/ButtonSlide';


function ProductInfoLink({showDescription, showSize}) {
    return (
        <section className="relative w-full h-fit">
            <section className="relative w-[80%] h-[3em] mx-auto flex flex-row gap-x-2">
                <ButtonSlide getInfo={showDescription} textColor={'text-gray-500'} paddingTop={'pt-1 md:pt-3'} fontWeight={'font-normal md:text-sm text-[0.5em] font-quicksandBold'} top={false} text={'description'} />
                <ButtonSlide getInfo={showSize} textColor={'text-gray-500'} paddingTop={'pt-1 md:pt-3'} fontWeight={'font-normal md:text-sm text-[0.5em] font-quicksandBold'} top={false} text={'size info'} />
                <ButtonSlide textColor={'text-gray-500'} paddingTop={'pt-1 md:pt-3'} fontWeight={'font-normal md:text-sm text-[0.5em] font-quicksandBold'} top={false} text={'discounts'} />
                <ButtonSlide textColor={'text-gray-500'} paddingTop={'pt-1 md:pt-3'} fontWeight={'font-normal md:text-sm text-[0.5em] font-quicksandBold'} top={false} text={'reviews'} />
            </section>
        </section>
    )
}

export default ProductInfoLink;