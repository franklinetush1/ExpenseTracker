import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Styles/Login.css";

const BASE_URL = "http://localhost:5000/api/v1/";

export const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const login = async () => {
    await axios
      .post(`${BASE_URL}login`, user)
      .then((res) => {
        alert(res.status);
        console.log(res.user);
        setLoginUser(res.user);        
        res.user ? navigate('/Dasboard'): console.log("Error Logging in");
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  };

  return (
    <div>
      <div className="login-box">
        <div>Login To Your Account</div>
        <br/>
        <div>
          <form autoComplete="off">
            <div>
              <div className="user-box">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Your password"
                />
              </div>
            </div>
            <div>
              <button onClick={login} className = 'submit'>Login
                  <div class="arrow-wrapper">
                  <div class="arrow"></div>
                  </div>
              </button>
            </div>
          </form>
        </div>
        <div>
          
          <br/>
          <a
            href="#"
            onClick={() => navigate('/Register')}
          >
            You don't have an account?
          </a>
        </div>
      </div>
    </div>
  );
};
