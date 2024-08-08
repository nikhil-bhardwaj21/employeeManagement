import axios from 'axios'

const url  = axios.create({
    baseURL: "https://localhost:7105/api/Employees"

})

export default url;