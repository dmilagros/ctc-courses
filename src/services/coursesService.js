import axios from 'axios';

const baseUrl = 'https://ctc-backend-staging.herokuapp.com/api/';

const getAllCourses = async () => {
  const res = await axios.get(`${baseUrl}courses/`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      },
    });
  return res;
};

export default getAllCourses;
