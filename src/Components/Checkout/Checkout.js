import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {toast} from "react-toastify";

export default function Checkout({ totalPriceSum}) {
    const initialOptions = {
        "client-id": "Ac_CI5bTtQGUqrtq2WwwQS8NJ0fSk5elZaei9Cw96CV9IY8f2hbYKO8nRz9UdpnPDFYnkNZ6js5kSqPW",
        currency: "USD",
        intent: "capture",
    };

    async function createOrder (data, actions) {
        return actions.order.create({
                  purchase_units : [
                      {
                          amount: {
                              value: totalPriceSum
                          }
                      }
                  ]
              })
    }

    async function onApprove (data, actions) {
        try {
            const response = await actions.order.capture()
            if (response) return toast.success("item purchased by"+" "+response.payer.name.given_name)
        } catch (e){
              toast.error(e.message)
        }
    }


    function onError (err) {
        alert(err)
    }
    return (
        <section className="relative w-[90%] portrait:lg:w-[22em] landscape:w-[15em] landscape:lg:w-[22em] mx-auto h-[18em]">
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
                            $ {totalPriceSum.toLocaleString()}
                        </h3>
                    </div>

                    <div className="relative w-full h-[1.5em]  landscape:lg:h-[2em] flex flex-row justify-between items-center mb-2">
                        <h3 className="font-quicksandregular font-bold text-[0.8em] relative text-gray-500 capitalize text-start">
                            standard delivery (<span className="relative uppercase">$</span> 1,500)
                        </h3>
                    </div>
                    < hr />
                </div>
                
                <div className={'relative w-full h-fit'}>
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
                    </PayPalScriptProvider>
                </div>

            </div>
        </section>
    )
}
