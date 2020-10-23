import axios from 'axios';

import { BASE_URL , TIMEOUT } from './config'


const instance = axios.create({
    baseURL : BASE_URL ,
    timeout : TIMEOUT 
})

instance.interceptors.request.use(config=>{

    // 中间件 Loading



    return config;
},err=>{
    if (err) {
        console.log(err);
    }
})


instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误信息");
      }
    }
    return err;
  });
  
  export default instance;