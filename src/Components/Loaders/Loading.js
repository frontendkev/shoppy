import './loading.css'


export default function Loading () {

    return (
        <div className={`absolute top-0 w-full min-h-screen bg-gray-700 flex items-center justify-center`}>

            <div className="relative w-fit h-fit flex flex-row gap-x-1">
                <div style={{"--i":'0s'}} className="loader relative w-[0.3em] h-[2em] bg-gray-200">

                </div>

                <div style={{ "--i": '0.3s' }} className="loader relative w-[0.3em] h-[2em] bg-gray-200">

                </div>

                <div style={{ "--i": '0.5s' }} className="loader relative w-[0.3em] h-[2em] bg-gray-200">

                </div>
            </div>
        
        </div>
    )
}