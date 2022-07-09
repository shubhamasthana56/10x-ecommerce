import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
const App = ()=> {
  return (
    <>
      Ecommerce App works
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;