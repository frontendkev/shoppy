import {Link} from 'react-router-dom'
import './tabs.css'

export default function MediumTab(props) {
    return (
        <div className={'relative med-tab w-full bg-white h-full overflow-hidden ' +
            'before:bg-orange-600 before:left-[-5em] md:before:left-[-18em] ' +
            'before:absolute before:w-full before:h-full before:z-[5] before:-skew-x-[20deg] ' +
            'before:shadow-md flex flex-row'}>

            <div className={'relative z-[7] w-full md:w-[50%] h-full left-0 pl-5'}>
                <div className={'relative w-full h-fit mt-[2em] md:mt-[3em]'}>
                    <h1 className={'text-start font-quicksandBold text-[1.4em] md:text-[2.5em] leading-8 font-bold uppercase text-white'}>
                        {props.titleOne} <span className={'text-[1.3em]'}>{props.titleTwo}</span>
                    </h1>
                </div>

                <div className={'w-[65%] h-fit mt-2 rounded-md'}>
                    <h4 className={'text-start font-quicksandregular text-[0.8em] font-bold capitalize text-white'}>
                        {props.text}
                    </h4>
                </div>

                <div className='w-fit h-fit mt-5'>
                    <Link to={props.url}>
                        <div className='w-[6em] h-[2.5em] bg-white rounded-[0.2em] text-sm font-quicksandBold text-orange-600 pt-[0.1em] cursor-pointer shadow-md'>
                            shop now
                        </div>
                    </Link>
                </div>
            </div>

            <div className='absolute md:relative w-full md:w-[50%] h-full z-[7]'>
                <figure className={'med-tab-image-reverse w-full h-full pl-2 absolute right-0'}>
                    <img
                        alt={'link image here'}
                        className={'w-full h-full object-contain relative right-[-9em] md:right-[0em] bottom-[-1.5em]'}
                        src={props.image} />
                </figure>
            </div>

        </div>
    )
}