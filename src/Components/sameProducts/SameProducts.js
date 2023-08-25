import {lazy, Suspense} from "react"
import ActionGetters from "../../Redux/ActionGetters/ActionGetters"

const ProductTab = lazy(() => import('../../Components/Tabs/ProductTab'))


export default function SameProducts({sameItems, getImage}) {
    const {saveLastViewed} = ActionGetters()
    return (
        <>
            <div className="relative mx-auto landscape:w-[41.5em] landscape:lg:w-[62.5em] portrait:w-[20.5em] portrait:sm:w-[41.5em] portrait:md:w-[47.5em] h-[1.5em] landscape:xl:h-[2em] flex items-center justify-start">
                    <h5 className="landscape:text-[0.7em] landscape:xl:text-[1em] portrait:text-[0.7em] portrait:sm:text-[0.8em] text-gray-800 font-quicksandBold uppercase text-start">
                        you might also like
                    </h5>
            </div>

            <section aria-label="related products section" className="relative w-full h-fit">

                <div className="relative w-full portrait:w-[20.5em] landscape:w-[41.5em] landscape:lg:w-[62.5em] portrait:sm:w-[41.5em] portrait:md:w-[47.5em] mx-auto h-fit flex flex-row flex-wrap portrait:gap-x-2 justify-start items-center landscape:gap-y-[1.5em] portrait:gap-y-[2em] landscape:gap-x-2">
                    {
                       sameItems.map((sameProduct, index) => {
                            return (
                                <Suspense key={index} fallback={'...loading'}>
                                    <ProductTab
                                        product={sameProduct}
                                        getImage={getImage}
                                        saveLastViewed={saveLastViewed}
                                        url={`/shoppy/${sameProduct.type}/${sameProduct.title}`}
                                    />
                                </Suspense>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
