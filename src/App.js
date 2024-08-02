import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Saleimage from "./components/Saleimage";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popular from "./components/popular";
import Footer from "./components/Footer";
function App(){
    return(
        <>
        <Navbar></Navbar>
        <Category></Category>
        <Saleimage></Saleimage>
        <Recommended></Recommended>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
        </>
    )
}

export default App