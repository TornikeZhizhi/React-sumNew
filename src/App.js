import Header from "./BaceLayout/Header";
import {Route ,Switch ,Redirect} from "react-router-dom"
import Products from "./Components/Producets/Products";
import ProductDetail from "./Components/Producets/ProductDetail";
import HeaderSwitchContext from "./ContextApi/HeaderSwitcherContext";
import ProductsContext from "./ContextApi/ProductsContext";
import ResourcesMain from "./Components/Resources/ResourcesMain";
import HangManMain from "./Components/HangMan/HangManMain";
import Wheel from "./Components/Wheel/Wheel";
import Shop from "./shop/Shop";
import ShopProvider from "./ContextApi/ShopContext";
import ShopCheckout from "./shop-checkout/Shop-checkout"


// const colorHandler = (event) => {
//   console.log(event.target.checked)
// }

function App() {
  return (
    <div className="App">

     
        <HeaderSwitchContext>
          <ProductsContext>
            <ShopProvider>
          <Header></Header>
    
          <Switch>
            <Route path="/resource" exact>
              <ResourcesMain></ResourcesMain>
            </Route>
            <Route path="/hangman" exact>
              <HangManMain></HangManMain>
            </Route>
            <Route path="/wheel">
              <Wheel></Wheel>
            </Route>
            <Route path="/products" exact>
              <Products></Products>
            </Route>
            <Route path="/products/:id">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/checkout" exact>
              <ShopCheckout/>
            </Route>
            <Route path="/" exact>
              <Shop></Shop>
            </Route>
          </Switch>
          
          </ShopProvider>
          </ProductsContext>
        </HeaderSwitchContext>

        
    </div>
  );
}

export default App;
