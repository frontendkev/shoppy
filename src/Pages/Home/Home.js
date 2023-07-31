
import female from '../../images/home/female.jpeg'
import male from '../../images/home/male.jpeg'
import Section from '../../Components/Section/Section';

function Home() {
    return (
        <section className={'relative w-full h-[100vh] flex flex-col overflow-hidden justify-center landscape:flex-row'}>

            <Section image={female} text={'female wears'} url={'shoppy/female'} />

            <Section image={male} text={'male wears'} url={'shoppy/male'} />

        </section >
    )
}



export default Home;