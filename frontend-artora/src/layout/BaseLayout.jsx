import { Outlet } from "react-router"
import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import CartDrawer from "@/components/cart/CartDrawer"

function BaseLayout() {
  return (
    <>
      <NavBar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout