import { useDispatch, useSelector } from "react-redux"


export default function ThunkHelpers() {
    const wishlist = useSelector(store => store.wishlist)
    const auth = useSelector(store => store.auth)
    const reduxDispatch = useDispatch()

    function updateWishlist(id) {
        const foundItem = wishlist.products.find(item => item.productId == id)

        if (!auth.isLoggedIn) return {
            isLoggedIn: false,
            message: ''
        }
        else if (auth.isLoggedIn) {

            if (!foundItem) {


                return {
                    isLoggedIn: true,
                    exists: false,
                    message: "item added to your wishlist"
                }
            }

            return {
                isLoggedIn: true,
                exists: true,
                message: "item already exists in wishlist"
            }

            

        }

        return;

        
    }
    return {
        updateWishlist
    }
}