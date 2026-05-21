import { useContext } from "react"
import { VisitUserContext  } from "@/context/VisitUserContext"

function useVisitUser() {
  return useContext(VisitUserContext)
}

export default useVisitUser
