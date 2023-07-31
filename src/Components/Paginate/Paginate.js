import { useState } from "react"

export default function Paginate({ children }) {
    
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsToShow, setItemsToShow] = useState(10)

    let lastItem = currentPage * itemsToShow
    let firstItem = lastItem - itemsToShow
    
    
    return (
        <div className={' h-fit relative w-[90%] mx-auto md:mx-0 md:w-full md:pl-4 flex flex-row flex-wrap justify-start md:gap-x-2 gap-y-[1.5em]'}>
           {children}
        </div>
    )
}