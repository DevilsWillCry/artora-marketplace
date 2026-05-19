import { Navigate, Outlet } from "react-router"
import useAuth from "@/hooks/useAuth"

function PrivateOutlet() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  
}

export default PrivateOutlet