import {useState, useEffect} from "react";
const BASE_URL = "https://technotes-api.onrender.com";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("yepp");
        const res = await axios.post(`${BASE_URL}`, {username:username, password:password}, {headers: {withCredentials: true}});
        console.log(res.data);
        console.log(res.data.secret);
        localStorage.setItem('token', res.data.secret);
        sessionStorage.setItem('token', res.data.secret);
        const expiresIn = (new Date(Date.now() + 60000 * 24 * 60)).toUTCString();
        document.cookie += 'cookie_name' + "=" + res.data.secret + ';expires='  + expiresIn + ";path=" + "/" + ";httpOnly=true";  
        setSuccessMsg("Succcessfully login");
        alert(document.cookie);
        setTimeout(() => {
            setSuccessMsg(false);
        }, [3000])
    }catch(err) {
        console.log(err?.data?.message);
        setErrMsg(err?.data?.message);
        localStorage.removeItem('token');
    }
  }

  console.log(username, password)

  return (
    <section className="my-2">
      <form onSubmit={handleSubmit}>
        <div>
          {errMsg ? <p className="text-red-600">{errMsg}</p> : null}
          {successMsg ? <p className="text-green-600">{setSuccessMsg}</p> : null}
        </div>
        <div className="p-2">
            <label htmlFor="">Username</label>
            <input value={username} onChange={e=>setUsername(e.target.value)} type="text" className="border shadow rounded"/>
        </div>
        <div className="p-2">
            <label htmlFor="">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="border shadow rounded"/>
        </div>
        <button type="submit" className="p-2 border shadow rounded-md">Register</button>
    </form>
    </section>
  )
}

export default Register
