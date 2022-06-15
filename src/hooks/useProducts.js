import { useEffect, useState } from "react"
import useFirebase from "./useFirebase"

const useProducts = () => {
    const [products, setProducts] = useState([])


    // useEffect(()=>{

    //     fetch('https://stormy-gorge-80832.herokuapp.com/products')
    //     .then(res=>res.json())
    //     .then(data=>{setProducts(data)


    //     })

    // },[])
    const { isLoading, setIsLoading } = useFirebase()
    const delBtn = false
    useEffect(() => {
        setIsLoading(true)
        fetch('https://stormy-gorge-80832.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false);

            })

    }, [])


    return {
        products,
        setProducts
    }

}
export default useProducts;