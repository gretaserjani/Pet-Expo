import axios from 'axios';

export const fetchDog = async () => {
  try {
    const response = await axios.get('https://freetestapi.com/api/v1/dogs');

    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const fetchSingleDog = async (id) => {
    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/dogs/${id}`);
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


  export const fetchCat = async () => {
    try {
      const response = await axios.get('https://freetestapi.com/api/v1/cats');
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  


  export const fetchSingleCat = async (id) => {
    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/cats/${id}`);
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


  export const fetchBird = async () => {
    try {
      const response = await axios.get('https://freetestapi.com/api/v1/birds');
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


  
  export const fetchSingleBird = async (id) => {
    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/birds/${id}`);
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
