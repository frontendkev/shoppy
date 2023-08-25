import {Link} from "react-router-dom"
import Heart from "../../Svg/Heart"

export default function ProductTab({ product, url, saveLastViewed }) {

    return (
       
            <section className={`relative landscape:w-[10em] portrait:h-[15em] portrait:w-[10em] portrait:md:w-[11.5em] landscape:h-[17em] portrait:md:h-[20em] flex flex-col landscape:lg:h-[18em]`}>

                <figure className={'relative w-full portrait:h-[80%] landscape:h-[80%] overflow-hidden'}>
                    <div className="absolute rounded-full landscape:w-[1.8em] landscape:h-[1.8em] portrait:w-[1.8em] portrait:h-[1.8em] bottom-2 right-2 overflow-hidden flex items-center justify-center">
                        <div className="absolute bg-white opacity-[0.7] w-[2em] h-[2em]">
                        </div>
                        <Heart className={'relative landscape:w-[1em] landscape:h-[1em] portrait:h-[1em] portrait:w-[1em] mx-auto'} />
                </div>
                <Link onClick={() => saveLastViewed(product.id, product.title, product.type, product.image.file)} to={url}>
                    <img className={' w-full h-full object-cover object-top '} src={product.image.file} alt='' />
                </Link>
                </figure>
                <div className="relative w-full portrait:h-[20%] landscape:h-[20%] text-start leading-[1em] portrait:leading-[0.8em] pt-1 portrait:pt-[0.15em]">
                    <h1 className="font-quicksandsemibold text-gray-800 uppercase landscape:text-[0.6em] portrait:text-[0.6em]">
                        {product.title.slice(0, 20)+'...'}
                    </h1>
                <h2 className="font-quicksandBold text-red-700 uppercase text-[0.7em] portrait:text-[0.6em]">
                        NGN {Number(product.price).toLocaleString()} - {product.discount + '%'}
                    </h2>

                <h2 className="font-quicksandBold text-gray-700 uppercase text-[0.7em] portrait:text-[0.6em]">
                        NGN {Number(product.price - product.price * product.discount / 100).toLocaleString()}
                    </h2>
                </div>


            </section>
       
    )
}
