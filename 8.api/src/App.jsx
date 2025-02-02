import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  // const getUserById = async (userId) => {
  //   const response = await axios.get(BASE_URL + "/users/" + userId);
  //   console.log(response.data.username);
  // }

  const createUser = async (newUser) => {
    const response = await axios.post(BASE_URL + "/users", newUser);
    console.log(response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    await axios.put(BASE_URL + "/users/" + userId, updatedUser);
  }

  const deleteUser = async (userId) => {
    const response = await axios.delete(BASE_URL + "/users/" + userId);
    console.log(response.data);
  }



  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    return response.data.postId;
  }

  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);
  }

  useEffect(() => {

    // getAllUsers();

    // getUserById(3);

    // const newUser = {
    //   "username": "bilal",
    //   "password": "123"
    // };
    // createUser(newUser)

    // const updatedUser = {
    //   "username": "murat",
    //   "password": "murat"
    // };
    // updateUser(3, updatedUser);

    //deleteUser(3);



    //getPost();
  }, [])


  return (
    <div>

    </div>
  )
}

export default App
