import React, { useState, useContext, useEffect } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import MessageBoxContext from "../context/MessageBoxContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { doLogin } = useContext(MessageBoxContext);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [password, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };
    doLogin(loginUser);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Login to Message Box </h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleChangeEmail}
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            onChange={handleChangePassword}
            placeholder="password"
            value={password}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Button type="submit" isDisabled={btnDisabled}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
