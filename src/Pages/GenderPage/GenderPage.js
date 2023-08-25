import LogoCard from "../../Components/Cards/LogoCard";
import MediumCard from "../../Components/Cards/MediumCard";
import SimpleCard from "../../Components/Cards/SimpleCard";
import {Link, useNavigation, useParams} from "react-router-dom";
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
import {useEffect, useRef, useState} from "react";
import {observeMultiple, observeSingle} from "../../Ui/Observers/Observers";
import {styleFour, styleOne, styleThree, styleTwo} from "../../Ui/Observers/Styles/Styles";
import SmallIntroCard from "../../Components/Cards/smallIntroCard";
import RightArrow from "../../Svg/RightArrow";
import LeftArrow from "../../Svg/LeftArrow";
import Loading from "../../Components/Loaders/Loading";
import GenderPageHelpers from "../../Helpers/GenderPageHelpers";
import femaleBanner from '../../images/femalepage/femalebanner.jpeg'
import femaleBannerTwo from '../../images/femalepage/femalebanner2.jpeg'

export default function GenderPage() {

    const {scrollFunction, Links} = GenderPageHelpers()
    const params = useParams()

    const [count, setCount] = useState(0)
    const length = 6

    const nextBtn = useRef()
    const prevBtn = useRef()
    const navigation = useNavigation()

    function scroll(direction) {
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

        hints.forEach(el => observeMultiple({styles: styleOne, offObserver: false}).observer.observe(el))
        cards.forEach(el => observeMultiple({styles: styleTwo, offObserver: true}).observer.observe(el))
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
        return (<Loading/>)
    }
    return (<>
        <FabFits/>
        <WelcomeBanner
            bannerOne={'banner-one transition-all duration-300 ease-in-out opacity-0'}
            bannerTwo={'banner-two transition-all duration-300 ease-in-out opacity-0'}
            hintClass={'hint transition-all duration-300 ease-in-out'}
            imageOne={femaleBanner}
            imageTwo={femaleBannerTwo}/>


        <section
            aria-label='home-categories'
            className="relative portrait:w-full landscape:w-full landscape:lg:h-[65vh] landscape:md:h-[20em] portrait:sm:h-fit flex flex-col landscape:flex-row landscape:gap-x-4 landscape:justify-center landscape:pl-4 landscape:pr-4 md:flex-row justify-center landscape:gap-y-4 portrait:gap-y-[1.5em] landscape:lg:gap-x-4 landscape:md:gap-x-4 sm:flex-row sm:h-[40vh] sm:gap-x-2 landscape:h-[80vh] overflow-hidden md:pr-4 md:pl-4 portrait:sm:gap-x-4 overflow-hidden">


            {
                Links && Links.map((link, i) => {
                    return (
                        <Link
                            key={i}
                            onClick={() => sendPageTitle(link.title)}
                            to={link.url}>
                            <SimpleCard className={'card transition-all duration-500 ease-in-out'}
                                        image={link.image}
                                        title={link.title}
                                        text={link.text}/>
                        </Link>
                    )
                })
            }


        </section>

        <Limited scrollFunction={scrollFunction} btnClass={'intro-btn transition-all duration-500 ease-in-out'}
                 className={"bg-gradient-to-b from-transparent via-rose-500 to-transparent"}>
            <SmallIntroCard
                className={'left-intro'}
                image={GlamDresses}
                text={'glam dresses'}
            />

            <SmallIntroCard
                className={'left-intro'}
                image={SkinTone}
                text={'skin tone'}
            />

            <SmallIntroCard
                className={'left-intro'}
                image={DayTimeWoman}
                text={'daytime woman'}
            />

            <SmallIntroCard
                className={'right-intro'}
                image={VictoriasSecret}
                text={'victoria secret'}
            />

            <SmallIntroCard
                className={'right-intro'}
                image={TopWoman}
                text={'top woman'}
            />

            <SmallIntroCard
                className={'right-intro'}
                image={ClassyWoman}
                text={'classy woman'}
            />
        </Limited>


        <section
            className="relative w-full h-fit sm:h-[60vh] landscape:h-[100vh] flex flex-col lg:flex-row landscape:flex-row landscape:items-center landscape:lg:justify-center gap-y-[1.5em] lg:gap-x-3 landscape:pr-4 landscape:pl-4 landscape:lg:h-[35em] sm:flex-row landscape:md:h-[20em] landscape:md:pb-4 lg:pb-3 portrait:sm:h-[50vh] portrait:sm:pb-4 mb-[2em]">
            <MediumCard
                className={'medium-card transition-all duration-500 ease-in-out'}
                image={topShop}
                title={"topshop"}
                text={params.gender === 'female' ? "our kinda flowers" : "fancy feels"}/>
            <MediumCard
                className={'medium-card-two transition-all duration-500 ease-in-out'}
                image={classy}
                title={"topwoman"}
                text={"icons only"}/>
        </section>
        <Gifts/>
        <div
            className="relative w-full h-[3em] landscape:lg:h-[7em] landscape:h-[5em] flex justify-center items-center">
            <h1 className="font-quicksandBold text-[1em] landscape:lg:text-[1.5em] landscape:text-[1em] uppercase text-gray-800 text-center">
                trending brands
            </h1>
        </div>
        <section
            className="relative w-full landscape:lg:w-[90%] mx-auto lg:mx-auto lg:w-full h-[19em] landscape:h-[15em] overflow-hidden">
            <div
                className="left-0 absolute landscape:lg:hidden z-10 w-full h-[4em] bottom-[35%] flex flex-row justify-between items-center pl-4 pr-4">
                <button
                    onClick={() => scroll('prev')}
                    ref={prevBtn}
                    className="relative group w-[3em] h-[3em] rounded-full overflow-hidden">
                    <LeftArrow
                        className={'relative w-6 h-6 mx-auto z-[10] group-disabled:opacity-[0.5]'}
                        stroke={"rgb(0, 0, 0, 0.5"}
                        fill={'rgb(0,0,0,0.5)'}/>
                    <div
                        className={"transition-all z-[5] duration-300 ease-in-out absolute group-disabled:opacity-[0.2] bg-gray-300 opacity-[0.7] w-[3em] h-[3em] top-0"}>

                    </div>

                </button>
                <button
                    onClick={() => scroll('next')}
                    ref={nextBtn}
                    className="relative group w-[3em] h-[3em] rounded-full overflow-hidden">
                    <RightArrow
                        className={'relative w-6 h-6 mx-auto z-[10] group-disabled:opacity-[0.5]'}
                        stroke={"rgb(0, 0, 0, 0.5"}
                        fill={'rgb(0,0,0,0.5)'}/>
                    <div
                        className={"transition-all z-[5] duration-300 ease-in-out absolute group-disabled:opacity-[0.2] bg-gray-300 opacity-[0.7] w-[3em] h-[3em] top-0"}>

                    </div>

                </button>
            </div>
            <section
                className="relative w-[80%] landscape:w-[31em] landscape:md:w-[41.5em] landscape:lg:w-[62.5em] portrait:sm:w-[31em] portrait:w-[20.5em] mx-auto h-full overflow-hidden">
                <div
                    style={{transform: `translateX(calc(-${count}*16.7%))`}}
                    className={`relative w-fit h-full flex flex-row justify-center items-center gap-x-2 lg:gap-x-0 transition-all duration-300 ease-in-out`}
                >
                    <LogoCard logo={monkl}/>
                    <LogoCard logo={dressed}/>
                    <LogoCard logo={topshoplogo}/>
                    <LogoCard logo={reclaimer}/>
                    <LogoCard logo={collusion}/>
                    <LogoCard logo={weekday}/>
                </div>
            </section>
        </section>
        <Socials/>
    </>)
}
