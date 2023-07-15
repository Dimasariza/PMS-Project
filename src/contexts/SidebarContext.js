import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const SidebarContext = createContext({});

export function SidebarProvider({ children }) {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [user, setUser] = useState({
    id: '',
    fullName: '',
    username: '',
    token: '',
    access: {
      dataSheet: false,
      department: false,
      inbox: false,
      jobList: false,
      shipDetails: false,
      shipList: false,
      stock: false,
      users: false,
    },
    // Add more properties as needed
  });

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
  //       username: username,
  //       password: password
  //     });
  //     router.push('/batera/ship-list');
  //     handleLoginData(response.data.data);
  //     // Handle the response data and tokens as per your requirements
  //   } catch (error) {
  //     setLoginError(true)
  //   }
  // }

  const clearSessionStorage = () => {
    sessionStorage.clear();
  }

  // useEffect(() => {
  //   const userId = sessionStorage.getItem("userId");
  //   const token = sessionStorage.getItem("token")
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     token: token,
  //   }));

  //   console.log('token is ' + token)
    
  // }, [])

  const handleLoginData = (data) => {
    // Perform login logic here and update the state accordingly
    // For example, after successful login:
    setUser({
      id: data.id,
      fullName: data.fullname,
      username: data.username,
      access: data.title.access,
      token: data.token,
      // Set other properties as needed
    });
    // console.log(user)
  };

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar, user, handleLoginData }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
