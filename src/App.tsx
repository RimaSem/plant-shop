import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RouteNames } from "./types/RouteNames";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ItemDetail from "./pages/ItemDetail";
import Favorite from "./pages/Favorite";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={RouteNames.SHOP} element={<Shop />} />
          <Route path={`${RouteNames.SHOP}/:id`} element={<ItemDetail />} />
          <Route path={RouteNames.FAVORITE} element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
