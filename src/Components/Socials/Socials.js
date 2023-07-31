import visa from '../../images/socials/visa.png'
import mastercard from '../../images/socials/mastercard.png'
import paypal from '../../images/socials/paypal.png'
import americanexpress from '../../images/socials/americanexpress.png'
import visaelectron from '../../images/socials/visaelectron.png'
import facebook from '../../images/socials/facebook.png'
import twitter from '../../images/socials/twitter.png'
import telegram from '../../images/socials/telegram.png'
export default function Socials () {
    return (
        <>
        <hr />
        <section className="relative w-full h-[4em] flex flex-row justify-center items-center gap-x-2 md:gap-x-8">
            <figure className="relative w-[2em] h-[2em] rounded-full">
                <img className='relative w-full h-full object-scale-down' alt='' src={facebook} />
            </figure>

            <figure className="relative w-[2em] h-[2em] rounded-full">
            <img className='relative w-full h-full object-scale-down' alt='' src={twitter} />
            </figure>
           

            <figure className="relative w-[2em] h-[2em] rounded-full">
            <img className='relative w-full h-full object-scale-down' alt='' src={telegram} />
            </figure>

            <div className="relative h-[40%] outline outline-[0.1em] outline-gray-300">

            </div>

            <figure className='relative w-[2em] h-[2em]'>
                <img alt='' src={visa} className='relative w-full h-full object-contain' />
            </figure>

            <figure className='relative w-[2em] h-[2em]'>
                <img alt='' src={mastercard} className='relative w-full h-full object-contain' />
            </figure>


             <figure className='relative w-[2em] h-[2em]'>
                <img alt='' src={paypal} className='relative w-full h-full object-contain' />
            </figure>

            <figure className='relative w-[2em] h-[2em]'>
                <img alt='' src={americanexpress} className='relative w-full h-full object-contain' />
            </figure>

            <figure className='relative w-[2em] h-[2em]'>
                <img alt='' src={visaelectron} className='relative w-full h-full object-contain' />
            </figure>
        </section>
        </>
    )
}