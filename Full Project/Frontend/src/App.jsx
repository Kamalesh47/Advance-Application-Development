import UserLogin from "./Components/Pages/UserLogin"
import AdminLogin from "./Components/Pages/AdminLogin"
import UserRegister from "./Components/Pages/UserRegister"
import AdminRegister from "./Components/Pages/AdminRegister"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Pages/Home"
import BookEvents from "./Components/Pages/BookEvents"
import ViewEvents from "./Components/Pages/ViewEvents"
import EventBox from "./Components/Pages/EventBox"
import AdHome from "./Components/Pages/AdHome"
import AdEvents from "./Components/Pages/AdEvents"
import Status from "./Components/Pages/Status"
import Landing from "./Components/Pages/Landing"
import FoodMenu from "./Components/Pages/FoodMenu"
import Addons from "./Components/Pages/Addons"
import About from "./Components/Pages/About"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/UserLogin" element={<UserLogin/>}></Route>
      <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
      <Route path="/UserRegister" element={<UserRegister/>}></Route>
      <Route path="/AdminRegister" element={<AdminRegister/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/BookEvents" element={<BookEvents/>}></Route>
      <Route path="/ViewEvents" element={<ViewEvents/>}></Route>
      <Route path="/EventBox" element={<EventBox/>}></Route>
      <Route path="/AdHome" element={<AdHome/>}></Route>
      <Route path="/AdEvents" element={<AdEvents/>}></Route>
      <Route path="/Status" element={<Status/>}></Route>
      <Route path="/FoodMenu" element={<FoodMenu/>}></Route>
      <Route path="/Addons" element={<Addons/>}></Route>
      <Route path="/About" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App