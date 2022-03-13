import axios from "axios";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put
}


const url = "http://localhost:8000";
console.log();

export const uploadFile = async (post) => {
  // console.log(post.get("file"));
  try {
    return await http.post(`${url}/files/upload`, post);
  } catch (error) {
    console.log("Error while calling uploadFile API ", error);
  }
};

export const createPost = async (post) => {
  try {
    return await http.post(`${url}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API ", error);
  }
};

export const getAllPosts = async (params) => {
  try {
    let response = await http.get(`${url}/posts${params}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPosts API ", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await http.get(`${url}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API ", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    // console.log(post);
    // console.log(id);
    return await http.put(`${url}/update/${id}`, post);
    // return response.data;
  } catch (error) {
    console.log("Error while calling updatePost API ", error);
  }
};

export const deletePost = async (id) => {
  try {
    return await http.delete(`${url}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deletePost API ", error);
  }
};

export const deleteImage = async (id) => {
  try {
    return await http.delete(`${url}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deleteImage API ", error);
  }
};

export const userSignup = async (user) => {
  try {
    return await http.post(`${url}/signup`, user).then((res) => console.log(res));
  } catch (error) {
    console.log("Error while calling userSigup API ", error);
  }
}
