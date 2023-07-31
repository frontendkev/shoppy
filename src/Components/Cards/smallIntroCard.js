

export default function SmallIntroCard({ image, text, className, textClass, imageClass, figureClass }) {
    return (
        <div className={`${className} relative portrait:w-[10em] landscape:w-[10em] landscape:h-[15em] h-full bg-white transition-all duration-500 ease-in-out`}>
            <div className={figureClass? figureClass : 'relative w-full h-[90%]'}>
                <img className={imageClass? imageClass : 'relative w-full h-full lg:h-full object-top object-cover'} alt="" src={image} />
               
            </div>
            <div className={textClass ? textClass : 'relative w-full h-[10%] font-quicksandBold text-gray-700 flex justify-center items-center uppercase text-[0.8em] portrait:text-[0.6em] lg:text-[0.8em] landscape:text-[0.8em]'}>
                <h3 className="relative">
                    {text}
                </h3>
            </div>

        </div>
    )
}