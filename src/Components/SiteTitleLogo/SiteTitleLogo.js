import {Link} from 'react-router-dom';

export const SiteTitle = (props) => {
    return (
        <section aria-label="site-title-with-logo" className="w-fit h-full flex flex-row justify-center items-center cursor-pointer mr-2">
            <figure className=" w-4 md:w-8 h-full overflow-hidden pt-1 md:pt-2">
                <img className="object-contain w-5 h-5 mx-auto" src={props.logo} />
            </figure>
            <Link to={'/'} className="w-fit h-full pt-1 pl-1 md:pl-0 md:pt-1">
                <h1 className="text-[0.7em] md:text-2xl font-bold text-gray-800 font-quicksandBold">
                    {props.title}
                </h1>
            </Link>
        </section>
    )
}