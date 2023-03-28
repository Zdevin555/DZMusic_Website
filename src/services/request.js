import axios from 'axios';

import { BASE_URL,TIMEOUT,RETRY,RETRY_DELAY } from './config';

const instance = axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT,
    retry: RETRY,
    retryDelay:RETRY_DELAY
});

instance.interceptors.request.use(config => {
    return config;
  }, err => {
  
  });
  
instance.interceptors.response.use(res => {
  return res.data;
}, err=>{
    var config = err.config;
    if (!config || !config.retry) return err;
    config.__retryCount = config.__retryCount || 0;
    if (config.__retryCount >= config.retry) {
        return err;
    }
    config.__retryCount += 1;
    var backoff = new Promise(res=>{
        setTimeout(
          ()=>res(), 
          config.retryDelay || 1);
    });
  
    return backoff.then(() => instance(config));
  });
  
export default instance;