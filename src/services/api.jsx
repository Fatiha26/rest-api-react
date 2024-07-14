import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const getCommentsByPostId = async (postId) => {
  const response = await api.get(`/posts/${postId}/comments`);
  return response.data;
};
