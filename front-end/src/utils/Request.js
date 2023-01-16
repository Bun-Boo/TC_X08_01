import axios from "axios"

const Requestbase = axios.create({
    baseURL : "http://localhost:3000/"
});

export default Requestbase;