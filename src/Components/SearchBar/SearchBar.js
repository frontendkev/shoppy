import {useState} from 'react';


//search icon
import Search from '../../Svg/Search';

//importing search thunk service
import {useNavigate, useParams} from 'react-router-dom';


export const SearchBar = () => {

    const params = useParams()

    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useState('')

    function sumbitSearch(e) {
        e.preventDefault()
        navigate(`/shoppy/${params.gender}/search/${searchParams}`)
        localStorage.setItem("page-title", searchParams)
        return setSearchParams(c => '')
    }

    return (
        <form onSubmit={(e) => sumbitSearch(e)} aria-label="site-search-bar" className="flex w-full h-full rounded-[0.2em] overflow-hidden flex-row justify-between items-center bg-white px-2">
            <div className="w-[95%] h-full relative">
                <input value={searchParams} onChange={(e) => setSearchParams(c => e.target.value)} className='relative w-full h-full outline-none placeholder:text-[0.8em] placeholder:font-quicksandsemibold' placeholder='search for items and brands...' required />
            </div>
            <button type='subumit'  className='relative md:w-10 md:h-full md:pt-[0.3em] md:pl-3'>
                <Search />
            </button>
        </form>
    )
}
