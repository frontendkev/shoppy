import './navbar.style.css';
import {useSelector} from 'react-redux';
import TopNav from './TopNav';
import BottomNav from './BottomNav';


export default function NavBar() {

    const cartCount = useSelector(store => store.cart.count)
    const wishlist = useSelector(store => store.wishlist)
    const auth = useSelector(store => store.auth)

    return (
        <nav aria-label="nav-bar-section" className={`navbar-container portrait:h-[68px] bg-gray-800 landscape:h-[70px] w-full portrait:sm:h-[90px] landscape:lg:h-[80px] md:w-full relative overflow-hidden`}>
            <div className={'w-full portrait:h-[68px] portrait:sm:h-[90px] landscape:h-[81px] fixed top-0 overflow-hidden z-50'}>
                <TopNav auth={auth} wishlist={wishlist} cartCount={cartCount} />
                <BottomNav />
            </div>
        </nav>
    )
}
