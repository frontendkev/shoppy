
import { axiosInstance } from "../Axios/axios";





export default function Connections () {

     const getRequest = async (url) => {
        try {
            const fetch = await axiosInstance.get(url)
            return fetch.data
        } catch(e){
            return e.message
        }
    }
    
    return { getRequest }
}



