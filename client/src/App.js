import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Logout from "./components/logout/logout";
import Orders from "./components/orders/order";
import Protected from "./components/protected-route/protected";
import Items from "./components/item-list/items";
import Cart from "./components/cart/cart";
const App = ()=> {
  return (
    <>
      Ecommerce App works
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/items" element={<Items/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/orders" element={<Protected><Orders/></Protected>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;