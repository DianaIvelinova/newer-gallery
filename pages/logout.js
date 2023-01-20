import { useRouter } from "next/router"
import { useUser } from "../hooks/useUser"

export default function TopNav() {
   const { logout } = useUser()
   const router = useRouter()

   logout()

   return (
      <>

      </>
   )
}
