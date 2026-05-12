import { Navigate, Outlet } from "react-router"

function PrivateOutlet() {
    const condition = false
  return condition ? <Outlet /> : <Navigate to="/login" />
  
}

export default PrivateOutlet