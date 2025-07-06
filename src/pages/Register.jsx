import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

const Register = () => {

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch('http://localhost:8800/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input),
            })

            if (!response.ok) {
                setError('Registration failed. Please try again.');
            }

            navigate('/login');

        } catch (error) {
            console.error('Error during registration:', error);
            setError(error.response.data);
        }

    }



    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form>
                <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder='username' required onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder='email' required onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='password' required onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Register</button>
                {error && <p className="error">{error}</p>}
                <span>Do you have an account? Go to <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
}

export default Register;