import React, { useState } from 'react';

const Login = ({ onSwitchForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { username, password });
    };

    return (
        <div>
            <form className="form" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn">Login</button>
                </div>
            </form>
            <div className="toggle-form">
                <button onClick={() => onSwitchForm(false)} className="btn">
                    Don't have an account? Register here.
                </button>
            </div>
        </div>
    );
};

export default Login;
