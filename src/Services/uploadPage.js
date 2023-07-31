
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { axiosInstance } from "./Axios/axios";
import { useLoaderData } from "react-router-dom";
import { fetchProducts } from "../Redux/ReduxSlices/ProductsSlice";

function UploadPage() {
    const dispatch = useDispatch()
    const { products, isLoading } = useSelector(store => store.products)
    const loaderData = useLoaderData()

    const [preview, setPreview] = useState([])

    const [image, setImage] = useState('')
    const [id, setId] = useState(0)

    const [color, setColor] = useState([])
    const [colorTitle, setColorTitle] = useState('')

    const [gender, setGender] = useState('')

    const [type, setType] = useState('')

    function showImage(id, image) {
        setId(c => id)
        setImage(c => image)
    }

    const getImage = e => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setPreview(c => [...preview, reader.result])
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const showColor = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setColor(c => [...color, { color: colorTitle, image: reader.result }])
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    async function deleteFromServer(e, id) {
        e.preventDefault()
        try {
            const deleteItem = await axiosInstance.delete(`/products/${id}`)
            const items = await axiosInstance.get('products')
            if (deleteItem) return dispatch(fetchProducts({items: items}))
        } catch (e) {
            console.log(e.message)
        }
    }


    async function submitPreview(e, id, data, type) {
        e.preventDefault()
        try {


            switch (type) {
                case "color": {
                    const colors = data
                    let transfer = await axiosInstance.patch(`/products/${id}`, { colors })
                    setColor(c => [])
                    setColorTitle(c => '')
                }
                    break;
                case "preview": {
                    const preview = data
                    return await axiosInstance.patch(`/products/${id}`, { preview })
                }
                default: {
                    return type
                }
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    async function submitDate(e, id) {
        e.preventDefault()
        try {
            return await axiosInstance.patch(`api/products/${id}`, { dateAdded: new Date().toString() })
        } catch (e) {
            return console.log(e.message)
        }
    }

    async function submitGender(e, id) {
        e.preventDefault()
        try {
            return await axiosInstance.patch(`api/products/${id}`, { gender: gender})
        } catch(e) {
            return console.log(e.message)
        }
    }

    async function changeType(e, id) {
        e.preventDefault()
        try {
            return await axiosInstance.patch(`api/products/${id}`, {type: type})
        } catch(e) {
            return console.log(e.message)
        }
    }




    useEffect(() => {
        dispatch(fetchProducts({items:loaderData}))
    }, [products.products])

    if (isLoading) {
        return (
            <section className={'w-full min-h-screen fixed z-10 top-0 bg-black pt-[20em]'}>
                <h1 className="text-white text-[4em] font-quicksandBold">...loading product</h1>
            </section>
        )
    }

    return (
        <section className="relative w-full bg-gray-100 h-fit flex flex-wrap flex-col gap-y-4 pt-5 pb-[3em]">

            {
                products && products.map((item, index) => {
                    return (
                        <div key={index} className="relative w-[80%] h-[100vh] mx-auto flex flex-row">
                            <figure className="relative w-[30%] h-full ">
                                <img alt="item here" className="relative object-scale-down w-full h-full" src={item.id === id ? image : item.image.file} />
                            </figure>
                            <div className="relative w-[30%] h-full flex flex-col gap-y-5 justify-start pl-5 pt-5">
                                <div className="relative w-full h-fit">
                                    <div className="relative w-full h-fit pl-2 leading-6 capitalize">
                                        <h1 className="relative text-gray-700 text-[1.5em] font-quicksandsemibold text-start">
                                            {item.brand}
                                        </h1>
                                        <h1 className="relative text-gray-700 text-[1.2em] font-quicksandsemibold text-start">
                                            {item.title}
                                        </h1>
                                    </div>
                                    <div className="relative w-full h-fit bg=black">
                                        <h1 className="relative text-gray-500 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            preview
                                        </h1>
                                        <figure className="relative w-full h-[4em] flex flex-row gap-x-2">
                                            {
                                                item.preview && item.preview.map((image, index) => {
                                                    return (
                                                        <img onClick={() => showImage(item.id, image)} key={index} alt='' src={image} />
                                                    )
                                                })
                                            }
                                        </figure>
                                    </div>

                                    <div className="relative w-full h-fit bg=black">
                                        <h1 className="relative text-gray-500 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            colors
                                        </h1>
                                        <figure className="relative w-full h-[4em] flex flex-row gap-x-2">
                                            {
                                                item.colors && item.colors.map((color, index) => {
                                                    return (
                                                        <img key={index} onClick={() => showImage(item.id, color.image)} alt='' src={color.image} />
                                                    )
                                                })
                                            }
                                        </figure>
                                    </div>
                                    <div className="relative w-full h-fit pl-2 pr-2 leading-6">
                                        <h1 className="relative text-gray-500 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            description
                                        </h1>
                                        <p className="relative text-gray-700 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="relative w-full h-fit pl-2 pr-2 leading-6">
                                        <h1 className="relative text-gray-500 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            date added
                                        </h1>
                                        <p className="relative text-gray-700 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            {item.dateAdded && item.dateAdded}
                                        </p>
                                    </div>

                                    <div className="relative w-full h-fit pl-2 pr-2 leading-6">
                                        <h1 className="relative text-gray-500 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            item type
                                        </h1>
                                        <p className="relative text-gray-700 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            {item.type}
                                        </p>
                                    </div>

                                    <div className="relative w-full h-fit pl-2 pr-2 leading-6">
                                        <h1 className="relative text-gray-500 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            item gender
                                        </h1>
                                        <p className="relative text-gray-700 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            {item.gender}
                                        </p>
                                    </div>
                                    <div className="relative w-full h-fit pl-2 pr-2 leading-6">
                                        <h1 className="relative text-gray-500 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            item brand
                                        </h1>
                                        <p className="relative text-gray-700 text-[0.8em] font-quicksandsemibold text-start capitalize">
                                            {item.brand}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={(e) => deleteFromServer(e,item.id)} className="relative w-full h-fit">
                                    <h1 className="font-quicksandBold text-[2.4em] text-start capitalize text-gray-600">
                                        delete
                                    </h1>
                                </button>
                            </div>

                            <div className="relative w-[40%] h-full flex flex-col gap-y-2">

                                <div className="relative w-full h-fit">
                                    <div className="relative w-full h-[4em] flex flex-row">
                                        {
                                            preview && preview.map((item, index) => {
                                                return (
                                                    <img key={index} alt='' src={item} className={'relative w-[3em] h-full object-scale-down'} />
                                                )
                                            })
                                        }
                                    </div>
                                    <form onSubmit={(e) => submitPreview(e,item.id, preview, 'preview')} encType="multipart/form-data">
                                        <div className="relative w-full h-fit flex flex-col gap-y-2 justify-start pl-4">
                                            <label htmlFor="preview">
                                                <h2 className="text-start">
                                                    preview image
                                                </h2>
                                            </label>
                                            <input id="preview" type={'file'} onChange={(e) => getImage(e)} className='float-left' />
                                            <button type={'submit'} className='float-left clear-left w-[5em] h-[2em] bg-black text-white'>
                                                submit
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="relative w-full h-fit">
                                    <div className="relative w-full h-[4em] flex flex-row">
                                        {
                                            color && color.map((item, index) => {
                                                return (
                                                    <div key={index} className='relative w-full h-full'>
                                                        <h2>{item.color}</h2>
                                                        <img alt='' src={item.image} className={'relative w-[3em] h-full object-scale-down'} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <form onSubmit={(e) => submitPreview(e,item.id, color, 'color')} encType="multipart/form-data">
                                        <div className="relative w-full h-fit flex flex-col gap-y-2 justify-start pl-4">
                                            <label htmlFor="preview">
                                                <h2 className="text-start">
                                                    select color
                                                </h2>
                                            </label>
                                            <input id="preview" type={'text'} value={colorTitle} onChange={(e) => setColorTitle(c => e.target.value)} className='float-left' />
                                            <input id="preview" type={'file'} onChange={(e) => showColor(e)} className='float-left' />
                                            <button type={'submit'} className='float-left clear-left w-[5em] h-[2em] bg-black text-white'>
                                                save color
                                            </button>
                                        </div>
                                    </form>

                                    <form onSubmit={(e) => submitDate(e,item.id)} encType="multipart/form-data">
                                        <div className="relative w-full h-fit flex flex-col gap-y-2 justify-start pl-4">
                                            <label htmlFor="preview">
                                                <h2 className="text-start">
                                                    current time : {new Date().toString()}
                                                </h2>
                                            </label>
                                            <button type={'submit'} className='float-left clear-left w-[5em] h-[2em] bg-black text-white'>
                                                submit
                                            </button>
                                        </div>
                                    </form>

                                    <form onSubmit={(e) => submitGender(e,item.id) }>
                                        <div className="relative w-full h-fit flex flex-col gap-y-2 justify-start pl-4">
                                            <label htmlFor="gender">
                                                <h2 className="text-start">
                                                    change gender
                                                </h2>
                                            </label>
                                            <input id="gender" type={'text'} value={gender} onChange={(e) => setGender(c => e.target.value)} className='float-left' />
                                            <button type={'submit'} className='float-left clear-left w-[5em] h-[2em] bg-black text-white'>
                                                submit
                                            </button>
                                        </div>
                                    </form>

                                    <form onSubmit={(e) => changeType(e,item.id) }>
                                        <div className="relative w-full h-fit flex flex-col gap-y-2 justify-start pl-4">
                                            <label htmlFor="gender">
                                                <h2 className="text-start">
                                                    change type
                                                </h2>
                                            </label>
                                            <input id="type" type={'text'} value={type} onChange={(e) => setType(c => e.target.value)} className='float-left' />
                                            <button type={'submit'} className='float-left clear-left w-[5em] h-[2em] bg-black text-white'>
                                                submit
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}



export default UploadPage