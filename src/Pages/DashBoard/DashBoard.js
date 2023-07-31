

export default function DashBoard() {

    


    return (
        <section className="relative w-full min-h-screen bg-gray-200">
            <div className="relative w-full h-[4em] pt-2">
                <h2 className="font-quicksandBold text-gray-600 uppercase text-center text-[1.8em]">
                    my shoppy
                </h2>
            </div>
            <div className="relative w-full h-[14em] pt-8">
                <div className="relative w-[8em] h-[8em] rounded-full bg-gray-300 mx-auto mb-4">

                </div>
                <div className="relative w-full h-[5em]">
                    <strong className="font-quicksandsemibold text-gray-700 text-[1.2em] capitalize">
                        oops!
                    </strong>
                </div>
            </div>
            <div className="relative w-full h-[4em]">
                <h2 className="font-quicksandregular text-gray-700 font-bold capitalize text-[1em] leading-[1.5em]">
                    sorry, <span className="uppercase">my shoppy</span> is not available right now. < br />
                    why not check out what's new while we fix this?
                </h2>
            </div>

            <div className="relative w-full h-[3em] pt-2">
                <button className="relative w-[20em] h-[2.5em] bg-gray-800 text-white font-quicksandBold text-[1em] mx-auto uppercase">
                    shop new in
                </button>
            </div>
        </section>
    )
}