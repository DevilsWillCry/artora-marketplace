import { Outlet } from "react-router"
import NavBar from "@/components/ui/NavBar"

function BaseLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default BaseLayout