import { Link } from "react-router-dom";
import { NavLinks as links } from "../../utilities/NavLinks";
import './sidepanel.scss';
export const SidePanel = props => {
    return (
        <aside className="side-panel relative bg-white h-full w-full mx-auto pt-1 rounded-sm">
        <ul>
            {
                links.map((navlink, index) => {
                    return (
                        <li key={index} className='h-7 transition-all duration-300 ease-linear hover:text-orange-500'>
                            <Link to={ navlink.link }>
                                <h2 className="capitalize font-normal text-sm">{navlink.title}</h2>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </aside>
    )
}