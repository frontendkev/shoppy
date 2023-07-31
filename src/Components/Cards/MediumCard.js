
import { Link } from 'react-router-dom'
export default function MediumCard({ title, text, image, className }) {
    return (
        <section className={`${className} relative w-[70%] sm:w-[40%] mx-auto landscape:lg:w-[30%] landscape:w-[40%] lg:mx-0 h-[50%] sm:h-full landscape:h-[90%] landscape:lg:h-full`}>
            <Link to='/products-page/all'>
                <figure className="w-full h-[80%] md:h-[80%] lg:h-[80%] sm:h-[80%] relative">
                    <img className='relative w-full lg:w-[80%] mx-auto h-full object-cover landscape:object-contain object-top drop-shadow-light landscape:lg:object-cover' alt="" src={image} />
                </figure>
                <div className="relative w-full h-[20%] landscape:md:h-[20%] sm:h-[20%] flex flex-col gap-y-2 justify-center landscape:pt-0 text-center pt-1 landscape:lg:pt-3 mb-2 lg:mb-0 text-gray-700">
                    <div className="relative w-full h-[50%] landscape:pt-0 text-center text-gray-700">
                        <h2 className='uppercase text-[0.8em] lg:text-[1em] landscape:text-[0.8em] font-quicksandBold'> {title}</h2>
                        <h4 className='capitalize text-[0.68em] lg:text-[0.8em] landscape:text-[0.7em] font-quicksandregular'>{text}</h4>
                    </div>
                    <div className='relative w-full h-fit md:h-[50%] lg:h-[50%] flex items-center justify-center'>
                        <button className='relative w-[8em] h-[2.4em] landscape:h-[1.7em] landscape:w-[7em] bg-white outline outline-[1px] outline-gray-500 text-gray-700 uppercase font-quicksandBold text-[0.8em] landscape:text-[0.8em] landscape:lg:w-[8em] landscape:lg:h-[2.8em]'>
                            shop now
                        </button>
                    </div>
                </div>
            </Link>
        </section>
    )
}