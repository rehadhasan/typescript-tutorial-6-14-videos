import {useState} from 'react';

type AuthUser = {
    name: string;
    email: string;
}

const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Rehad',
            email: 'rehad@gmail.com'
        })
    }
    
    const handleLogout = () => {
        // @ts-ignore
        setUser(null)
    }
   return (
       <div>
           <button onClick={handleLogin}>Login</button>
           <button onClick={handleLogout}>Logout</button>
           <p>User name is {user?.name}</p>
           <p>User email is {user?.email}</p>
       </div>
   )
};

export default User;