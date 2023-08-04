import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate, useNavigation} from "react-router-dom"
import {loginUser} from "../../Redux/ThunkServices/thunkConnections"
import telegram from '../../images/socials/telegram.png'
import twitter from '../../images/socials/twitter.png'
import facebook from '../../images/socials/facebook.png'


export default function Login() {
    const reduxDispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useSelector(store => store.auth)
    const navigate = useNavigate()
    const [loginClass, setLoginClass] = useState('translate-x-[4em] opacity-0')
    const navigation = useNavigation()

    const submitLogin = (e) => {
        e.preventDefault()
        return reduxDispatch(loginUser({ email: email, password:password }))
    }

    useEffect(() => {
        setLoginClass('opacity-100')
        navigation.location = 'login'
    }, [])

    useEffect(() => {
        function redirect() {
            if (auth.isLoggedIn) return navigate(-1)
        }
        redirect()
    }, [auth.isLoggedIn])
    return (
        <div className={`${loginClass} transition-all duration-300 ease-in-out relative z-20 w-[100%] mx-auto portrait:h-[80vh] landscape:h-[30em] pt-[2em] bg-white` }>

            <form onSubmit={(e) => submitLogin(e)} className={`flex flex-col gap-y-[2em] w-[50%] h-fit mx-auto `}>

                <div className="relative w-full h-fit flex flex-col mx-auto gap-y-2 justify-between">
                    <label className="font-quicksandsemibold text-gray-500 text-[0.8em] text-start uppercase mb-2">
                        email address:
                    </label>

                    <input
                        className="outline outline-1 placeholder:text-center h-[2.3em] text-center outline-gray-700 w-full"
                        type={'email'}
                        value={email}
                        onChange={(e) => setEmail(c => e.target.value)}
                        name='email'
                        required />
                </div>

                <div className="relative w-full h-fit flex flex-col mx-auto gap-y-2 justify-between">
                    <label className="font-quicksandsemibold text-gray-500 text-[0.8em] text-start uppercase mb-2">
                        password:
                    </label>

                    <input className="outline outline-1 placeholder:text-center h-[2.3em] text-center outline-gray-700 w-full" type={'password'} value={password} onChange={(e) => setPassword(c => e.target.value)} name='password' required />
                </div>

                <div className="relative w-full h-fit mt-2 flex flex-col gap-y-3 items-center justify-center">

                    <button
                        type="submit"
                        className="relative w-full h-[2.8em] bg-gray-700 uppercase font-quicksandsemibold text-white text-[1em]">
                        sign in
                    </button>
                </div>
            </form>
            <div className="relative w-full mx-auto h-fit mt-2 flex flex-col gap-y-[1.5em] pt-2 items-center justify-center">
                <h2 className="text-gray-700 text-[0.8em] capitalize font-quicksandregular">
                    forgot password?
                </h2>

                <div className="relative w-full h-[2em] pt-1 ">
                    <h2 className="uppercase font-quicksandBold text-gray-700 text-[1em]">
                        or sign in with...
                   </h2>
                </div>

                <div className="relative w-full h-[3em] gap-x-2 flex flex-row justify-center portrait:pl-2 portrait:pr-2 landscape:pr-4 landscape:pl-4">
                    <button className="relative w-full h-full outline outline-2 outline-gray-300 pl-2 pr-2 flex flex-row justify-center">
                        <figure className="relative w-[2em] h-full pt-[0.8em]">
                            <img
                                alt={'telegram logo here'}
                                className="relative w-[1.5em] h-[1.5em] mx-auto rounded-full"
                                src={telegram} />
                        </figure>
                        <div className="relative landscape:w-[6em] h-full pt-[0.8em]">
                            <h2 className="font-quicksandBold text-gray-700 uppercase text-[1em]">
                                telegram
                            </h2>
                        </div>
                    </button>

                    <button className="relative w-full h-full outline outline-2 outline-gray-300 pl-2 pr-2 flex flex-row justify-center">
                        <figure className="relative w-[2em] h-full pt-[0.8em]">
                            <img
                                alt={'twitter logo here'}
                                className="relative w-[1.5em] h-[1.5em] mx-auto rounded-full"
                                src={twitter} />
                        </figure>
                        <div className="relative landscape:w-[6em] h-full pt-[0.8em]">
                            <h2 className="font-quicksandBold text-gray-700 uppercase text-[1em]">
                                twitter
                            </h2>
                        </div>
                    </button>

                    <button className="relative w-full h-full outline outline-2 outline-gray-300 pl-2 pr-2 flex flex-row justify-center">
                        <figure className="relative w-[2em] h-full pt-[0.8em]">
                            <img
                                alt={'facebook logo here'}
                                className="relative w-[1.5em] h-[1.5em] mx-auto rounded-full"
                                src={facebook} />
                        </figure>
                        <div className="relative landscape:w-[6em] h-full pt-[0.8em]">
                            <h2 className="font-quicksandBold text-gray-700 uppercase text-[1em]">
                                facebook
                            </h2>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
