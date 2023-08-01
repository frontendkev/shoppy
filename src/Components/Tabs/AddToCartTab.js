
import { Link } from "react-router-dom";
import Heart from "../../Svg/Heart";
import './tabs.css'



const AddToCartTab = ({ product, saveLastViewed, url, className }) => {

    
    function sendToWishlist(e) {
        e.preventDefault()
    }

    function sendLastSeen() {
        return saveLastViewed(product.id, product.title, product.image.file)
    }
    return (
        

        <section className={`${className} relative  landscape:md:w-[10em] landscape:lg:w-[15em] landscape:lg:h-[24em] landscape:xl:h-[30em] flex flex-col landscape:w-[11em] landscape:h-[20em] portrait:w-full portrait:h-[35em] portrait:md:w-[11.55em] portrait:lg:w-[15em] portrait:lg:h-[25em] landscape:xl:pl-0`}>
           
                <figure className={'relative w-full h-[80%] landscape:lg:h-[85%] portrait:h-[85%] portrait:sm:h-[80%] overflow-hidden'}>
                <button onClick={(e) => sendToWishlist(e)} className="absolute rounded-full w-[2em] h-[2em] bottom-5 right-5 overflow-hidden flex items-center justify-center shadow-light landscape:md:w-[1.7em] landscape:md:h-[1.7em] landscape:w-[1.6em] landscape:h-[1.6em] landscape:bottom-3 landscape:right-3 portrait:w-[1.8em] portrait:h-[1.8em] portrait:bottom-3 portrait:right-3">
                        <div className="absolute bg-gray-100 opacity-[0.4] w-[2em] h-[2em] top-0">
                        </div>
                    <Heart className={'relative w-[1.3em] h-[1.3em] landscape:md:w-[1em] landscape:md:h-[1em] landscape:h-[0.95em] landscape:w-[0.95em] portrait:h-[1em] portrait:sm:w-[1em] portrait:sm:h-[1em] portrait:w-[1em] portrait:lg:w-[1em] portrait:lg:h-[1em]'} />
                    </button>
                 <Link to={url} onClick={() => sendLastSeen()} >
                <img className={' w-full h-full object-top object-cover '} src={product.image.file} alt='' />
                 </Link >
            </figure>
           
                <div className="relative w-full h-[20%] portrait:h-[15%] landscape:lg:h-[15%] text-start landscape:pt-1 landscape:lg landscape:pb-2 portrait:pt-1">
                <h1 className="font-quicksandsemibold text-gray-800 uppercase text-[0.7em] portrait:text-[0.6em] landscape:text-[0.65em] portrait:leading-[1.3em]  portrait:mb-[0.3em]">
                        {product.title.slice(0, 40)+'...'}
                    </h1>
                <h2 className="font-quicksandBold text-red-700 uppercase text-[0.7em] landscape:text-[0.65em] landscape:leading-[1.3em] portrait:text-[0.65em] portrait:leading-[1.3em]">
                    NGN {Number(product.price).toLocaleString()} - {product.discount + '%'} < br />
                    <span className="text-gray-700">
                        NGN {Number(product.price - product.price * product.discount / 100).toLocaleString()}
                   </span>
                    </h2>

                </div>

           
        </section >
         

    )
}

export default AddToCartTab;