

export const Options = ({ className, value, filter, navigate }) => {

    function getFilter(e) {
        if (filter) return filter({ value: value.name, sort: value.sort, event: e })
        else if (navigate) return navigate(value)
    }

    return (
        <button onClick={(e) => getFilter(e)} className={className ? className : "relative w-full h-[1.7em] pt-1 bg-white rounded-[0.3em] pl-2 last:mb-[0.5em] hover:bg-blue-300 transition-all duration-300 ease-in-out "}>
            <h2 className="text-start text-[0.8em] portrait:text-[0.7em] landscape:text-[0.65em] text-gray-600 font-quicksandregular capitalize">
                {value.name ? value.name : 'value'}
            </h2>
        </button>
    )
}
