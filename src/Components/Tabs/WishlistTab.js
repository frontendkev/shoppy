

import { Link } from "react-router-dom";

import Trash from "../../Svg/Trash";
import './tabs.css'



export default function WishlistTab ({ wishlist, saveLastViewed, url, showModal,sendToBag }) {

    let modalMessage = "are you sure you want to remove this item from your wishlist"
    
    return (
       
            <section className={`relative portrait:h-[20em] portrait:w-[10em] landscape:w-[10em] landscape:md:w-[12em] landscape:h-[20em] landscape:md:h-[22em] flex flex-col`}>

                <figure className={'relative w-full h-[70%] overflow-hidden'}>
                    <button onClick={() => showModal.toggleModal(true,modalMessage,wishlist.id)}  className="absolute rounded-full w-[2em] h-[2em] bottom-2 right-2 flexitems-center justify-center overflow-hidden">
                        <div className="absolute bg-red-800 opacity-[0.4] w-[2em] h-[2em] top-0 z-10">
                        </div>
                        <Trash className={'relative w-[1em] h-[1em] mx-auto z-10'} />
                </button>
                <Link to={url} onClick={() => saveLastViewed(wishlist.id, wishlist.title, wishlist.image)} >
                    <img className={' w-full h-full object-cover relative object-top'} src={wishlist.image && wishlist.image} alt='' />
                </Link>
                </figure>
                <div className="relative w-full h-[15%] text-start leading-[1em]">
                    <h1 className="font-quicksandsemibold text-gray-800 uppercase text-[0.7em]">
                        {wishlist.title.slice(0, 20)+'...'}
                    </h1>
                    <h2 className="font-quicksandBold text-red-700 uppercase text-[0.7em]">
                        NGN {Number(wishlist.price).toLocaleString()} - {wishlist.discount + '%'}
                    </h2>

                    <h2 className="font-quicksandBold text-gray-700 uppercase text-[0.7em]">
                        NGN {wishlist.discountPrice.toLocaleString()}
                    </h2>
                <button
                    onClick={() => sendToBag(wishlist, wishlist.image, wishlist.color)}
                    style={{transition: "all 5s ease-in-out"}}
                    className="relative w-full h-[2em] outline outline-1 outline-rose-500 mt-2 hover:bg-gradient-to-r hover:from-rose-500 hover:via-rose-300 hover:to-transparent">
                        <h1 className="font-quicksandBold text-gray-800 capitalize text-[0.7em] text-center">
                            add item to your bag
                        </h1>
                    </button>

                    
                </div>


            </section>
        
    )
}
