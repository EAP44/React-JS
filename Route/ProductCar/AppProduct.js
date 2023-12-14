import { BrowserRouter,Routes,Route} from "react-router-dom";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Nofound from "./Nofound";
import Data from './Data.json'
function AppProduct(){
    return(<>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Product Product={Data}/>}/>
            <Route path='/Product/:id' element={<ProductDetails Product={Data}/>}/>
            <Route path='*' element={<Nofound/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppProduct;