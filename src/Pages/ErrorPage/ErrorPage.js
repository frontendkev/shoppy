import { useRouteError } from "react-router-dom"


export default function ErrorPage (){
    const error = useRouteError()
    return (
        <>
        <div className="min-h-screen w-full bg-black pt-[8em]">
            <h2 className="text-[3em] font-quicksandregular text-white">{error.statusText || error.message} </h2>
        </div>
        </>
    )
}