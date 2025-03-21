import React, { useState } from 'react';

const Registration = ({ onSwitchForm }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registering with:', { name, username, password });
    };

    return (
        <div>
            <form className="form" onSubmit={handleRegisterSubmit}>
                <div className="form-group">
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                    <button type="submit" className="btn">Register</button>
                </div>
            </form>
            <div className="toggle-form">
                <button onClick={() => onSwitchForm(true)} className="btn">
                    Already have an account? Login here.
                </button>
            </div>
        </div>
    );
};

export default Registration;

