import axios from 'axios';

export default class HomeService {
 
  async getHome(data) {
    return await axios.post(process.env.REACT_APP_API_URL, data);
  }
  
}