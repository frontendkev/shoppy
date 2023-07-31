


export default function DynamicButton({ text, image, sendProduct }) {
    return (
        <button style={{boxShadow:"0.1em 0.1em 0.2em rgb(0, 0, 0, 0.4)",}} onClick={() => sendProduct('bag')} className={'bag-btn group relative w-[16em] portrait:sm:w-[13em] h-full transition-all duration-300 ease-in-out' +
            ' text-gray-700 bg-rose-600 hover:bg-gray-800 transition-all duration-300 ease-in-out flex flex-row justify-center items-center'}>

            <div className='relative h-full w-[70%] pt-[0.6em]'>
                <h4 className={'relative capitalize font-quicksandregular font-black text-[1em] text-white'}> {text} </h4>
            </div>

            <div className='relative w-[30%] h-full flex items-center'>
                {image}
            </div>

        </button>
    )
}
