import { Navigate, Outlet } from "react-router"

function PrivateOutlet() {
  const condition = false // Cambia esto a true si el usuario está autenticado
  return condition ? <Outlet /> : <Navigate to="/login" />
  
}

export default PrivateOutlet