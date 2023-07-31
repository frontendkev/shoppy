import { useContext } from "react"
import { ShoppyContext } from "../../../AppContext/AppContext"
import ContextActions from "../../../AppContext/ContextActions"


export default function RemoveModal({remove}) {

    const contextState = useContext(ShoppyContext)
    const contextActions = ContextActions()
    
    return (
        <div className="relative w-[20em] min-h-[10em] bg-white p-4 rounded-[0.2em] mx-auto flex flex-col justify-between">
            <strong>
                <h3 className="font-quiclsandregular text-gray-700 uppercase text-[0.6em]">
                    {contextState.modalText + ' ' + '?'}
                </h3>
            </strong>
            <div className="relative w-full h-fit flex flex-row justify-between">
                <button onClick={(event) => remove(event)} className="relative w-[6em] h-[2em] bg-green-500 text-white font-quicksandregular hover:bg-green-600 transition-all ease-in-out duration-300">
                    remove
                </button>

                <button onClick={() => contextActions.closeModal()} className="relative w-[6em] h-[2em] bg-red-500 text-white font-quicksandregular hover:bg-red-600 transition-all ease-in-out duration-300">
                    cancel
                </button>
            </div>
        </div>
    )
}