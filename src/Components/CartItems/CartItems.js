import Heart from '../../Svg/Heart'
import {Link} from 'react-router-dom'
import Line from '../Line/Line'
import Close from '../../Svg/Close'

export default function CartItems({ items, removeItem, increaseItem, reduceItem, updateWishlist, count, totalPriceSum }) {



    return (
        <section className="relative w-[90%] portrait:lg:w-[40em] landscape:w-[30em] landscape:lg:w-[40em] mx-auto portrait:h-fit landscape:h-full portrait:lg:h-full overflow-hidden flex flex-col gap-y-[0.5em]">

            <div className='relative w-full h-[2.5em] portrait:lg:h-[3.5em] landscape:lg:h-[3.5em] bg-white flex flex-row items-center justify-between pl-2 pr-2'>
                <h1 className='relative uppercase font-quicksandBold font-black text-gray-800 text-[0.9em] landscape:lg:text-[1em] portrait:lg:text-[1em]'>
                    my bag
                </h1>

                <h3 className='relative capitalize font-quicksandsemibold text-gray-600 text-[0.65em]'>
                    you have {count} {count <= 1 ? 'item' : 'items'} in your bag
                </h3>
            </div>

            <div className="relative w-full bg-white h-fit portrait:sm:gap-x-2 flex flex-col p-[1.3em]">
                {

                    items.map((cartItem, index) => {
                        return (
                            <>
                                <div key={index} className='relative portrait:mx-auto portrait:sm:mx-0 landscape:w-full landscape:lg:h-[10em] portrait:w-[16em] portrait:sm:w-full portrait:h-fit landscape:h-[9em] portrait:sm:h-[10em] flex portrait:flex-col portrait:sm:flex-row landscape:flex-row gap-x-2'>
                                    <figure className="relative landscape:lg:w-[8em] landscape:w-[7em] portrait:sm:w-[10em] landscape:h-full portrait:sm:h-full portrait:h-[380px] overflow-hidden ">
                                        <img src={cartItem.image} className='relative w-full h-full object-cover object-top mx-auto ' alt='' />
                                    </figure>

                                    <div className="relative portrait:w-full landscape:w-[20em] landscape:lg:w-[23em] portrait:h-fit lg:h-full portrait:pl-0 flex flex-col portrait:lg:gap-y-[1.2em] landscape:gap-y-[1.2em] portrait:gap-y-[0.7em]">

                                        <div className="w-full relative h-fit text-start leading-[1.3em]">

                                            <h1 className="relative font-quicksandBold text-gray-600 text-[0.95em] capitalize">
                                                NGN {Number(cartItem.price).toLocaleString() + "-"}
                                                <span className='text-rose-500'>{cartItem.discount + '%'}</span>

                                            </h1>

                                            <Link to={`/shoppy/${cartItem.gender}/${cartItem.type}/${cartItem.title}`}>
                                                <h2 className="relative font-quicksandregular text-gray-600 text-[0.8em] capitalize hover:underline">
                                                    {cartItem.title}
                                                </h2>
                                            </Link>

                                           

                                        </div>

                                        <div className="w-full relative h-[1.5em] text-start flex flex-row justify-start gap-x-[0.7em] items-center">
                                            <div className='relative w-fit h-full flex items-center justify-center'>
                                                <h2 className="relative font-quicksandregular text-gray-600 text-[0.7em] capitalize">
                                                    {cartItem.color}
                                                </h2>
                                            </div>

                                            <div className='relative h-[60%] border-0 border-r-[0.1em] opacity-[0.3] border-gray-500'>

                                            </div>

                                            <div className='relative w-fit h-full flex items-center justify-center'>
                                                <h2 className="relative font-quicksandregular text-gray-600 text-[0.7em] capitalize">
                                                    {cartItem.size}
                                                </h2>
                                            </div>

                                            <div className='relative h-[60%] border-0 border-r-[0.1em] opacity-[0.3] border-gray-500'>

                                            </div>
                                            
                                            <div className="w-[6.5em] relative h-fit text-start flex flex-row gap-x-[0.5em] items-center">
                                                <h2 className="relative font-quicksandregular text-gray-600 text-[0.7em] capitalize">
                                                    qty
                                                </h2>
                                                <div className="relative w-full h-[1.3em] flex flex-row">
                                                    <button onClick={() => reduceItem(cartItem.id, cartItem.price)} className="relative w-[1.5em] h-full outline outline-1 outline-gray-300 cursor-pointer">
                                                        <h1 className="text-center font-quicksand text-[0.9em] text-gray-700"> - </h1>
                                                    </button>

                                                    <div className="relative w-[1.5em] h-full outline outline-1 outline-gray-300 flex items-center justify-center">
                                                        <h1 className="text-center font-quicksand text-[0.7em] text-gray-700"> {cartItem.quantity} </h1>
                                                    </div>

                                                    <button onClick={() => increaseItem(cartItem.id, cartItem.price)} className="relative w-[1.5em] h-full outline outline-1 outline-gray-300 cursor-pointer">
                                                        <h1 className="text-center font-quicksand text-[0.9em] text-gray-700"> + </h1>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                       

                                        <div className="w-full relative h-fit text-start leading-[0.9em] flex flex-row gap-x-2 portrait:flex-col portrait:gap-y-[0.3em] pr-2 md:pr-0 mb-2">


                                            <button onClick={(e) => updateWishlist(cartItem)} className="relative portrait:w-[9em] portrait:h-[2em] bg-transparent justify-between items-center flex flex-row landscape:w-[7em] landscape:xl:w-[8em] landscape:h-[2em] outline outline-1 outline-gray-300 pl-1 pr-2">
                                                <div className='relative portrait:w-[2em] md:w-[20%] h-full flex items-center justify-center'>
                                                    <Heart className={'relative w-4 h-4 mx-auto stroke-gray-700'} />
                                                    
                                                </div>

                                                <div className='relative portrait:w-[7em] md:w-[80%] h-full flex items-center justify-center landscape:xl:w-[5em]'>
                                                    <h1 className='relative font-quicksandsemibold text-gray-700 text-[0.7em] capitalize'>
                                                        save for later
                                                    </h1>
                                                </div>
                                                
                                            </button>

                                        </div>
                                    </div>

                                    <button onClick={() => removeItem(cartItem.id, cartItem.color)} className='relative portrait:absolute portrait:sm:relative portrait:sm:top-0 portrait:sm:right-0 portrait:top-[0em] portrait:right-[-2.3em] w-[2em] h-[2em] landscape:lg:w-[3em] landscape:xl:h-[3em] portrait:sm:w-[3em] portrait:sm:h-[3em] flex items-center justify-center'>
                                        <Close />
                                    </button>

                                </div>

                                <Line className={'relative w-full portrait:h-[2em] h-[1.5em] last:hidden mt-2 mb-2 pt-3 portrait:pt-[1em]'} />
                            </>


                        )
                    })
                }
            </div>

            <div className='relative w-full landscape:lg:h-[3.5em] portrait:lg:h-[3.5em] h-[2.5em] bg-white flex flex-row items-center justify-end gap-x-[1.5em] pl-2 pr-2'>
                <h3 className='relative uppercase font-quicksandBold text-gray-800 text-[0.85em]'>
                    sub-total
                </h3>

                <h3 className='relative uppercase font-quicksandBold text-gray-800 text-[0.85em]'>
                    NGN {totalPriceSum.toLocaleString()}
                </h3>
            </div>


            <div className='relative w-full h-[5em] lg:h-[6em] bg-white text-start p-2 lg:leading-[1.5em] landscape:leading-[1.3em]'>
                <h3 className='relative uppercase font-quicksandBold text-gray-800 text-[0.89em]'>
                    free standard delivery
                </h3>

                <h3 className='relative capitalize font-quicksandregular text-gray-800 text-[0.78em]'>
                    faster delivery options available to most countries
                </h3>

                <h3 className='relative capitalize underline font-quicksandregular text-gray-800 text-[0.78em]'>
                    more options
                </h3>
            </div>

            <div className='relative landscape:w-full h-[8em] landscape:h-[10em] landscape:lg:h-[13em] text-start p-2'>
                <div className='relative w-[20em] h-full'>
                    <h3 className='relative uppercase font-quicksandBold text-gray-800 text-[0.85em]'>
                        wondering where your items have gone?
                    </h3>

                    <Line className={'relative w-full h-[1.5em] pt-3 mt-2 mb-2 sm:mt-0 sm:mb-0'} />

                    <h3 className='relative capitalize font-quicksandregular text-gray-800 text-[0.78em]'>
                        no worries - you'll find them here
                    </h3>

                    <div className='relative portrait:w-[9em] h-[2.3em] flex items-center justify-center landscape:w-[10em] outline outline-1 outline-gray-300 mt-2'>
                        <h1 className='relative font-quicksandsemibold text-gray-700 text-[0.85em] capitalize'>
                            view all saved items
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
