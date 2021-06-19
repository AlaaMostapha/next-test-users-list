import axios from "axios";

export const UsersRecieve = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

export const UserRecieve = async (id) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};