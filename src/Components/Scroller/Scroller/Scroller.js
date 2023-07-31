
import {useReducer} from "react";
import {HomeReducer, InitialState} from "../../../Pages/Home/Home.Reducer";


export default function Scroller(){
    const [ state, dispatch ] = useReducer( HomeReducer, InitialState);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            dispatch({ type: 'WINDOW_DOWN', payload : { position: 'bottom-[13em] md:bottom-[1em]', showScroll: true}})
        } else {
            dispatch({type: "WINDOW_UP" , payload : { position: 'bottom-[15em] md:bottom-[4em]', showScroll: false}})
        }
    });

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={'relative w-full h-full'}>
            <section onClick={() => scrollUp()} style={{boxShadow: "0.3em 0.3em 0.5em rgb(0, 0, 0, 0.4)"}} className={`${state.showScrollButton ? 'opacity-100 block' : 'opacity-0 hidden'} pt-3 transition-all duration-300 ease-in-out fixed w-[2.5em] h-[2.5em] rounded-full bg-blue-500 z-50 right-2 bottom-[2em] landscape:md:right-[2em] cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 mx-auto ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </section>

           
        </div>
    )
}
