import { Routes, Route } from "react-router";
import PageNotFound from "./pages/PageNotFound";
import PageLayout from "./layout/PageLayout";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";
import { BrowserRouter } from "react-router";
import ProductPage from "./pages/ProductPage";
import { BudgetProvider } from "./contexts/BudgetContext";

function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index Component={Index} />
            <Route path="about-us" Component={AboutUs} />
            <Route path="products" Component={Products} />
            <Route path="products/:id" Component={ProductPage} />
            <Route path="*" Component={PageNotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}
export default App;
