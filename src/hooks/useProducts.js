import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

function useProducts() {
    const productsValues = useContext(ProductsContext);
    if(!productsValues){
        throw new Error("Non hai messo il ProductsProvider");
    }
    return productsValues;
}

export default useProducts;