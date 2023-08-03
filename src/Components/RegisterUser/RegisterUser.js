import {useEffect, useState} from "react"
import {useNavigation} from "react-router-dom"
import telegram from '../../images/socials/telegram.png'
import twitter from '../../images/socials/twitter.png'
import facebook from '../../images/socials/facebook.png'


export default function RegisterUser() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation()
    const [loginClass, setLoginClass] = useState('translate-x-[-4em] opacity-0')


 useEffect(() => {
     setLoginClass('opacity-100')
     navigation.location = 'register'
 }, [])
    
    
    return (
        <div className={`${loginClass} transition-all duration-300 ease-in-out relative z-20 w-full mx-auto h-[48em] bg-white`}>

            <div className="relative w-full h-[4em] pt-2 ">
                <h2 className="uppercase font-quicksandBold text-gray-700 text-[1.2em]">
                    sign up with...
                </h2>
            </div>

            <div className="relative w-full h-[3em] gap-x-2 flex flex-row pl-4 pr-4">
                <button className="relative w-full h-full outline outline-2 outline-gray-300 pl-2 pr-2 ">
                    <figure className="relative w-[2em] h-full float-left pt-[0.8em]">
                        <img
                            alt={'telegram logo here'}
                            className="relative w-[1.5em] h-[1.5em] mx-auto rounded-full"
                            src={telegram} />
                    </figure>
                    <div className="relative w-full h-full pt-[0.8em]">
                        <h2 className="font-quicksandBold text-gray-700 uppercase text-[1em]">
                            telegram
                        </h2>
                    </div>
                </button>

                <button className="relative w-full h-full outline outline-2 outline-gray-300 pl-2 pr-2">
                    <figure className="relative w-[2em] h-full float-left pt-[0.8em]">
                        <img
                            alt={'twitter logo here'}
                            className="relative w-[1.5em] h-[1.5em] mx-auto rounded-full"
                            src={twitter} />
                    </figure>
                    <div className="relative w-full h-full pt-[0.8em]">
                        <h2 className="font-quicksandBold text-gray-700 uppercase text-[1em]">
                            twitter
                        </h2>
                    </div>
                </button>

                <button className="relative w-full h-full outline outline-2 outline-gray-300 pl-2 pr-2 ">
                    <figure className="relative w-[2em] h-full float-left pt-[0.8em]">
                        <img
                            alt={'facebook logo here'}
                            className="relative w-[1.5em] h-[1.5em] mx-auto rounded-full"
                            src={facebook} />
                    </figure>
                    <div className="relative w-full h-full pt-[0.8em]">
                        <h2 className="font-quicksandBold text-gray-700 uppercase text-[1em]">
                            facebook
                        </h2>
                    </div>
                </button>
            </div>

            <div className="relative w-full h-[5em] pt-[0.8em]">
                <p className="font-quicksandregular font-bold text-center leading-[1.7em] text-[0.8em] text-gray-600 lowercase"> <span className="uppercase">s</span>igning up with social is super quick. <span className="uppercase">n</span>o extra passwords to remember - no brain fail. < br />
                <span className="uppercase">d</span>on't worry , we'd never share any of your data or post anything on your behalf #notevil
                </p>
            </div>

            <div className="relative w-full h-[4em] pt-2 ">
                <h2 className="uppercase font-quicksandBold text-gray-700 text-[1.2em]">
                    or sign up with email...
                </h2>
            </div>

            <form  className="relative w-[60%] mx-auto h-fit pt-2 flex flex-col gap-y-4 pl-2 pr-2">
                <div className="relative w-full h-fit flex flex-col mx-auto gap-y-2 justify-between">
                    <label className="font-quicksandsemibold text-gray-500 text-[0.8em] text-start uppercase mb-2">
                        username:
                    </label>

                    <input className="outline outline-1 h-[2.3em] text-center outline-gray-700 w-full" type={'text'} value={username} onChange={(e) => setUsername(c => e.target.value)} name='username' required />
                </div>

                <div className="relative w-full h-fit flex flex-col mx-auto gap-y-2 justify-between">
                    <label className="font-quicksandsemibold text-gray-500 text-[0.8em] text-start uppercase mb-2">
                        email:
                    </label>

                    <input className="outline outline-1 text-center outline-gray-700 w-full h-[2.3em]" type={'email'} value={email} onChange={(e) => setEmail(c => e.target.value)} name='email'  required />
                </div>

                <div className="relative w-full h-fit flex flex-col mx-auto gap-y-2 justify-between">
                     <label className="font-quicksandsemibold text-gray-500 text-[0.8em] text-start uppercase mb-2">
                        password
                    </label>

                    <input className="outline outline-1 text-center outline-gray-700 w-full h-[2.3em]" type={'password'} value={password} onChange={(e) => setPassword(c => e.target.value)} name='password'  required />
                </div>

                <div className="relative w-full h-fit flex flex-col mx-auto gap-y-2 justify-between">
                     <label className="font-quicksandsemibold text-gray-500 text-[0.8em] text-start uppercase mb-2">
                        confirm password
                    </label>

                    <input className="outline outline-1 text-center outline-gray-700 w-full h-[2.3em]" type={'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(c => e.target.value)} name='password'  required />
                </div>
                <div className="relative w-full h-fit mt-2 flex flex-col gap-y-3 items-center justify-center">

                    <button
                        type="submit"
                        className="relative w-full h-[2.8em] bg-gray-700 uppercase font-quicksandsemibold text-white text-[1em]">
                        join shoppy
                    </button>
                </div>
            </form>
        </div>
    )
}