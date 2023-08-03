import LogoCard from "../../Components/Cards/LogoCard";
import MediumCard from "../../Components/Cards/MediumCard";
import SimpleCard from "../../Components/Cards/SimpleCard";
import {Link, useNavigation, useParams} from "react-router-dom";
import femalebanner from '../../images/femalepage/femalebanner.jpeg'
import femalebannertwo from '../../images/femalepage/femalebanner2.jpeg'
import lingerie from '../../images/femalepage/lingerie.jpeg'
import hoodie from '../../images/femalepage/hoodie.jpg'
import weekend from '../../images/femalepage/weekend.jpeg'
import topShop from '../../images/femalepage/topshop.jpeg'
import classy from '../../images/femalepage/classy.jpeg'
import monkl from '../../images/femalebrands/monkl.png'
import dressed from '../../images/femalebrands/dressed.png'
import topshoplogo from '../../images/femalebrands/topshop.png'
import reclaimer from '../../images/femalebrands/reclaimer.png'
import collusion from '../../images/femalebrands/collusion.png'
import weekday from '../../images/femalebrands/weekday.png'
import Socials from "../../Components/Socials/Socials";
import FabFits from "../../Components/Adverts/FabFits";
import Limited from "../../Components/Adverts/Limited";
import Gifts from "../../Components/Adverts/Gifts";
import DayTimeWoman from '../../images/femalepage/daytimewoman.jpeg'
import SkinTone from '../../images/femalepage/skintone.jpeg'
import VictoriasSecret from '../../images/femalepage/victorias_secret.jpeg'
import GlamDresses from '../../images/femalepage/glamdresses.jpeg'
import TopWoman from '../../images/femalepage/topwoman.jpeg'
import ClassyWoman from '../../images/femalepage/classywoman.jpeg'
import WelcomeBanner from "../../Components/WelcomeBanner/WelcomeBanner";
import sportsWear from '../../images/femalepage/sportswear.jpg'
import {useEffect, useRef, useState} from "react";
import {observeMultiple, observeSingle} from "../../Ui/Observers/Observers";
import {styleFour, styleOne, styleThree, styleTwo} from "../../Ui/Observers/Styles/Styles";
import SmallIntroCard from "../../Components/Cards/smallIntroCard";
import RightArrow from "../../Svg/RightArrow";
import LeftArrow from "../../Svg/LeftArrow";
import maleBanner from '../../images/malepage/malebanner.jpeg'
import malebannertwo from '../../images/malepage/malebanner2.jpeg'
import gift from '../../images/malepage/gift.jpeg';
import layer from '../../images/malepage/layer.png'
import obey from '../../images/malepage/obey.jpeg'
import sole from '../../images/malepage/sole.png'
import Season from '../../images/malepage/season.jpeg'
import CoupleGoal from '../../images/malepage/couplegoal.jpeg'
import BestDeals from '../../images/malepage/best_deals.jpeg'
import TopMan from '../../images/malepage/top_man.jpeg'
import Brand from '../../images/malepage/brand.jpeg'
import StreetWear from '../../images/malepage/streetwear.jpeg'
import dateNight from '../../images/malepage/datenight.jpeg'
import topman from '../../images/malepage/topman.jpeg'
import adidaslogo from '../../images/malebrands/adidaslogo.png';
import carharttlogo from '../../images/malebrands/carharttlogo.png';
import drmartenslogo from '../../images/malebrands/drmartenslogo.png';
import ellesselogo from '../../images/malebrands/ellesselogo.png';
import northfacelogo from '../../images/malebrands/northfacelogo.png';
import tommyhilfigerlogo from '../../images/malebrands/tommyhilfigerlogo.png';
import Loading from "../../Components/Loaders/Loading";
import Helpers from "../../Helpers/Helpers";

export default function GenderPage() {

    const {scrollFunction} = Helpers()
    const params = useParams()


    const [count, setCount] = useState(0)
    const length = 6

    const nextBtn = useRef()
    const prevBtn = useRef()
    const navigation = useNavigation()

    function scroll (direction) {
        return scrollFunction(direction, count, nextBtn, prevBtn, setCount, length)
    }

    function sendPageTitle(title) {
        return localStorage.setItem('page-title', title)
    }




    useEffect(() => {
        const hints = document.querySelectorAll(".hint")
        const cards = document.querySelectorAll(".card")
        const mediumCardTwo = document.querySelector(".medium-card-two")
        const mediumCard = document.querySelector(".medium-card")
        const leftIntro = document.querySelectorAll('.left-intro')
        const rightIntro = document.querySelectorAll('.right-intro')
        const introBtn = document.querySelector('.intro-btn')
        const bannerOne = document.querySelector('.banner-one')
        const bannerTwo = document.querySelector('.banner-two')

        hints.forEach(el => observeMultiple({styles:styleOne, offObserver:false}).observer.observe(el))
        cards.forEach(el => observeMultiple({styles:styleTwo, offObserver:true}).observer.observe(el))
        leftIntro.forEach(el => observeMultiple({styles: styleThree, offObserver: false}).observer.observe(el))
        rightIntro.forEach(el => observeMultiple({styles: styleFour, offObserver: false}).observer.observe(el))

        observeSingle(styleThree).observer.observe(bannerOne)
        observeSingle(styleFour).observer.observe(bannerTwo)
        observeSingle(styleThree).observer.observe(mediumCard)
        observeSingle(styleFour).observer.observe(mediumCardTwo)
        observeSingle(styleOne).observer.observe(introBtn)

    }, [])





    if (navigation.state === "loading") {
        window.scrollTo(0, 0)
        return (
            <Loading />
        )
    }
    return (
        <>
            <FabFits />
            <WelcomeBanner
                bannerOne={'banner-one transition-all duration-300 ease-in-out opacity-0'}
                bannerTwo={'banner-two transition-all duration-300 ease-in-out opacity-0'}
                hintClass={'hint transition-all duration-300 ease-in-out'}
                imageOne={params.gender === 'female' ? femalebanner : maleBanner}
                imageTwo={params.gender === 'female' ? femalebannertwo : malebannertwo} />
            

            <section
            aria-label='home-categories'
                className="relative portrait:w-full landscape:w-full landscape:lg:h-[65vh] landscape:md:h-[20em] portrait:sm:h-fit flex flex-col landscape:flex-row landscape:gap-x-4 landscape:justify-center landscape:pl-4 landscape:pr-4 md:flex-row justify-center landscape:gap-y-4 portrait:gap-y-[1.5em] landscape:lg:gap-x-4 landscape:md:gap-x-4 sm:flex-row sm:h-[40vh] sm:gap-x-2 landscape:h-[80vh] overflow-hidden md:pr-4 md:pl-4 portrait:sm:gap-x-4">
                
                <Link onClick={() => sendPageTitle(params.gender === 'female' ? 'shoppy design lingerie' : 'gifts for them/you')} to={params.gender === 'female' ?'/shoppy/female/lingerie': '/shopppy/male/collections'}>
                    <SimpleCard className={'card transition-all duration-500 ease-in-out'} image={params.gender === 'female' ? lingerie : gift} title={params.gender === 'female' ? "shoppy design lingerie": "gifts for them/you"} text={params.gender === 'female' ? "it's the little thing's..." : "aka our love language"} />
                </Link>

                <Link onClick={() => sendPageTitle(params.gender === 'female' ? 'winter wears' : "layer'up")} to={params.gender === 'female' ? '/shoppy/female/winter' : '/shopppy/male/shirt'}>
                    <SimpleCard className={'card transition-all duration-500 ease-in-out'} image={params.gender === 'female' ? hoodie : layer} title={params.gender === 'female' ? "winter wears" : "layer'up"} text={params.gender === 'female' ? "sweatshirts, hoodies and then some..." : "check'em out"} />
                </Link>

                <Link onClick={() => sendPageTitle(params.gender === 'female' ? 'shoppy weekend collective' : "layer'up")} to={params.gender === 'female' ? '/shoppy/female/collections' : '/shopppy/male/sweatshirt'}>
                    <SimpleCard className={'card transition-all duration-500 ease-in-out'} image={params.gender === 'female' ? weekend : obey} title={params.gender === 'female' ? "shoppy weekend collective" : "new in:obey"} text={params.gender === 'female' ? "just dropped heat" : "streetwear steez"} />
                </Link>


                <Link onClick={() => sendPageTitle(params.gender === 'female' ? 'workout wears' : "sole season")} to={params.gender === 'female' ? '/shoppy/female/sportswear' : '/shopppy/male/shoes'}>
                    <SimpleCard className={'card transition-all duration-500 ease-in-out'} image={params.gender === 'female' ? sportsWear : sole} title={params.gender === 'female' ? "workout wears" : "sole season"} text={params.gender === 'female' ? "pump it up!" : "stride with pride"} />
                </Link>
                


            </section>

            <Limited scrollFunction={scrollFunction} btnClass={'intro-btn transition-all duration-500 ease-in-out'} className={"bg-gradient-to-b from-transparent via-rose-500 to-transparent"}>
                <SmallIntroCard
                    className={'left-intro'}
                    image={params.gender === 'female' ? GlamDresses : Season}
                    text={params.gender === 'female' ? 'glam dresses': 'guy season'}
                />

                <SmallIntroCard
                    className={'left-intro'}
                    image={params.gender === 'female' ? SkinTone: CoupleGoal}
                    text={params.filter === 'female' ? 'skin tone' : 'couple goals'}
                />

                <SmallIntroCard
                    className={'left-intro'}
                    image={params.gender === 'female' ? DayTimeWoman : BestDeals}
                    text={params.gender === 'female' ? 'daytime woman' : 'best deals'}
                />

                <SmallIntroCard
                    className={'right-intro'}
                    image={params.gender === 'female' ? VictoriasSecret : TopMan}
                    text={params.gender === 'female' ? 'victoria secret':'top-man'}
                />

                <SmallIntroCard
                    className={'right-intro'}
                    image={params.gender === 'female' ? TopWoman : Brand}
                    text={params.gender === 'female' ? 'top woman' : 'top brands'}
                />

                <SmallIntroCard
                    className={'right-intro'}
                    image={params.gender === 'female' ? ClassyWoman : StreetWear}
                    text={params.filter === 'female' ? 'classy woman' : "street'wearz"}
                />
            </Limited>


            <section className="relative w-full h-fit sm:h-[60vh] landscape:h-[100vh] flex flex-col lg:flex-row landscape:flex-row landscape:items-center landscape:lg:justify-center gap-y-[1.5em] lg:gap-x-3 landscape:pr-4 landscape:pl-4 landscape:lg:h-[35em] sm:flex-row landscape:md:h-[20em] landscape:md:pb-4 lg:pb-3 portrait:sm:h-[65vh] portrait:sm:pb-4 mb-[2em]">
                <MediumCard
                    className={'medium-card transition-all duration-500 ease-in-out'} image={params.gender === 'female' ?  topShop:dateNight}
                    title={params.gender === 'female' ? "topshop" : "date-night-fits"}
                    text={params.gender === 'female' ? "our kinda flowers" : "fancy feels"} />
                <MediumCard
                    className={'medium-card-two transition-all duration-500 ease-in-out'}
                    image={params.gender === 'female' ? classy : topman}
                    title={params.gender === 'female' ? "topwoman" : "topman"}
                    text={params.gender === 'female' ? "icons only" : "icons only"} />
            </section>
            <Gifts />
            <div className="relative w-full h-[3em] landscape:lg:h-[7em] landscape:h-[5em] flex justify-center items-center">
                <h1 className="font-quicksandBold text-[1em] landscape:lg:text-[1.5em] landscape:text-[1em] uppercase text-gray-800 text-center">
                    trending brands
                </h1>
            </div>
            <section className="relative w-full landscape:lg:w-[90%] mx-auto lg:mx-auto lg:w-full h-[19em] landscape:h-[15em] overflow-hidden">
                <div className="left-0 absolute landscape:lg:hidden z-10 w-full h-[4em] bottom-[35%] flex flex-row justify-between items-center pl-4 pr-4">
                    <button
                        onClick={() => scroll('prev')}
                        ref={prevBtn}
                        className="relative group w-[3em] h-[3em] rounded-full overflow-hidden">
                        <LeftArrow
                            className={'relative w-6 h-6 mx-auto z-[10] group-disabled:opacity-[0.5]'}
                            stroke={"rgb(0, 0, 0, 0.5"}
                            fill={'rgb(0,0,0,0.5)'} />
                        <div className={"transition-all z-[5] duration-300 ease-in-out absolute group-disabled:opacity-[0.2] bg-gray-300 opacity-[0.7] w-[3em] h-[3em] top-0"}>

                        </div>

                    </button>
                    <button
                        onClick={() => scroll('next')}
                        ref={nextBtn}
                        className="relative group w-[3em] h-[3em] rounded-full overflow-hidden">
                        <RightArrow
                            className={'relative w-6 h-6 mx-auto z-[10] group-disabled:opacity-[0.5]'}
                            stroke={"rgb(0, 0, 0, 0.5"}
                            fill={'rgb(0,0,0,0.5)'} />
                        <div className={"transition-all z-[5] duration-300 ease-in-out absolute group-disabled:opacity-[0.2] bg-gray-300 opacity-[0.7] w-[3em] h-[3em] top-0"}>

                        </div>

                    </button>
                </div>
                <section
                    className="relative w-[80%] landscape:w-[31em] landscape:md:w-[41.5em] landscape:lg:w-[62.5em] portrait:sm:w-[31em] portrait:w-[20.5em] mx-auto h-full overflow-hidden">
                    <div
                        style={{ transform: `translateX(calc(-${count}*16.7%))` }}
                        className={`relative w-fit h-full flex flex-row justify-center items-center gap-x-2 lg:gap-x-0 transition-all duration-300 ease-in-out`}
                    >
                        <LogoCard logo={params.gender === 'female' ? monkl : tommyhilfigerlogo} />
                        <LogoCard logo={params.gender === 'female' ? dressed : northfacelogo} />
                        <LogoCard logo={params.gender === 'female' ? topshoplogo : adidaslogo} />
                        <LogoCard logo={params.gender === 'female' ? reclaimer : carharttlogo} />
                        <LogoCard logo={params.gender === 'female' ? collusion : ellesselogo} />
                         <LogoCard logo={params.gender === 'female' ? weekday : drmartenslogo} />
                    </div>
                </section>
            </section>
            <Socials />
        </>
    )
}