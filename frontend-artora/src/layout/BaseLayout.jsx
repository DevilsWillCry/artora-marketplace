import { Outlet } from "react-router"
import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import CartDrawer from "@/components/cart/CartDrawer"
import { Toaster } from "sonner"

function BaseLayout() {
  return (
    <>
      <NavBar />
      <Toaster />
      <CartDrawer />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout