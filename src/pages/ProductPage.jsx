import { useNavigate, useParams, Navigate } from "react-router";
import useProducts from "../hooks/useProducts";
import ProductMoreInfo from "../components/ProductMoreInfo";

function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, loaded, loadingError } = useProducts();

  const currentProduct = data.find(product => product.id === Number(params.id));

  if (!currentProduct) {
    return <Navigate to="/404"/>;
  }

  const changeProduct = (direction) => {
    let idOfNavigateValue;
    const indexOfCurrentValue = data.indexOf(currentProduct);
    let indexOfNavigateValue;
    if (direction === "forward") {
      indexOfNavigateValue = data.indexOf(currentProduct) + 1;
      idOfNavigateValue = data[indexOfNavigateValue]?.id;
      if (indexOfCurrentValue === data.length - 1) {
        idOfNavigateValue = data[0].id;
      }
    }
    else if (direction === "backward") {
      indexOfNavigateValue = data.indexOf(currentProduct) - 1;
      idOfNavigateValue = data[indexOfNavigateValue]?.id;
      if (indexOfCurrentValue === 0) {
        idOfNavigateValue = data[data.length - 1].id;
      }
      
    }
    navigate(`/products/${idOfNavigateValue}`);
  }

  return (
    (loaded && !loadingError) &&
    (
      <div className="d-flex align-items-center h-100">
        <button className="btn btn-primary" onClick={() => { changeProduct("backward") }}><i className="bi bi-arrow-bar-left arrow text-white"></i></button>
        <div className="text-center d-flex flex-column flex-grow-1 h-100 align-items-center row-gap-5">
          <button className="btn btn-primary" onClick={() => { navigate("/products") }}>
            Ritorna agli altri prodotti!</button>
          <ProductMoreInfo {...currentProduct} />
        </div>
        <button className="btn btn-primary" onClick={() => { changeProduct("forward") }}><i className="bi bi-arrow-bar-right arrow text-white"></i></button>
      </div>
    )
  )
}

export default ProductPage