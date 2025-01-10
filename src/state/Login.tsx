import {useState} from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)

    const handleLogin = () => {
      setIsLogin(true)
    }

    const handleLogout = () => {
      setIsLogin(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <span>{isLogin.toString()}</span>
        </div>
    );
};

export default Login;