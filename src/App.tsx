import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plant-shop/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
