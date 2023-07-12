import { useState, createContext } from 'react';

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

  const handleLoginData = (data) => {
    // Perform login logic here and update the state accordingly
    // For example, after successful login:
    setUser({
      id: data.id,
      fullName: data.fullname,
      username: data.username,
      token: data.token,
      access: data.title.access
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
