import "./App.css";
import { Route, Routes } from "react-router";
import BaseLayout from "./layout/BaseLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import PrivateOutlet from "./layout/PrivateOutlet";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./hooks/useAuth";

function App() {
  const density = "compact";
  const user = useAuth();
  user.setUser("hola");
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage density={density} />} />
          <Route
            path="/shop"
            element={
              <PrivateOutlet>
                <ShopPage />
              </PrivateOutlet>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
