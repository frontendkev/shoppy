


export default function WelcomeBanner({ imageOne, imageTwo, hintClass, bannerOne, bannerTwo }) {

    return (
        <section aria-label='home-banner' className="relative portrait:sm:w-[95%] portrait:w-full landscape:w-full landscape:pl-4 landscape:pr-4 mx-auto lg:mx-0 lg:w-full portrait:h-[70vh] portrait:sm:h-[50vh] portrait:md:h-[45vh] landscape:lg:h-[40em] landscape:h-[100vh] landscape:md:h-[100vh] overflow-hidden">
            <figure className={`relative w-full h-full landscape:lg:h-[95%] flex flex-row items-center justify-center gap-x-2 overflow-hidden`}>
                <img alt='' src={imageOne} className={`${bannerOne} relative w-full sm:w-[50%] lg:w-[40%] h-[90%] hidden sm:block object-cover lg:block object-center`} />
                <img alt='' src={imageTwo} className={`${bannerTwo} relative w-full sm:w-[50%] lg:w-[40%] h-[90%] object-cover object-top`} />
            </figure>

            <div className="absolute w-full h-[10em] landscape:lg:h-[15em] z-[5] portrait:bottom-[5em] landscape:bottom-[30%] landscape:lg:bottom-[5em] lg:bottom-[5em] portrait:sm:bottom-[5em] flex flex-col justify-center items-center gap-y-4">
                <div className={`${hintClass} relative w-[12em] landscape:lg:w-[25em] h-[3em] landscape:lg:h-[5em] bg-white flex items-center justify-center`}>
                    <h1 className="font-quicksandBold text-[1.3em] landscape:lg:text-[3em] capitalize text-gray-700 font-black text-center">
                        just dropped
                    </h1>
                </div>
                <div className={`${hintClass} relative w-fit h-[2.4em] landscape:lg:h-[3em] bg-white flex items-center justify-center`}>
                    <button className="relative mx-auto h-full w-fit pl-2 pr-2 font-quicksandBold text-[1.3em] text-gray-700 uppercase">
                        shop shoppy design
                    </button>
                </div>
            </div>
        </section>
    )
}
