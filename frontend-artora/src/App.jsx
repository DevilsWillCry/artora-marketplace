import "./App.css";
import { Route, Routes } from "react-router";
import BaseLayout from "./layout/BaseLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import PrivateOutlet from "./layout/PrivateOutlet";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import ArtoraListPiecePage from "./pages/ArtoraListPiecePage";
import DetailProductPage from "./pages/DetailProductPage";

function App() {
  const density = "compact";
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage density={density} />} />
          <Route path="/about" element={<AboutPage />} />

          <Route element={<PrivateOutlet />}>
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<DetailProductPage />} />
            <Route path="/product/listing/:id" element={<ArtoraListPiecePage />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
