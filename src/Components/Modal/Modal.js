import { useContext, useEffect } from "react"
import { ShoppyContext } from "../../AppContext/AppContext"
import RemoveModal from "./RemoveModal/RemoveModal"
import { useDispatch, useSelector } from "react-redux"
import ContextActions from "../../AppContext/ContextActions"
import { deleteFromWishlist } from "../../Redux/ReduxSlices/WishlistSlice"
import { toast } from "react-toastify"


export default function Modal() {
    const contextState = useContext(ShoppyContext)
    const contextActions = ContextActions()
    const reduxDispatch = useDispatch()
    const wishlist = useSelector(store => store.wishlist)



    function removeItem(e) {
        e.preventDefault()
        reduxDispatch(deleteFromWishlist({ id: contextState.removeId }))
        return toast.success('item removed from wishlist')
    }

    
   

    useEffect(() => {
        contextActions.closeModal()
    }, [wishlist.closeModal])

    return (
        <div className={`fixed w-full min-h-screen transition-all ease-in-out duration-300 top-0 ${contextState.toggleModal ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
            <div className={`absolute z-5 w-full min-h-screen bg-black opacity-80`}>

            </div>
            <div className={`relative z-10 w-[90%] md:w-[30em] min-h-[20em] mt-[10em] mx-auto pt-[5em] `}>
                {contextState.modalPage === "wishlist" && <RemoveModal remove={removeItem} />}

                {contextState.modalPage === "checkout" && <div className="relative w-full h-full bg-red-500"> <h1>sorry player</h1> </div>}
               
            </div>
        </div>
    )
}