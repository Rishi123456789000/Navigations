import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  
  const { username, password } = data;

  const Changehandler = (e) => {
    setData({
      ...data,[e.target.name]: e.target.value
    });
  };

  const submithandler = (e) => {
    e.preventDefault();

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (!specialCharRegex.test(username)) {
      alert("Username must contain at least one special character!");
      return;
    }
    if (password.length !== 9) {
      alert("Password must be exactly 9 characters long!");
      return;
    }

    
    console.log(data);
  };

  return (
    <>
    <h2>LOgin Form</h2>
      <form onSubmit={submithandler}>
        <center>
          <input 
        
            type="text" name="username"  placeholder="Enter username"  value={username} onChange={Changehandler} 
          /><br/>
          <input type="password" name="password" placeholder="Enter password" value={password} onChange={Changehandler} 
          /><br/>
          <input type="number" name="password" placeholder="mobilenumber" value={password} onChange={Changehandler} 
          /><br/>
          <input type="submit" name="submit" />
        </center>
        
      </form>
      
    </>
  );
};

export default Login;
