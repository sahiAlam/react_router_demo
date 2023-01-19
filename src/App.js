import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Business from "./components/Business";
import Contact from "./components/Contact";
import Faculty from "./components/Faculty";
import Home from "./components/Home";
import Library from "./components/Library";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Subscription from "./components/Subscription";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="business" element={<Business />} />
            <Route path="library" element={<Library />} />
            <Route path="faculty" element={<Faculty />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;