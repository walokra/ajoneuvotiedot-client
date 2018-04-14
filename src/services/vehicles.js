import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080/vehicledata-ws/v1'
})
