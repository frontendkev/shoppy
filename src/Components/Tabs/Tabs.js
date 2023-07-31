import './tabs.css';
import { Link } from 'react-router-dom';
export const TabOne = props => {
    return (
        <section className={`relative flex flex-row mt-2 md:mt-3 cursor-pointer w-[10em] md:w-[13em] h-[4em] md:h-[3em] `}>
            <figure className={'w-[20%] md:w-[25%] h-full p-2'}>
                <img className={'h-full w-full object-contain'} src={props.image} />
            </figure>
            <div className={'relative h-full w-[80%] md:w-[70%] pt-4 md:pt-2 pl-1'}>
                <h3 className={'text-start font-bold leading-[0.6em] md:leading-[0.9em] text-gray-600 relative cursor-pointer'}>
                    <span className={'text-xs md:text-[1em] capitalize font-quicksandBold'}>{props.firstTitle}</span> <br />
                    <span className={'text-[0.6em] capitalize font-quicksandBold'}>{props.secondTitle}</span>
                </h3>
            </div>
        </section>
    )
}

export const TabTwo = props => {
    return (
        <div style={{ boxShadow: "0.2em 0.2em 0.2em rgb(0, 0, 0, 0.2)", }} className={`relative w-full md:w-[13em] h-[20em] flex flex-col bg-white rounded-[0.2em] before:absolute before:w-[120%] before:h-full before:-skew-x-[50deg] before:bottom-[0em] md:before:bottom-[-3em] before:right-[-14em] md:before:right-[-9em] overflow-hidden before:bg-gradient-to-r before:from-transparent before:to-orange-500 hover:before:to-orange-300 before:transition-all before:ease-in-out before:duration-500`}>
            <figure className={'relative w-full h-[80%] pt-4 pl-2 pr-2 '}>
                <img src={props.image} alt='category image is here' className={'relative w-full h-full object-contain'} />
                <Link to={`/products-page/${props.filter}`} className={'w-full h-[20%] pt-4'}>
                    <h3 className={'font-quicksandBold text-[1.4em] font-bold text-gray-600 capitalize text-center'}>{props.title}</h3>
                </Link>
            </figure>
        </div>
    )
}

export const ColoredTabSmall = (props) => {
    return (
        <div className={`${props.bg} pr-1 md:pr-0 cursor-pointer transition-all duration-300 ease-in-out shadow-md relative w-[50%] h-full rounded-[0.3em] flex flex-row gap-1`}>
            <div className={'relative w-[50%] h-full font-quicksandBold pt-4 pl-2 text-start'}>
                <h2 className={'text-[0.8em] md:text-[1.5em] text-gray-600 capitalize leading-[1em]'}>{props.title}</h2>
                <h4 className={'text-[0.6em] md:text-[0.7em] text-gray-500 leading-[0.9em] mt-2'}>for the best shipping discounts</h4>

                <div className={'shadow-md relative w-[5em] h-[1.6em] md:pt-1 md:p-0 md:w-[6em] md:h-[2em] mt-4 bg-gray-400 cursor-pointer transition-all duration-300 ease hover:bg-gray-600 text-xs md:text-sm rounded-[0.2em] text-center text-white font-quicksandBold'}>
                    click here
                </div>
            </div>

            <figure className={'relative w-[50%] h-full'}>
                <img className={'relative w-full h-full object-contain'} src={props.image} />
            </figure>
        </div>
    )
}

export const SalesTabOne = ({ product }) => {

    return (
        <section className={'w-[10em] md:w-[16%] h-full md:h-[17em] rounded-[0.3em] shadow-md'}>

            <figure className={'relative w-full h-[50%] md:h-[70%] p-1 md:p-4 overflow-hidden'}>
                <div className={'bg-orange-400 w-[2em] h-[1.5em] absolute z-[10] top-[16%] rounded-sm'}>
                    <strong className={'text-xs font-quicksandBold relative text-white text-center'}>
                        {
                            '-' + product.discount.value + '%'
                        }
                    </strong>
                </div>
                <img className={'sales-image w-[70%] h-[70%] relative top-[20%] left-[1em] object-contain'} src={product.image} />
            </figure>

            <section className={'relative w-full h-fit'}>
                <div className={'relative pl-2 w-full h-[50%] md:h-[70%] text-start'}>
                    <h2 className={'capitalize font-quicksand text-xs font-bold text-gray-700'}>
                        {product.title.slice(0, 22) + '...'}
                    </h2>

                    <h2 className={'text-xs font-quicksand font-bold text-gray-700'}>
                        {
                            '$' + Number(product.price - product.price * product.discount.value / 100).toLocaleString()
                        }
                    </h2>

                    <h2 className={'text-xs font-quicksand font-bold line-through text-red-400'}>
                        {'$' + product.price.toLocaleString()}
                    </h2>
                </div>


                <div className={'w-full text-start text-xs flex flex-col font-quicksand font-normal h-[30%] md:h-[10%] pl-2 pr-2'}>
                    <label htmlFor={'quantity-progress'} className={'text-xs'}>
                        {product.product.sold + ' ' + 'sold' + ' ' + 'out of' + ' ' + product.product.quantity}
                    </label>
                    <div id={'quantity-progress'} className={'h-[0.5em] md:h-2 w-full bg-gray-300 rounded-md'}>
                        <div className={'h-full bg-orange-400 rounded-md'} style={{ width: `${product.product.sold / Number(product.product.quantity / 100)}` + '%' }}>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

