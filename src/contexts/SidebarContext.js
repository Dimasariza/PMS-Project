import { useState, createContext } from 'react';

export const SidebarContext = createContext({});

export function SidebarProvider({ children }) {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [shipID, setShipId] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar, shipID, setShipId }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
