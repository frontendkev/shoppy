

export default function WorldWide() {
    return (
        <>
            <div className="relative w-full h-[3em] flex flex-row">
                <div className="absolute z-10 w-full h-[3em] flex flex-row">
                    <div className="relative w-[50%] h-full mx-auto text-center bg-pink-300">
                        <h2 className="font-quicksandBold text-[0.8em] uppercase text-gray-900 leading-[1.2em]">
                            25% off everything! < br />
                            head over heels for the deal < br />
                            with code: shoppyday
                        </h2>
                    </div>

                    <div className="relative w-[50%] h-full mx-auto text-center bg-black pt-4">
                        <h2 className="font-quicksandBold text-[0.8em] uppercase text-white">
                            free worldwide delivery
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}