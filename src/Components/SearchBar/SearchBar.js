import {useState} from 'react';


//search icon
import Search from '../../Svg/Search';

//importing search thunk service
import {useNavigate} from 'react-router-dom';


export const SearchBar = () => {


    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useState('')

    function sumbitSearch(e) {
        e.preventDefault()
        navigate(`/shoppy/search/${searchParams}`)
        localStorage.setItem("page-title", searchParams)
        return setSearchParams(() => '')
    }

    return (
        <form onSubmit={(e) => sumbitSearch(e)} aria-label="site-search-bar" className="flex w-full h-full rounded-[0.2em] flex-row justify-between items-center bg-white gap-x-2">
            <div className="w-[95%] h-full relative">
                <input value={searchParams} onChange={(e) => setSearchParams(() => e.target.value)} className='relative w-full h-full outline-none portrait:placeholder:text-[0.8em] landscape:placeholder:text-[1em] placeholder:font-quicksandsemibold landscape:pl-2 portrait:pl-[2px]' placeholder='search for items and brands...' required />
            </div>
            <button type='subumit'  className='relative portrait:w-[20px] portrait:sm:w-[5%] flex items-center justify-center md:w-8 md:h-full'>
                <Search />
            </button>
        </form>
    )
}
