import {useState} from "react";
import Bag from "../../Svg/Bag";
import Heart from "../../Svg/Heart";
import DynamicButton from "../Buttons/DynamicButton";
import ProductDropDown from "../DropDown/ProductDropDown";
import Star from "../../Svg/Star";

function ProductBanner({ product, addToBag, image, getImage, updateWishlist }) {
    const [color, setColor] = useState('')

    function getInfo(file, color) {
        getImage(file)
        setColor(c => color)
    }


    function sendProduct(location) {
        const colorImage = image ? image : product[0].image.file
        const colorName = color ? color : product[0].color

        switch (location) {
            case "wishlist": {
                return updateWishlist(product[0])
            }
            case "bag": {
                return addToBag(product[0], colorImage, colorName, 20)
            }
            default: {
                return location
            }
        }

    }
    return (
        <section className={"relative w-full h-full portrait:h-fit landscape:h-[35em] portrait:sm:h-[50vh]"}>

            <div className="relative w-full portrait:w-[20em] portrait:sm:w-[41em] h-full mx-auto flex flex-col portrait:flex-col portrait:gap-y-1 portrait:sm:flex-row gap-y-2 portrait:sm:gap-x-2 justify-center landscape:flex-row landscape:gap-x-2 landscape:xl:gap-x-4">

                <div className="relative portrait:w-full landscape:w-[3em] landscape:h-full portrait:h-[3.55em] portrait:md:w-[4em] portrait:sm:w-[3em] portrait:sm:h-full">
                    <div className="relative w-full h-full flex flex-col portrait:flex-row portrait:sm:flex-col portrait:justify-center portrait:sm:justify-start justify-start portrait:gap-x-2 portrait:sm:gap-y-2 landscape:gap-y-2">
                        {
                            product[0] && product[0].preview.map((item, index) => {
                                return (
                                    <figure onClick={() => getImage(item)} key={index} className="relative portrait:w-[3em] portrait:h-full portrait:sm:w-full portrait:sm:h-[4.5em] overflow-hidden landscape:h-[4.5em]">
                                        <img className="relative w-full h-full object-cover object-top" src={item} alt='' />
                                    </figure>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="relative portrait:h-[500px] landscape:h-full landscape:w-[20em] landscape:xl:w-[30em] portrait:w-[20em] portrait:md:w-[30em]">
                    <figure className="relative w-full h-full">
                        <img src={image ? image : product[0] && product[0].image.file} className={'relative w-full h-full object-top object-cover'} alt='' />
                    </figure>
                </div>

                <div className="relative h-fit w-full landscape:w-[20em] portrait:w-[20em] portrait:sm:w-[17em] flex flex-col gap-y-3">
                    <div className={'relative w-full h-fit'}>
                        <h1 className={'text-start text-[1em] text-gray-800 font-quicksandregular capitalize'}>
                            {product[0] && product[0].title}
                        </h1>
                    </div>


                    <div className="relative w-[7em] h-fit leading-[1.1em]">
                        <h1 className="text-start text-[0.7em] text-gray-800 font-quicksandregular capitalize">
                            price
                        </h1>
                        <h1 className="relative text-[1em] text-gray-800 font-quicksandregular text-start">
                            NGN {Number(product[0] && product[0].price).toLocaleString()}
                        </h1>
                    </div>

                    <div className="relative flex flex-row w-full h-fit justify-start items-center gap-x-2">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />

                        <h1 className="relative text-[0.8em] font-quicksandregular text-gray-800">
                            4.8
                        </h1>

                        <h1 className="relative text-[0.8em] font-quicksandregular text-gray-800">
                            (2,500)
                        </h1>
                    </div>



                    <div className="relative w-full h-fit">
                        <h1 className="relative text-start text-[0.7em] text-gray-800 font-quicksandregular capitalize">
                            color: {color ? color : product[0] && product[0].color}
                        </h1>

                        <div className={'w-full h-[4em] flex flex-row gap-x-2 pt-2 relative justify-start items-center'}>

                            {
                                product[0] && product[0].colors.map((item, index) => {
                                    return (
                                        <figure key={index} onClick={() => getInfo(item.image, item.color)} className="relative w-[2.9em] h-full">
                                            <img src={item && item.image} className='relative w-full h-full object-scale-down' alt='' />
                                        </figure>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className="relative w-full h-fit">
                        <label htmlFor="size-selector" className="relative float-left text-[0.7em] text-gray-800 font-quicksandregular capitalize">
                            available sizes
                        </label>

                        <select id='size-selector' className={'w-full h-[2em] flex flex-row gap-x-1 pl-1 relative bg-white outline outline-1 outline-gray-200'}>

                            <option className={'relative w-[2em] h-[1.3em] cursor-pointer'}>
                                please select a size
                            </option>
                            <option className={'relative w-[2em] h-[1.3em] cursor-pointer'}>
                                xsm-29
                            </option>
                        </select>
                    </div>

                    <div className="relative w-full h-[2.5em]">

                        <div className="relative w-full h-full flex flex-row gap-x-4 portrait:sm:gap-x-2">

                            <DynamicButton sendProduct={sendProduct} text={'add to bag'} image={<Bag />} />

                            <button onClick={(e) => sendProduct('wishlist')} className="group relative w-[2.5em] hover:bg-gray-800 h-full rounded-full bg-rose-600 pt-1">
                                <Heart className={'relative h-6 w-6 mx-auto group-hover:stroke-rose-400 stroke-white'} />
                            </button>
                        </div>


                    </div>

                    <div className="relative w-full h-[7em] bg-gray-200 pl-2 text-start text-[0.7em] text-gray-800 font-quicksandregular capitalize pt-2">
                        <h1 className="font-quicksandBold text-[1.2em] uppercase">
                            sizing help
                        </h1>

                        <h1>
                            still unsure what size to get?
                        </h1>

                        <h1 className="underline">
                            find your recommended size
                        </h1>
                    </div>

                    <div className="relative w-full h-fit">
                        <ProductDropDown title={'description'} text={product[0] && product[0].description} />
                        <ProductDropDown title={'gender'} text={product[0] && product[0] && product[0].gender} />
                        <ProductDropDown title={'product details'} text={product[0] && product[0].description} />
                    </div>





                </div>
            </div>
        </section>
    )
}

export default ProductBanner;
