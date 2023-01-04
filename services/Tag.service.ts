import apiIns from "./API.service"
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"

export default {
  async getTag() {
    try {
      const response = await apiIns.get('/tags');
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
