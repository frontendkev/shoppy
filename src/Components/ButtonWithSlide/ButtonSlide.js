

export default function ButtonSlide (props) {
    return (
    <section className={`relative w-fit pl-2 pr-2 md:w-fit h-full
     ${props.textColor?props.textColor:'text-black'}
     hover:text-orange-600
     ${props.paddingTop ? props.paddingTop : 'pt-0'}
      cursor-pointer transition-all duration-500
     ease-in-out
     before:absolute
     before:w-0 hover:before:w-full
      before:transition-all before:duration-500
      before:ease-in-out before:h-1 ${props.top ? 'before:top-0': 'before:bottom-0'}
      before:left-0 before:z-1 before:bg-orange-600 flex justify-center items-center`}>
            <h1 className={`relative capitalize ${props.fontWeight} text-center`}>{props.count ? props.text+'('+props.count+')' :props.text}</h1>
        </section>
    )
}
