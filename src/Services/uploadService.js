
import {useEffect, useState, useId} from "react";
import { axiosInstance } from "./Axios/axios";
import girlPhoto from '../images/femalepage/sportswear.jpg';
import './upload.css';

const UploadService = () => {


    const id = useId()
    const [file, setFile] = useState("");
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('')
    const [images, setImages] = useState([]);
    const [uploadComplete, setUploadComplete] = useState('please upload a product');
    const [ gender, setGender ] = useState('');
    const [productType, setProductType] = useState('');
    const [color, setColor] = useState('')
    const array = []

    const getImage = e => {
        if (e.target.files && e.target.files[0]){
            let reader = new FileReader();
            reader.onloadend = () => {
                setFile(c => reader.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

   
 
    

    const submitProduct = async (e) => {
        array.push(JSON.stringify({name: "el", value: "bella"}))
        e.preventDefault();
        const fd = new FormData();
        file && fd.append("image-file", file);
        name && fd.append("title", name);
        productType && fd.append("type", productType);
        gender && fd.append("gender", gender);
        price && fd.append("price", price);
        discount && fd.append("discount", discount);
        description && fd.append("description", description)
        brand && fd.append("brand", brand)
        color && fd.append("color", color)
        fd.append('dateAdded', new Date().toString())


        try {
            const sentData = await axiosInstance.post('/products/', fd);
            setUploadComplete(c => 'transaction complete, file upload was successful');
            setTimeout(() => {
                setUploadComplete('please upload another product');
            }, 2000)
            if (sentData.statusText === 'Created') {
                setFile(c => '')
                setName(c => '')
                setProductType(c => '')
                setGender(c => '')
                setPrice(c => '')
                setDiscount(c => '')
                setDescription(c => '')
                setBrand(c => '')
                setColor(c => '')
            }
        } catch ( errors) {
            setUploadComplete(errors.message);
            console.log(errors.message);
        }

    }

    const getImages = async () => {
        try {
            const images = await axiosInstance.get('/products');
            setImages(c =>images.data);
            console.log(JSON.parse(images.data.color))
        } catch (e) {
            console.log(e.message)
        }
    }



    useEffect(() => {
        getImages()
    }, [uploadComplete]);


    return (
        <form onSubmit={(e) => submitProduct(e)} encType={'multipart/form-data'}>
            <div className={'w-[100%] h-[180vh] gap-x-[1em] relative mx-auto bg-black flex flex-row pt-4'}>
              
                    <figure className={'relative bg-blue-500 w-[30%] h-[50%] mx-auto'}>
                        <img className={'w-full h-full object-contain drop-shadow-2xl'} src={file ? file : girlPhoto} />
                    </figure>
                    <div className={' w-[30%] h-full gap-y-2 flex items-start flex-col pt-4'}>
                        <label htmlFor={'image'} className={'text-sm font-quicksand font-bold text-white'}>select an image</label>
                        <input id={'image'} onChange={(e) => getImage(e)} className={'w-[90%] h-[2em] border-2 border-blue-300'} type={"file"} />

                        <label htmlFor={'name'} className={'text-sm font-quicksand font-bold text-white'}>product name</label>
                        <input id={'name'} value={name} onChange={(e) => setName(c => e.target.value)} className={'w-[90%] h-[2em] outline-2 outline-blue-600 border-2 border-blue-300'} type={"text"} placeholder={'product name'} />

                        <label htmlFor={'brand'} className={'text-sm font-quicksand font-bold text-white'}>product brand</label>
                        <input id={'brand'} value={brand} onChange={(e) => setBrand(c => e.target.value)} className={'w-[90%] h-[2em] outline-2 outline-blue-600 border-2 border-blue-300'} type={"text"} placeholder={'product name'} />

                    <label htmlFor={'color'} className={'text-sm font-quicksand font-bold text-white'}>product color</label>
                    <input id={'color'} value={color} onChange={(e) => setColor(c => e.target.value)} className={'w-[90%] h-[2em] outline-2 outline-blue-600 border-2 border-blue-300'} type={"text"} placeholder={'product color'} />

                        <label htmlFor={'type'} className={'text-sm font-quicksand font-bold text-white'}>product type</label>
                        <select id={'type'} onChange={(e) => setProductType(c => e.target.value)} className={'w-[90%] h-[2em] outline-2 outline-blue-600 border-2 border-blue-300'} placeholder={'product-price'}>
                            <option> select product type </option>
                            <option value={'shirt'}> shirts </option>
                            <option value={'t-shirt'}> t-shirts </option>
                            <option value={'trouser'}> trousers</option>
                            <option value={'short'}> shorts </option>
                            <option value={'skirt'}> skirts </option>
                            <option value={'dress'}> dress </option>
                            <option value={'bag'}> bags </option>
                            <option value={'shoe'}> shoes </option>
                            <option value={'jacket'}> jackets </option>
                            <option value={'hoodie'}> hoodies </option>
                            <option value={'sweatshirt'}> sweatshirts</option>
                            <option value={'lingerie'}> lingerie</option>
                            <option value={'hoodieandpant'}>hoodie and pants</option>
                            <option value={'sweatpant'}>sweatpants</option>
                        <option value={'sweatshirt and pant'}>sweatshirt and pants</option>
                        <option value={'crop-top and skirt'}>crop-tops and skirts</option>
                        <option value={'crop-top'}>crop-tops</option>
                        </select>

                        <label htmlFor={'description'} className={'text-sm font-quicksand font-bold text-white'}>product description</label>
                        <textarea id={'description'} name='desc' value={description} onChange={(e) => setDescription(c => e.target.value)} className={'w-[90%] h-[5em] outline-2 outline-blue-600 border-2 border-blue-300'} type={"text"} placeholder={'product description'} />


                        <label htmlFor={'gender'} className={'text-sm font-quicksand font-bold text-white'}>gender</label>
                        <select id={'gender'} onChange={(e) => setGender(c => e.target.value)} className={'w-[90%] h-[2em] outline-2 outline-blue-600 border-2 border-blue-300'}
                        placeholder={'product-price'}>
                            <option value={'unisex'}> unisex </option>
                            <option value={'male'}> male </option>
                            <option value={'female'}> female </option>
                        </select>




                        <label htmlFor={'price'} className={'text-sm font-quicksand font-bold text-white'}>product price</label>
                        <input id={'price'} value={price} onChange={(e) => setPrice(c => e.target.value)} className={'w-[90%] h-[2em] outline-2 outline-blue-600 border-2 border-blue-300'} type={"number"} placeholder={'product-price'} />


                        <h3 className={'text-sm font-quicksand font-bold text-white'}>discount value</h3>
                        <input value={discount} onChange={(e) => setDiscount(c => e.target.value)} className={'w-[90%] h-[2em] outline-2 outline-blue-600 border-2 border-blue-300'} type={"number"} placeholder={'product-price'} />


                        <label htmlFor={'progress'} className={'text-sm font-quicksand font-bold text-white'}>upload progress</label>
                        <h3 id={'progress'} className={'text-sm font-quicksand font-bold text-white'}> {
                            uploadComplete
                        } </h3>

                        <div className={'w-full h-fit pt-2 relative mx-auto flex flex-start'}>
                            <button type={'submit'} className={'bg-blue-300 rounded-sm w-[7em] h-8'}>
                                send-data
                            </button>
                        </div>
                    </div>


            </div>
        </form>
    )
}



export default UploadService