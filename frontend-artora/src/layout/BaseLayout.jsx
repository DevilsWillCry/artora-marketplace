import { Outlet } from "react-router"
import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"

function BaseLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout