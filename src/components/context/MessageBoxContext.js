import { React, createContext } from "react";
import { toast } from 'wc-toast'
import Cookies from "universal-cookie";

const cookies = new Cookies();
const MessageBoxContext = createContext();

export const DatabaseProvider = ({ children }) => {

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
          toast.error(response.status + " - " + "Login failed, Please Recheck account");
          throw new Error(response.statusText);
        }
      })
      .then((text) => {
        toast.loading("Login Success");
        setTimeout(() => {
          cookies.set("accessToken", text);
          window.location.href = "/home"
        }, 500)
      })
      .catch((err) => cookies.remove("accessToken"));

  };
  const doRegister = async (RegisterUser) => {
    return await fetch(`/register`, {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(RegisterUser),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          toast.error(response.status + " - " + response.statusText);
          throw new Error(response.statusText);
        }
      })
      .then((text) => {
        toast.loading("Register Success");
        setTimeout(() => {
          window.location.href = "/login"
        }, 500)
      })
      .catch((err) => { });

  };
  const checkAuthentication = async (accessToken) => {
    await fetch(`/home?accessToken=${accessToken}`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.text);
        }
      })
      .catch((err) => {
        window.location.href = "/login";
      });
  }

  const checkProjectName = async (projectName) => {
    return await fetch(`/check-project-name/${projectName}?accessToken=${cookies.get("accessToken")}`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.text);
        } else {
          return response.text();
        }
      })
      .then((text) => {
        return text;
      })
      .catch((err) => { return err; });
  }

  const registerMessagebox = async (registerInfo) => {
    return await fetch(`/register-message-box`, {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerInfo),
    })
      .then((response) => {
        debugger;
        if (response.ok) {
          return response.text();
        } else {
          toast.error(response.status + " - " + response.statusText);
          throw new Error(response.statusText);
        }
      }).then((data) => { 
        toast.success(data, { duration: 3000 })
        return data; })
      .catch((err) => {
        toast.error("co loi xay ra ", { duration: 3000 })
      });
  }

  const getListProjectByUserId = async (page,size) => {
    return await fetch(`/projects?accessToken=${cookies.get("accessToken")}&page=${page}&size=${size}`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          toast.error(response.status + " - " + response.statusText);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        let obj = JSON.parse(data);
        return obj;
      })
      .catch((err) => {
        toast.error("co loi xay ra ", { duration: 3000 })
      });
  }

  const getProjectByKey = async (key) => {
    return await fetch(`/project/${key}?accessToken=${cookies.get("accessToken")}`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        toast.loading("loading...", { duration: 500 })
        if (response.ok) {
          return response.text();
        } else {
          toast.error(response.status + " - " + response.statusText);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        let obj = JSON.parse(data);
        return obj;
      })
      .catch((err) => {
        toast.error("co loi xay ra ", { duration: 3000 })
      });
  }

  return (
    <>
      <MessageBoxContext.Provider
        value={{
          doLogin,
          doRegister,
          checkAuthentication,
          checkProjectName,
          registerMessagebox,
          getListProjectByUserId,
          getProjectByKey
        }}
      >
        {children}
      </MessageBoxContext.Provider>
    </>
  );
};

export default MessageBoxContext;
