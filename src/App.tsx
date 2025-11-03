import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import Card from "./pages/card/Card";
import ProductDet from "./pages/productDet/ProductDet";
import { ShppingCardProvider } from "./context/ShoppingContext";

function App() {
  return (
    <>
      <ShppingCardProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/productDet/:id" element={<ProductDet />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </Layout>
      </ShppingCardProvider>
    </>
  );
}

export default App;
