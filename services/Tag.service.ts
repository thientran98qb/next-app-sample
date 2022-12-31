import apiIns from "./API.service"

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
