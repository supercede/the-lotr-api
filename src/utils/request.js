import axios from 'axios';
import { config } from 'dotenv';

config();

const headers = {
  Authorization: `Bearer ${process.env.API_KEY}`
};

const axiosRequest = async param => {
  try {
    return await axios({
      url: `${process.env.URL}/${param}`,
      headers
    });
  } catch (err) {
    return err;
  }
};

export default axiosRequest;
