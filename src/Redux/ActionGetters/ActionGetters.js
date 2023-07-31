import { useDispatch } from "react-redux";
import { updateLastViewed, filterProducts, startFetch, saveLastSeen } from "../ReduxSlices/ProductsSlice";
import { saveCart, updateCart } from "../ReduxSlices/CartSlice";
import { checkInStorage } from "../ReduxHelpers/ReduxHelpers";
import { saveWishlist } from "../ReduxSlices/WishlistSlice";
import { toast } from "react-toastify";


export default function ActionGetters() {

    const reduxDispatch = useDispatch()

    function saveLastViewed(id, title, image) {
        let item = {
            id: id,
            title: title,
            image: image,
            time: new Date().toString()
        }
        let lastViewed = checkInStorage('lastViewed')

        if (lastViewed) {
            let findItem = lastViewed.find(item => item.id === id)
            if (!findItem) {
                const savedItems = [...lastViewed, item]
                return reduxDispatch(updateLastViewed({ items: savedItems }))
            }
            const foundItem = lastViewed.map(found => found.id === id ? { ...found, time: new Date().toString() } : found)
            return reduxDispatch(updateLastViewed({ items: foundItem }))

        }
        else if (!lastViewed) {
            return reduxDispatch(saveLastSeen({ item: item }))
        }
    }

    function addToBag(product, image, color, size) {
        const checkStorage = checkInStorage('cart')
        if (!checkStorage) {
            reduxDispatch(saveCart({ item: product, image: image, color: color }))
            return toast.success('item added to your bag')
        }
        else if (checkStorage) {
            const foundItem = checkStorage.find(item => item.product_id === product.id && item.color === color)
            if (!foundItem) {
                reduxDispatch(updateCart({ item: product, image: image, color: color }))
                return toast.success('item added to your bag')
            }
            else if (foundItem) {
                return toast.error('item already exists')

            }
        }
    }



    function updateWishlist(product) {
        let checkStorage = checkInStorage('wishlist')
        if (!checkStorage) {
            reduxDispatch(saveWishlist({ item: product }))
            return toast.success('item added successfully')
        }
        const findItem = checkStorage.find(item => item.id === product.id)

        if (!findItem) {
            reduxDispatch(saveWishlist({ item: product }))
            return toast.success('item added successfully')
        }
            return toast.error('item already exists in your wishlist')
        

    }

    async function Sort(payload) {
        const itemsCopy = payload.items.slice()
        reduxDispatch(startFetch())
        switch (payload.type) {
            case "fetch_new": {
                const sortedItems = itemsCopy.sort((a, b) => {
                    let dateA = a.dateAdded
                    let dateB = b.dateAdded
                    if (dateA > dateB) return -1
                    else if (dateA < dateB) return 1
                    return 1
                })
                return reduxDispatch(filterProducts({ items: sortedItems }))
            }
            case "price_to_low": {
                const sortedItems = itemsCopy.sort((a, b) => {
                    let priceA = a.price
                    let priceB = b.price
                    if (priceA > priceB) return 1
                    else if (priceA < priceB) return -1
                    return 1
                })
                return reduxDispatch(filterProducts({ items: sortedItems }))
            }
            case "price_to_high": {
                const sortedItems = itemsCopy.sort((a, b) => {
                    let priceA = a.price
                    let priceB = b.price
                    if (priceA > priceB) return -1
                    else if (priceA < priceB) return 1
                    return 1
                })
                return reduxDispatch(filterProducts({ items: sortedItems }))
            }
            case "brand": {
                let brandItems = payload.items.filter((item) => item.brand === payload.brand && item.gender === payload.gender)
                return reduxDispatch(filterProducts({ items: brandItems }))
            }
            case "price": {
                let items = payload.items.filter(item => item.price < payload.price)
                return reduxDispatch(filterProducts({ items: items }))
            }
            default: {
                return payload.value
            }
        }
    }

    return {
        saveLastViewed,
        addToBag,
        updateWishlist,
        Sort
    }
}