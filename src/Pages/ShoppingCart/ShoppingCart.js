
import { reduceQuantity, increaseQuantity, deleteItem } from "../../Redux/ReduxSlices/CartSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartItems from "../../Components/CartItems/CartItems"
import Checkout from "../../Components/Checkout/Checkout"
import ContextActions from "../../AppContext/ContextActions"
import ActionGetters from "../../Redux/ActionGetters/ActionGetters"
import { toast } from "react-toastify"

export default function ShoppingCart() {

    const contextActions = ContextActions()
    const dispatch = useDispatch()
    const { items, count } = useSelector(store => store.cart)
    const navigate = useNavigate()
    const { updateWishlist } = ActionGetters()


    const totalPriceSum = items.reduce((oldPrice, newPrice) => {
        return oldPrice + newPrice.discountPrice
    }, 0)

    function increaseItem(id, price) {
        return dispatch(increaseQuantity({
            id: id,
            price: price
        }))
    }

    function reduceItem(id, price) {
        return dispatch(reduceQuantity({
            id: id,
            price: price
        }))
    }

    function removeItem(id, color) {
        dispatch(deleteItem({
            id: id,
            color: color
        }))
        return toast.success('item removed from bag successfully')
    }

    if (count === 0) {
        return (
            <main className="relative min-h-screen md:h-[50vh] pt-0 md:pt-[2em]">
                <div className="relative w-full h-[2em] pl-3 md:pl-5 pt-2 md:pt-0 ">
                    <div className="relative w-fit h-full pt-1">
                        <h1 onClick={() => navigate(-1)} className="font-quicksandsemibold text-[0.7em] md:text-[0.8em] text-blue-400 capitalize cursor-pointer">
                            continue shopping
                        </h1>
                    </div>
                </div>
                <h1 className="text-[1.5em] md:text-[4em] text-gray-500 font-quicksandregular capitalize mt-[5em] md:mt-[2em]">...your bag is currently empty</h1>
            </main>
        )
    }

    return (
        <section className="relative w-full min-h-screen bg-gray-200 flex flex-col gap-y-[0.5em]">

            <div className="relative w-full portrait:h-[3em] landscape:h-[2em] landscape:lg:h-[3.5em] bg-blue-200 flex items-center justify-center">
                <h3 className="relative font-quicksandregular text-gray-700 text-[0.7em] capitalize">
                    can we tempt you? spend another <span className="uppercase">ngn</span> 5,000 to qualify for free shipping to your location
                </h3>
            </div>

            <section aria-label={'shopping-cart-page'} className={`min-h-screen portrait:w-full landscape:w-[45.5em] portrait:lg:w-[55em] landscape:lg:w-[55em] mx-auto flex gap-y-4 landscape:gap-x-[0.5em] portrait:lg:gap-x-[0.5em] portrait:flex-col portrait:lg:flex-row landscape:flex-row pb-2`}>
                <CartItems
                    items={items}
                    count={count}
                    removeItem={removeItem}
                    reduceItem={reduceItem}
                    increaseItem={increaseItem}
                    updateWishlist={updateWishlist}
                    totalPriceSum={totalPriceSum}
                />

                <Checkout showModal={contextActions.showPayments} items={items} totalPriceSum={totalPriceSum} />
            </section>

        </ section>
    )
}


