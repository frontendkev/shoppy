import {useLoaderData, useNavigate, useNavigation, useParams} from "react-router-dom";
import {lazy, Suspense, useEffect, useState} from 'react';
import TabLoader from "../../Components/Loaders/TabLoader";
import {fetchProducts, startFetch} from "../../Redux/ReduxSlices/ProductsSlice";
import ActionGetters from "../../Redux/ActionGetters/ActionGetters";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import Filter from "../../Components/Filter/Filter";
import {PriceRange, SelectDropDown} from "../../Components/DropDown/SelectDropDown"
import {sortProducts, femaleCategory, femaleBrand, femaleBodyFit, femaleSize} from '../../Components/Filter/FilterLinks'
import Loading from "../../Components/Loaders/Loading";
import {Options} from "../../Components/DropDown/Options";


const AddToCartTab = lazy(() => import('../../Components/Tabs/AddToCartTab'))


export default function ProductsPage() {

    const products = useSelector(store => store.products)
    const pageTitle = localStorage.getItem('page-title')
    const loaderData = useLoaderData()
    const {saveLastViewed, Sort} = ActionGetters()
    const navigation = useNavigation()
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)

    const [priceValue, setPriceValue] = useState(20000)
    const reduxDispatch = useDispatch()
    const [sort, setSort] = useState('recommended')
    const [brand, setBrand] = useState('all')
    const [category, setCategory] = useState('all')
    const gender = localStorage.getItem('gender')
    const params = useParams()


    const [postsPerPage, setPostsPerPage] = useState(15)
    const lastPost = currentPage * postsPerPage
    const firstPost = lastPost - postsPerPage
    const pageNumbers = []
    const items = products.products.slice(firstPost, lastPost)


    for (let i = 1; i <= Math.ceil(products.products.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    function getPage(number) {
        if (currentPage !== number) {
            return setCurrentPage(c => number)
        }
        return;
    }


    function sortItems(data) {
        data.event.preventDefault()
        setSort(c => data.value)
        getPage(1)
        return Sort({type: data.sort, items: products.products, gender: gender})
    }

    function filterBrand(data) {
        data.event.preventDefault()
        setBrand(c => data.value)
        getPage(1)
        return Sort({type: 'brand', items: loaderData, brand: data.value, gender: gender})
    }

    const getPrice = () => {
        return {
            price: priceValue,
            setPrice: (value) => {
                setPriceValue(c => value)
                getPage(1)
                return Sort({type: 'price', items: loaderData, price: value})
            }
        }
    }


    function getUrl(option) {
        localStorage.setItem('page-title', option.name)
        navigate(option.url)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])


    useEffect(() => {
        function getProducts(items) {
            reduxDispatch(startFetch())
            reduxDispatch(fetchProducts({items: items}))
        }

        getProducts(loaderData)
    }, [loaderData, reduxDispatch])


    if (navigation.state === "loading") {
        window.scrollTo(0, 0)
        return (
            <Loading/>
        )
    }


    if (products.isLoading) {
        window.scrollTo(0, 0)
        return (
            <Loading/>
        )
    }


    return (
        <section className={`w-full h-full relative`}>
            <BreadCrumbs/>
            <section
                className=" relative w-full h-[2em] flex justify-center items-center bg-gray-100 landscape:md:h-[2.8em]">
                <h2 className="font-quicksandregular text-[0.8em] landscape:md:text-[1em] uppercase text-gray-600">
                    {pageTitle}
                </h2>
            </section>

            <Filter>

                <SelectDropDown
                    id='sort'
                    optionsId={'sortOptions'}

                    value={"sort"}

                    showDefault={'recommended'}
                    filter={sort}
                >
                    {
                        sortProducts.map((option, index) => {
                            return (
                                <Options filter={sortItems} key={index} value={option}/>
                            )
                        })
                    }

                </SelectDropDown>

                <SelectDropDown
                    id='category'
                    optionsId={'categoryOptions'}

                    value={"category"}

                    showDefault={false}
                    filter={category}
                >
                    {
                        femaleCategory.map((option, index) => {
                            return (
                                <Options navigate={getUrl} key={index} value={option}/>
                            )
                        })
                    }

                </SelectDropDown>

                <SelectDropDown
                    id={'brand'}
                    optionsId={'brandOptions'}

                    value={"brand"}

                    showDefault={false}
                    filter={brand}
                >
                    {
                        femaleBrand.map((option, index) => {
                            return (
                                <Options filter={filterBrand} key={index} value={option}/>
                            )
                        })
                    }

                </SelectDropDown>

                <SelectDropDown
                    id={'fit'}
                    optionsId={'fitOptions'}

                    value={"body fit"}

                    showDefault={false}
                >
                    {
                        femaleBodyFit.map((option, index) => {
                            return (
                                <Options key={index} value={option}/>
                            )
                        })
                    }

                </SelectDropDown>

                <SelectDropDown
                    id={'size'}
                    optionsId={'sizeOptions'}

                    value={"size"}

                    showDefault={false}
                >
                    {
                        femaleSize.map((option, index) => {
                            return (
                                <Options key={index} value={option}/>
                            )
                        })
                    }

                </SelectDropDown>

                <SelectDropDown
                    id={'price'}
                    optionsId={'priceOptions'}

                    value={"price range"}

                >
                    <PriceRange min={20000} max={60000} getPrice={getPrice}/>

                </SelectDropDown>
            </Filter>

            <section className="relative w-full h-[3em] pt-[1em]">
                <h2 className="font-quicksandregular text-[0.8em] capitalize text-gray-600">
                    {products.count} styles found
                </h2>
            </section>
            {loaderData.length === 0 &&
                <section className={'w-full h-[20em] relative flex flex-col justify-center items-center gap-y-2'}>
                    <div
                        className="relative w-[6em] h-[6em] rounded-full bg-gray-300 opacity-70 mx-auto mb-2 before:absolute before:bg-rose-300 before:opacity-70 before:w-[6em] before:h-[6em] before:rounded-full before:left-[-1.5em] before:z-[5] z-[10] shadow-light before:shadow-light">

                    </div>
                    <h1 className="text-gray-700 text-[1em] font-quicksandregular">
                        {params.searchParam ? `no results found for ${params.searchParam}` : "no result found"}
                    </h1>
                </section>}

            <div className={'h-fit relative w-full'}>

                <div
                    className={' h-fit relative landscape:lg:w-[61.5em] portrait:sm:w-[31em] landscape:lg:pl-0 landscape:lg:pr-0 mx-auto portrait:md:w-[47.7em] portrait:lg:w-[61.5em] portrait:w-[70%] portrait:flex-col portrait:gap-x-2 flex landscape:flex-row flex-wrap portrait:lg:justify-start landscape:justify-start items-center landscape:gap-x-2 gap-y-[1.5em] portrait:gap-y-[1em] landscape:w-full landscape:md:gap-y-[1em] landscape:xl:w-[77em] landscape:md:w-[41.5em]'}>
                    {
                        items.map((product, index) => {
                            return (
                                <Suspense key={index} fallback={<TabLoader/>}>
                                    <AddToCartTab
                                        className={'card transition-all duration-500 ease-in-out'}
                                        product={product}
                                        saveLastViewed={saveLastViewed}
                                        url={`/shoppy/${product.gender}/${product.type}/${product.title}`}/>
                                </Suspense>
                            )
                        })
                    }
                </div>

            </div>
            <div className="relative w-full h-[2em] mb-2">
                <div className="relative w-[80%] h-full mx-auto flex flex-row items-center justify-center gap-x-2">
                    {
                        pageNumbers.map((number, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={(e) => getPage(number)}
                                    className={`relative flex items-center justify-center w-[1.5em] h-[1.5em] rounded-full hover:bg-rose-400 transition-all duration-300 ease-in-out landscape:w-[1.3em] landscape:h-[1.3em]
                                    ${currentPage === number ? 'bg-rose-400' : 'bg-rose-200'} ${pageNumbers.length > 1 ? 'opacity-[1]' : 'opacity-[0.5]'}`}

                                >
                                    <h2 className="text-gray-800 text-[0.7em] text-center font-quicksandBold">
                                        {number}
                                    </h2>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

