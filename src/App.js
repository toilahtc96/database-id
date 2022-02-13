import { DatabaseProvider } from "./components/context/DatabaseIdContext";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import RegisterForm from "./components/RegisterForm";

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
                <RegisterForm />
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
