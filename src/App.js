import { DatabaseProvider } from "./components/context/MessageBoxContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Cookies from "universal-cookie";
import RegisterUser from "./components/registeruser/RegisterUser";
import RegisterForm from "./components/register/RegisterForm";
import { Logout } from "./components/logout/Logout";
import Menu from "./components/menu/Menu";
import ProjectDetail from "./components/client-project/project-detail";

const cookies = new Cookies();


/*--------------------
Items
--------------------*/
const itemsNoLogin = [
  {
    name: "Home",
    color: "#f44336",
    href: "/home"
  },
  {
    name: "Login",
    color: "#f44336",
    href: "/login"
  },
  {
    name: "Register User",
    color: "#f44336",
    href: "/register"
  }
]
const itemsLogined = [
  {
    name: "Home",
    color: "#f44336",
    href: "/home"
  },

  {
    name: "Register Message Box",
    color: "#e91e63",
    href: "/register-message-box"
  },

  {
    name: "Register User",
    color: "#9c27b0",
    href: "/register"
  },

  {
    name: "Logout",
    color: "#673ab7",
    href: "/logout"
  }];

function App() {
  const [token, setToken] = useState(cookies.get("accessToken"));
  return (
    <DatabaseProvider>
      {!token ?
        <Menu items={itemsNoLogin} /> :
        <Menu items={itemsLogined} />}
      <Router>

        <div className="container">
          <Routes>
            {!token ?
              (<Route
                path="*"
                element={
                  <Login />}
              />)
              : (
                <>
                  <Route exact path="/home" element={<><Home /></>} />
                  <Route
                    path="/login"
                    element={
                      <>
                        <Login />
                      </>
                    }
                  ></Route>
                  <Route path="/register-message-box" element={
                    <RegisterForm />
                  } />

                  <Route path="/logout" element={
                    <Logout />
                  } />

                  <Route path="/detail" element={
                    <ProjectDetail />
                  } />
                </>
              )

            }

            <Route
              path="/register"
              element={
                <RegisterUser />
              } />
          </Routes>
        </div>
      </Router>

    </DatabaseProvider>
  );
}

export default App;
