


export default function SimpleCard ({title, text, image, className}) {
    return (
        <section className={`${className} relative landscape:w-[9.5em] landscape:lg:w-[15.5em] landscape:min-h-full landscape:lg:h-full landscape:sm:h-full landscape:md:h-full landscape:md:w-[11em] mx-auto lg:mx-0 lg:h-[90%] portrait:h-[30em] portrait:w-[80%] portrait:sm:w-[10em] portrait:sm:h-[20em]`}>
            <figure className="w-full h-[90%] sm:h-[80%] lg:h-[80%] relative overflow-hidden shadow-light">
                <img className='relative w-full lg:w-full md:mx-auto h-full object-cover object-top ' alt="" src={image} />
            </figure>
            <div className="relative w-full h-[10%] sm:h-[20%] lg:h-[20%] text-center pt-[0.5em] md:pt-2 text-gray-700">
                <h2 className='uppercase text-[0.7em] lg:text-[1em] landscape:lg:text-[1em] font-quicksandBold landscape:text-[0.6em]'> {title}</h2>
                <h4 className='capitalize text-[0.7em] lg:text-[0.8em] landscape:lg:text-[0.8em] landscape:text-[0.6em] font-quicksandregular'> {text}</h4>
            </div>
        </section>
    )
}