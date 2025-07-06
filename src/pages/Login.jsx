import {Link, useNavigate} from 'react-router-dom';
import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

const Login = () => {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

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

            login(input);
            navigate('/'); // Redirect to home page on successful login

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
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='password' required onChange={handleChange} />
                </div>
                <button onClick={handleSubmit} type="submit">Login</button>
                {error && <p className="error">{error}</p>}
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    );
}

export default Login;