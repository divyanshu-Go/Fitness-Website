import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home.jsx";
import ShopPage from "./Pages/ShopPage/ShopPage.jsx";
import BmiPage from "./Pages/BmiPage/BmiPage.jsx";
import NewsPage from "./Pages/NewsPage/NewsPage.jsx";
import PaymentsPage from "./Pages/PaymentsPage/PaymentsPage.jsx";
import CartPage from './Pages/CartPage/CartPage.jsx'
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage.jsx";
import CaloriePage from "./Pages/CaloriePage/CaloriePage.jsx";


function App() {
  

  return (

    <>
    <Router>
      <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/bmipage" exact element={<BmiPage/>}></Route>
      <Route path="/news" exact element={<NewsPage/>}></Route>
      <Route path="/shop" exact element={<ShopPage/>}></Route>
      <Route path="/payments" exact element={<PaymentsPage />}></Route>
      <Route path="/cart" exact element={<CartPage/>}></Route>
      <Route path="/contactUs" exact element={<ContactUsPage/>}></Route>
      <Route path="/aboutUs" exact element={<AboutUsPage/>}></Route>
      <Route path="/calorie" exact element={<CaloriePage/>}></Route>
      </Routes>
    </Router>
    </>

  );
}

export default App;
