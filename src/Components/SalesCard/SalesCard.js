import { Link } from "react-router-dom";
export const SalesCard = ({children, title, background, filter, category}) => {
    return (
        <section className={'relative w-[90%] md:w-[80%] h-full bg-white mx-auto rounded-[0.2em] overflow-hidden shadow-md pb-7'}>
            <section aria-label={'sales-title'} className={`relative flex flex-row justify-between h-8 w-full pl-2 pr-2 ${background}`}>
                <h1 className={'text-white capitalize text-sm md:text-lg font-bold font-quicksand mt-1'}>
                    {title}
                </h1>

                <Link to={`/products-page/${filter}/${category}`}>
                    <h3 className={'cursor-pointer font-bold text-xs md:text-sm font-quicksand text-white mt-2'}>
                        see more
                    </h3>
                </Link>
            </section>
            <section className={'pb-2 w-full h-full overflow-scroll md:overflow-hidden md:pl-2 md:pr-2'}>
                <div className={'w-fit md:w-full h-full flex flex-row justify-between items-center'}>
                    {children}
                </div>
            </section>
        </section>
    )
}