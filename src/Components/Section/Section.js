import {Link} from "react-router-dom"

export default function Section({ image, text, url }) {

    return (
            <section aria-label={'categories-section'} className={'relative w-full h-full'}>
                <figure className='relative w-full h-full'>
                    <img alt='' src={image} className='relative w-full h-full object-contain' />
                </figure>

                <div className="absolute w-full h-[15em] z-[5] bottom-0 flex flex-col justify-center items-center gap-y-4">
                    <div className="relative w-[15em] pt-1 md:pt-0 md:w-[20em] h-[3em] md:h-[4em] bg-white">
                        <h1 className="font-quicksandBold text-[1.5em] md:text-[2.5em] capitalize text-gray-800 font-black text-center">
                            {text}
                        </h1>
                    </div>
                    <div className="relative w-fit h-[2em] md:h-[3em] bg-white md:pt-1 md:pb-1">
                        <Link to={url}>
                            <button className="relative mx-auto h-full w-[8em] font-quicksandBold text-[1em] md:text-[1.3em] text-gray-800 uppercase">
                                shop now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
    )
}
