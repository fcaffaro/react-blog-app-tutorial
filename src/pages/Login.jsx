import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form>
                <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder='username' required />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='password' required />
                </div>
                <button type="submit">Login</button>
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    );
}

export default Login;