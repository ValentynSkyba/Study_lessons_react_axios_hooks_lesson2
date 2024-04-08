import Axios from "axios";

Axios.defaults.baseURL = "https://dummyjson.com/";

export const fetchPosts = async (args) => {
  const response = await Axios.get(`posts`, {
    params: {
      limit: 6,
      ...args,
    },
  });
  console.log(response);
  return response.data;
};

//fetch('https://dummyjson.com/posts/search?q=love')
export const fetchPostbyQuery = async (args) => {
  const response = await Axios.get(`post/search`, {
    params: {
      limit: 6,
      ...args,
    },
  });
  console.log(response);
  return response.data;
};
