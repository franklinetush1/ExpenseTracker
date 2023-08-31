import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

export const Register = () => {
    const [user, setUser] = useState({
        name: "",
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

    const register = () => {
        const { name, email, password } = user;
        if (name && email && password) {
            axios.post(`${BASE_URL}Register`, user)
                .then(res => console.log(res))
                .catch(error => console.error(error));
        } else {
            alert("Invalid input");
        }
    };

    return (
        <>
            <div>
                <div>
                    Create a new account
                </div>
                <span>
                    Already have an account ?
                    <a href="/Login">Sign in</a>
                </span>
                <div>
                    <form>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    placeholder="FullName"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={register}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
