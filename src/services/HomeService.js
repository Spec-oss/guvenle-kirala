import axios from 'axios';

export default class HomeService {
 
  async getHome(data) {
    return await axios.post(process.env.REACT_APP_API_URL, data,  {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "https://guvenlekirala.tech",
        "Access-Control-Allow-Methods": "POST",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Max-Age": "1800",
        // "Access-Control-Allow-Headers": "content-type",
      },
    });
  }
  
}