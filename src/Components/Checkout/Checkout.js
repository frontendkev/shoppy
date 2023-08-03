


export default function Checkout({ totalPriceSum, showModal }) {
    const modalPage = "checkout"
    const modalText = "close modal"
    return (
        <section className="relative w-[90%] portrait:lg:w-[22em] landscape:w-[15em] landscape:lg:w-[22em] mx-auto h-[14em] landscape:lg:h-[13em]">
            <div className="relative w-full h-full bg-white flex flex-col items-center gap-y-2 pr-4 pl-4">


                <div className="relative w-full h-fit flex flex-col">
                    <div className="relative mx-auto w-full h-[2.5em] landscape:lg:h-[3em] flex items-center justify-start ">
                        <h3 className="font-quicksandBold font-bold text-[1.3em] text-gray-500 uppercase text-start">
                            total
                        </h3>
                    </div>
                    < hr />

                    <div className="relative w-full h-[2.5em] landscape:lg:h-[3em] flex flex-row justify-between items-center">
                        <h3 className="font-quicksandsemibold font-bold text-[1em] relative text-gray-500 capitalize text-start">
                            sub-total
                        </h3>
                        <h3 className="font-quicksandregular font-bold text-[0.8em] relative text-gray-500 capitalize text-start">
                            NGN {totalPriceSum.toLocaleString()}
                        </h3>
                    </div>

                    <div className="relative w-full h-[1.5em]  landscape:lg:h-[2em] flex flex-row justify-between items-center mb-2">
                        <h3 className="font-quicksandregular font-bold text-[0.8em] relative text-gray-500 capitalize text-start">
                            standard delivery (<span className="relative uppercase">ngn</span> 1,500)
                        </h3>
                    </div>
                    < hr />
                </div>
                <button onClick={() => showModal(true, modalText, modalPage)} className="relative w-full h-[3em] bg-green-700 text-[0.9em] font-quicksandbold uppercase font-black text-white">
                    checkout
                </button>

            </div>
        </section>
    )
}