

import { Suspense, lazy, useEffect, useState } from "react"
import FabFits from "../../Components/Adverts/FabFits"
import { useNavigate, Link } from "react-router-dom"
import TabLoader from "../../Components/Loaders/TabLoader"
import ActionGetters from "../../Redux/ActionGetters/ActionGetters"
import { useSelector } from "react-redux"
import ContextActions from "../../AppContext/ContextActions"



const WishlistTab = lazy(() => import('../../Components/Tabs/WishlistTab'))


export default function Wishlist() {


    const showModal = ContextActions()

    const navigate = useNavigate()

    const { saveLastViewed, addToBag } = ActionGetters()

    const wishlistProducts = useSelector(store => store.wishlist)

    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 8


    let lastItem = currentPage * itemsPerPage
    let firstItem = lastItem - itemsPerPage
    let wishlist = wishlistProducts.products.slice(firstItem, lastItem)
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(wishlistProducts.products.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }


    useEffect(() => {
        if (wishlistProducts.products.length === 0) return window.scrollTo(0, 0)
    }, [wishlistProducts.products])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])


    if (wishlistProducts.products.length === 0) {
        return (
            <main className="relative min-h-screen md:h-[50vh] pt-0 md:pt-[2em]">
                <div className="relative w-full h-[2em] pl-3 md:pl-5 pt-2 md:pt-0 ">
                    <div className="relative w-fit h-full pt-1">
                        <h1 onClick={() => navigate(-1)} className="font-quicksandsemibold text-[0.7em] md:text-[0.8em] text-blue-400 capitalize cursor-pointer">
                            continue shopping
                        </h1>
                    </div>
                </div>
                <h1 className="text-[1.5em] md:text-[4em] text-gray-500 font-quicksandregular capitalize mt-[5em] md:mt-[2em]">...your wishlist is currently empty</h1>
            </main>
        )
    }

    if (wishlist.isLoading) {
        return (
            <section className={'w-full min-h-screen fixed z-10 top-0 bg-black pt-[20em]'}>
                <h1 className="text-white text-[4em] font-quicksandBold">...loading page</h1>
            </section>
        )
    }


    return (
        <section className={'w-full h-full relative'}>
            <FabFits />
            <section className="relative w-full mt-2 mb-2 h-[4.5em] portrait:h-[3em] flex flex-col items-center justify-center">
                <h2 className="relative font-quicksandBold portrait:text-[1em] uppercase text-gray-600">
                    saved items
                </h2>
                <h2 className="font-quicksandregular text-[0.8em] capitalize text-gray-600">
                    {wishlistProducts.count} styles found in your wishlist
                </h2>
            </section>
            
            <div className={'relative portrait:w-[70%] landscape:w-[41.5em] landscape:md:w-[49.5em] landscape:lg:w-[62em] portrait:md:w-[41.5em] min-h-[65vh] flex portrait:flex-col landscape:flex-row landscape:flex-wrap justify-start mx-auto landscape:gap-x-2 gap-y-[2em]'}>
                {
                    wishlist.map((product,index) => {
                        return (
                            <Suspense key={product.id} fallback={<TabLoader />}>
                                <WishlistTab
                                    key={index}
                                    showModal={showModal}
                                    sendToBag={addToBag}
                                    wishlist={product}
                                    saveLastViewed={saveLastViewed}
                                    url={`/shoppy/${product.gender}/${product.type}/${product.title}`} />
                            </Suspense>
                        )
                    })
                }
            </div>
            <div className="relative w-full portrait:h-[3em] landscape:h-[2em] landscape:md:h-[4em]">
                <div className="relative w-[80%] h-full mx-auto flex flex-row items-center justify-center gap-x-2">
                    {
                        pageNumbers.map((number, index) => {
                            return (
                                <Link
                                    key={index}
                                    onClick={() => setCurrentPage(() => number)}
                                    className={`relative flex items-center justify-center w-[1.5em] h-[1.5em] rounded-full hover:bg-rose-400 transition-all duration-300 ease-in-out
                                    ${currentPage === number ? 'bg-rose-400' : 'bg-rose-200'} ${pageNumbers.length > 1 ? 'opacity-[1]' : 'opacity-[0.5]'}`}

                                 to={'#'}>
                                    <h2 className="text-gray-800 text-[0.7em] text-center font-quicksandBold">
                                        {number}
                                    </h2>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}