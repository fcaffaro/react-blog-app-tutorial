import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form>
                <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder='username' required />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder='email' required />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='password' required />
                </div>
                <button type="submit">Register</button>
                <span>Do you have an account? Go to <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
}

export default Register;