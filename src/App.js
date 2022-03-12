import { DatabaseProvider } from "./components/context/MessageBoxContext";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Login from "./components/login/login";

function App() {
  return (
    <DatabaseProvider>
      <Router>
        <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
        </Routes>
        </div>
      </Router>
    </DatabaseProvider>
  );
}

export default App;
