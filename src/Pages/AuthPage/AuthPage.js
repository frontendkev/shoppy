import {useEffect, useState} from "react"
import {Link, Outlet, useNavigation} from "react-router-dom"


export default function AuthPage() {

    const LOGIN = 'login'
    const REGISTER = 'register'
    const navigation = useNavigation()
    const [location, setLocation] = useState('')

    useEffect(() => {
        setLocation(c => navigation.location)
    }, [navigation.location])



    return (
        <div className={`relative w-full h-fit bg-gray-200 portrait:pt-1 landscape:pt-4`}>
            <div className="relative w-[10em] portrait:h-[3em] landscape:h-[4em] mx-auto">
                <h1 className="font-quicksandBold text-gray-500 portrait:text-[2em] landscape:text-[2.2em] uppercase text-center">
                    shoppy
                </h1>
            </div>
            <div className="relative portrait:w-full landscape:w-[40em] portrait:h-[3em] landscape:h-[5em] bg-white mx-auto flex flex-row gap-x-2 justify-between items-center">
                <Link
                    onClick={(e) => setLocation(c => REGISTER)}
                    to={'/shoppy/verification/register'}
                    className={`relative w-[50%] h-full flex items-center justify-center before:transition-all before:duration-500 before:ease-in-out before:absolute before:w-full before:z-10 before:left-[-5px] before:bottom-0 before:border-b-[1px] before:border-b-blue-500 ${location === REGISTER ? 'before:translate-x-[-0em]' : 'before:translate-x-[3em] before:opacity-0'}`}>
                    
                    <h2 className={`${location === REGISTER ? 'text-gray-600' : 'text-gray-400'} text-center font-quicksandBold lowercase text-[1.3em] transition-all duration-300 ease-in-out`}>
                        join
                    </h2>
                </Link>

                <div className="relative h-[1.5em] outline outline-1 outline-gray-300">

                </div>

                <Link
                    onClick={(e) => setLocation(c => LOGIN)}
                    to={"/shoppy/verification/login"}
                    className={`relative w-[50%] h-full flex items-center justify-center before:transition-all before:duration-500 before:ease-in-out before:absolute before:w-full before:z-10 before:left-[-5px] before:bottom-0 before:border-b-[1px] before:border-b-blue-500 ${location === LOGIN ? 'before:translate-x-[0em]' : 'before:translate-x-[-3em] before:opacity-0'}`}>

                    <h2 className={`${location === LOGIN ? 'text-gray-600' : 'text-gray-400'} text-center font-quicksandBold lowercase text-[1.3em] transition-all duration-300 ease-in-out`}>
                        sign in
                    </h2>
                </Link>
            </div>
            < hr style={{width: '40em', borderTop: '1px solid rgb(0, 0, 0, 0.2)', margin: '0 auto'}} />
            <div className="relative portrait:w-full landscape:w-[40em] h-fit mx-auto portrait:pb-0 landscape:pb-8">
                <Outlet />
            </div>
        </div>
    )
}
