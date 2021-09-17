import axios from 'axios';

const baseUrl = 'https://ctc-backend-staging.herokuapp.com/api/';

const getAllCourses = async () => {
  const res = await axios.get(`${baseUrl}courses/`);
  return res;
};

export default getAllCourses;
