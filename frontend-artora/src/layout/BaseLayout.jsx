import { Outlet } from "react-router"

function BaseLayout() {
  return (
    <>
      <h1>Artora</h1>
      <Outlet />
    </>
  )
}

export default BaseLayout