import {useEffect, useState} from "react";
import {useLoaderData, useNavigation, useParams} from "react-router-dom";
import Socials from "../../Components/Socials/Socials";
import RecentlyViewed from "../../Components/RecentlyViewed/RecentlyViewed";
import {useDispatch, useSelector} from "react-redux";
import {fetchLastViewed} from "../../Redux/ReduxSlices/ProductsSlice";
import Reviews from "../../Components/Reviews/Reviews";
import FabFits from "../../Components/Adverts/FabFits";
import Line from "../../Components/Line/Line";
import SameProducts from "../../Components/sameProducts/SameProducts";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import {saveProduct} from "../../Redux/ReduxSlices/ProductSlice";
import ActionGetters from "../../Redux/ActionGetters/ActionGetters";
import Loading from "../../Components/Loaders/Loading";


function ProductPage() {

    const params = useParams();
    const reduxDispatch = useDispatch()
    const product = useSelector(store => store.product)
    const loaderData = useLoaderData()
    const navigation = useNavigation()
    const [image, setImage] = useState('')
    const {addToBag, updateWishlist} = ActionGetters()
    

    function getImage(file) {
        return setImage(c => file)
    }

    useEffect(() => {
        let item = product.product
        setImage(c => item.image)
    }, [product.product])

    useEffect(() => {
        reduxDispatch(fetchLastViewed())
        reduxDispatch(saveProduct({
            items: loaderData,
            title: params.title
        }))
    }, [params.title, loaderData, reduxDispatch])

   

    if (navigation.state === "loading") {
        window.scrollTo(0, 0)
        return (
            <Loading />
        )
    }

    return (
        <section aria-label="single-product-page" className="w-full relative h-full flex flex-col portrait:gap-y-1 landscape:lg:gap-y-2 landscape:md:flex-none">

            <FabFits />

            <BreadCrumbs />

            <ProductDetails
                addToBag={addToBag}
                product={product.product}
                image={image}
                getImage={getImage}
                updateWishlist={updateWishlist}
            />
            <Line className={'relative w-[90%] mx-auto h-[2em] pt-4 mb-2 mt-2'} />

            <SameProducts sameItems={product.similarProducts} />

            <Line className={'relative w-[90%] mx-auto h-[2em] pt-4 mb-2 mt-2'} />

            <Reviews type={params.type} />

            <Line className={'relative w-[90%] mx-auto h-[2em] pt-4 mb-2 mt-2'} />

            <RecentlyViewed />

            <Socials />

        </section>
    )
}


export default ProductPage;
