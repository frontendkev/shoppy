

export const FixedLink = props => {
    return (
        <div className={'w-[13em] rounded-md h-10 bg-[#ee7e01] transition-all duration-200 ease-in-out hover:-translate-x-[8em] flex flex-row'}>
            <figure className={'w-[2.5em] h-full px-2 py-1'}>
                <img src={props.logo} className={'w-full h-full object-contain'} />
            </figure>
            <span className={'h-full w-fit pt-2'}>
                <h1 className={'capitalize font-quicksand font-bold text-white text-md cursor-default'}>
                    {props.title}
                </h1>
            </span>
        </div>
    )
}