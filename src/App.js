import Header from "./BaceLayout/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./Components/Producets/Products";
import ProductDetail from "./Components/Producets/ProductDetail";
import HeaderSwitchContext from "./ContextApi/HeaderSwitcherContext";
import ProductsContext from "./ContextApi/ProductsContext";
import ResourcesMain from "./Components/Resources/ResourcesMain";
import RepeatMain from "./Components/Repeat/Repeat";
import HangManMain from "./Components/HangMan/HangManMain";
import Wheel from "./Components/Wheel/Wheel";
import Shop from "./shop/Shop";
import ShopProvider from "./ContextApi/ShopContext";
import ShopCheckout from "./shop-checkout/Shop-checkout";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ShirtDraw from "./Components/ShirtDraw/ShirtDraw";
import Shirt from "./Components/ShirtDraw/Shirt";
import RepeatContext from "./Components/Repeat/RepeatContext/RepeatContext";
import TypeGame from "./Components/TypeGame/TypeGame";
import Slot from "./Components/Slot/Slot";
import AxiosData from "./Components/AxiosData/AxiosData";
import Home from "./Components/ShoppingCard/pages/Home";
import Store from "./Components/ShoppingCard/pages/Store";
import About from "./Components/ShoppingCard/pages/About";
import { ShoppingCartProvider } from "./Components/ShoppingCard/context/ShoppingCartContext";
import TreloMain from "./Components/Trelo/TreloMain";
import PersonToDoList from "./Components/PersonToDoList/PersonToDoList";
import PersonTodoContext from "./Components/PersonToDoList/PersonTodoContext/PersonTodoContext";
import { useEffect } from "react";
import ProjectTodo from "./Components/ProjectTodo/ProjectTodo";

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img style={{"height":"100px","width":"100%"}} src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onDragStart={handleDragStart} role="presentation" />,
//   <img style={{"height":"100px","width":"100%"}} src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onDragStart={handleDragStart} role="presentation" />,
//   <img style={{"height":"100px","width":"100%"}} src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onDragStart={handleDragStart} role="presentation" />,
//   <img style={{"height":"100px","width":"100%"}} src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onDragStart={handleDragStart} role="presentation" />,
//   <img style={{"height":"100px","width":"100%"}} src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onDragStart={handleDragStart} role="presentation" />,
// ];
// const responsive = {
//   0: { items: 1.3 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

function App() {
  return (
    <div className="App">
      {/* <AliceCarousel mouseTracking    responsive={responsive} items={items} /> */}
      {/* npm i react-alice-carousel */}
      <ShoppingCartProvider>
        <PersonTodoContext>
          <RepeatContext>
            <HeaderSwitchContext>
              <ProductsContext>
                <ShopProvider>
                  <Header></Header>

                  <Switch>
                    <Route path="/repeat" exact>
                      <RepeatMain></RepeatMain>
                    </Route>
                    <Route path="/person-todo" exact>
                      <PersonToDoList />
                    </Route>
                    <Route path="/hangman" exact>
                      <HangManMain></HangManMain>
                    </Route>
                    <Route path="/wheel">
                      <Wheel></Wheel>
                    </Route>
                    <Route path="/slot">
                      <Slot></Slot>
                    </Route>
                    <Route path="/home">
                      <Home></Home>
                    </Route>
                    <Route path="/store">
                      <Store></Store>
                    </Route>
                    <Route path="/about">
                      <About></About>
                    </Route>
                    <Route path="/project-todo">
                      <ProjectTodo />
                    </Route>
                    <Route path="/trelo">
                      <TreloMain></TreloMain>
                    </Route>
                    <Route path="/axios">
                      <AxiosData></AxiosData>
                    </Route>
                    <Route path="/shirt-draw" exact>
                      <ShirtDraw />
                    </Route>
                    <Route path="/shirt-draw/:id">
                      <Shirt />
                    </Route>
                    <Route path="/products" exact>
                      <Products></Products>
                    </Route>
                    <Route path="/type-Game" exact>
                      <TypeGame />
                    </Route>
                    <Route path="/products/:id">
                      <ProductDetail></ProductDetail>
                    </Route>
                    <Route path="/checkout" exact>
                      <ShopCheckout />
                    </Route>
                    <Route path="/" exact>
                      {/* <Shop></Shop> */}
                      <ResourcesMain></ResourcesMain>
                    </Route>
                  </Switch>
                </ShopProvider>
              </ProductsContext>
            </HeaderSwitchContext>
          </RepeatContext>
        </PersonTodoContext>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
