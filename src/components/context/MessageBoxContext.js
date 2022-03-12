import { createContext, useState } from "react";
import Cookies from "universal-cookie";
import {NotificationContainer, NotificationManager} from 'react-notifications';
const cookies = new Cookies();
const MessageBoxContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const doLogin = async (loginUser) => {
    return await fetch(`/login`, {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginUser),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          NotificationManager.err(response.status + " - " +response.statusText );
        }
      })
      .then((text) => cookies.set("accessToken", text))
      .catch((err) => cookies.remove("accessToken"));
  };

  return (
    <MessageBoxContext.Provider
      value={{
        isLoading,
        doLogin,
      }}
    >
      {children}
    </MessageBoxContext.Provider>
  );
};

export default MessageBoxContext;
