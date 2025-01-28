import './Login.css'

export default function Login() {

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>

    )
}