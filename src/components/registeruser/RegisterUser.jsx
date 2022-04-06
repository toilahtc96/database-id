import React, { useState, useContext, useEffect } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import MessageBoxContext from "../context/MessageBoxContext";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName,setLastName] = useState("");
  const [firstName,setFirstName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { doRegister } = useContext(MessageBoxContext);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeFirstName = (e) =>{
    setFirstName(e.target.value);
  }
  const handleChangelastName = (e) =>{
    setLastName(e.target.value);
  }

  useEffect(() => {
    if (email !== "" && password !== "" && lastName !== "" && firstName !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [password, email,lastName,firstName]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    const registerUser = {
      email,
      password,
      lastName,
      firstName
    };
     doRegister(registerUser);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Register Account Message Box </h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleChangeFirstName}
            placeholder="First Name"
            value={firstName}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            onChange={handleChangelastName}
            placeholder="Last Name"
            value={lastName}
          />
        </div>
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
            Register
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default RegisterUser;
