
import { createContext } from "react"
import useFetch from "../hooks/useFetch";

const API_URL = "https://fakestoreapi.com/products"
const ProductsContext = createContext(null);

function ProductsProvider({children}) {
    const {data, loadingError, loaded} = useFetch(API_URL);
    const value = {
        data,
        loadingError,
        loaded
    }
    return (
        <ProductsContext value={value}>
            {children}
        </ProductsContext>
    )
}

export{
    ProductsContext,
    ProductsProvider
}