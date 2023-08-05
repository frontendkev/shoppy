import './navbar.style.css';
import {useSelector} from 'react-redux';
import TopNav from './TopNav';
import BottomNav from './BottomNav';


export default function NavBar() {

    const cartCount = useSelector(store => store.cart.count)
    const wishlist = useSelector(store => store.wishlist)
    const auth = useSelector(store => store.auth)

    return (
        <nav aria-label="nav-bar-section" className={`navbar-container portrait:h-[70px] bg-gray-800 landscape:h-[81px] w-full portrait:sm:h-[3.5em] landscape:lg:h-[4.5em] md:w-full relative landscape:h-[3.8em]`}>
            <div className={'w-full portrait:h-[120px] landscape:h-[81px] fixed top-0 z-50'}>
                <TopNav auth={auth} wishlist={wishlist} cartCount={cartCount} />
                <BottomNav />
            </div>
        </nav>
    )
}
