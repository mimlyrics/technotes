import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5000/api/v1"
const DashBoard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const getUsers = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`${BASE_URL}/users`, {headers: {'Authorization': `Bearer ${token}` }} );
      console.log(res.data);
      setSuccessMsg("Has access");
    }catch(err) {
      console.log(err);
      setErrMsg(errMsg);       
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/register">Register</Link>
      <div>
        <button onClick={getUsers} 
          className="border shadow rounded p-2 bg-indigo-100 hover:bg-indigo-300">
          View all users
        </button>
      </div>
      <div>
          {errMsg ? <p className="text-red-600">{errMsg}</p> : null}
          {successMsg ? <p className="text-green-600">{setSuccessMsg}</p> : null}      
      </div>
    </div>
  )
}

export default DashBoard;
