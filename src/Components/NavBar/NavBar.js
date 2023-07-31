

import './navbar.style.css';
import { useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { DispatchContext, ShoppyContext, SHOW_NAV } from '../../AppContext/AppContext';
import TopNav from './TopNav';
import BottomNav from './BottomNav';



export default function NavBar() {


    const dispatchContext = useContext(DispatchContext)
    const contextState = useContext(ShoppyContext)
    const cartCount = useSelector(store => store.cart.count)
    const wishlist = useSelector(store => store.wishlist)
    const auth = useSelector(store => store.auth)
    const [scrollPosition, setScrollPosition] = useState(0)
    

   

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(c => window.scrollY)
        })
    }, [window.scrollY])

    useEffect(() => {
        if (window.scrollY < scrollPosition) dispatchContext({type: SHOW_NAV, payload: true})
        else if (window.scrollY > scrollPosition) dispatchContext({ type: SHOW_NAV, payload: false })
    }, [scrollPosition])


    return (
        <nav aria-label="nav-bar-section" className={`navbar-container h-[5em] w-full portrait:sm:h-[3.5em] landscape:lg:h-[4.5em] md:w-full relative landscape:h-[3.8em]`}>
            <div className={'w-full h-fit fixed top-0 z-50'}>
                <TopNav auth={auth} wishlist={wishlist} cartCount={cartCount} />
                <BottomNav contextState={contextState} />
            </div>
        </nav>
    )
}


