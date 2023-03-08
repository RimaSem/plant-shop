import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ItemDetail from "./pages/ItemDetail";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plant-shop/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ItemDetail />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
