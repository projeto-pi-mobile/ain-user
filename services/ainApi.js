import axios from 'axios';
import { getToken } from './auth';

const csApi = axios.create({
    baseURL: 'https://4ac02e35b2c8.ngrok.io/json',
    headers:{
        'content-type':'application/json;charset=utf-8',
    }
})

csApi.interceptors.request.use(async config =>{
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
        // console.log(config.headers.Authorization = `Bearer ${token}`)
    }

    return config
})

export default csApi;