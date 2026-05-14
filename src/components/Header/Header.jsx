import useBudget from "../../hooks/useBudget"
import CustomNavbar from "./CustomNavbar"



function Header() {
    const {budgetMode} = useBudget();
    return (
        <header data-bs-theme="dark" className={`bd-body-tertiary ${budgetMode ? "expanded-main-header" : "main-header"}`}>
            <CustomNavbar />
        </header>
    )
}

export default Header