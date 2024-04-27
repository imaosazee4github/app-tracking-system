import React, {createContext, useState, useEffect} from 'react';

const initialState = {
    userInfo: null,
    isAuth: false,
};
const UserContext = createContext(initialState);
const UserContextProvider = ({children}) => {
    const[userInfo, setUserInfo] = useState(null);
    const[isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser){
          setUserInfo(JSON.parse(storedUser));
          setIsAuth(true);
        }
    }, []);

    const login = (username, password) => {
      setIsAuth(true);
      setUserInfo({username, password});
      localStorage.setItem("user", JSON.stringify({username, password}));
      localStorage.setItem("auth", true);
    }

    const logout = () => {
      fetch("/logout").then((res) => {
        setIsAuth(false);
        setUserInfo(null);
        localStorage.removeItem(user);
        localStorage.removeItem("auth");
      })
    }

    const signup = async (fullName, email, password) => {
      try {
        const response = await fetch('/backend_path/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName, email, password }),
        });
        if (response.ok) {
      
          login(email, password);
        } else {
          
          const errorData = await response.json();
          console.error('Signup failed:', errorData.message);
          
        }
      } catch (error) {
        console.error('Error during signup:', error.message);
        
      }
    };
    
    

    const value = {
      userInfo,
      setUserInfo,
      isAuth,
      setIsAuth,
      login,
      signup
    };

        

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
