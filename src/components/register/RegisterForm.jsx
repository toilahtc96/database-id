import React, { useState, useEffect, useContext } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import ReactLoading from 'react-loading';
import MessageBoxContext from "../context/MessageBoxContext";
import { toast } from 'wc-toast'

function RegisterForm() {
  const [projectName, setProjectName] = useState("");
  const [databaseRegisterId, setDatabaseRegisterId] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [typeLoading, setTypeLoading] = useState("blank");
  const { checkProjectName, registerMessagebox } = useContext(MessageBoxContext);
  const ezyfoxDatabaseServer = [
    { title: "MySQL Server", id: 1 },
    { title: "MongoDB", id: 2 },

  ];
  const handleNameChange = (e) => {
    setProjectName(e.target.value);
  };
  useEffect(() => {
    if (projectName.length > 0) {
      setTypeLoading('cylon')
    }
    if (projectName.length >= 10 && databaseRegisterId !== "") {
      checkProjectName(projectName).then(rs => {
        if (rs === 'true') {
          toast.error("ProjectName is exited in Message Box!, please use orther Name!", { duration: 2000 })
          setBtnDisabled(true);
        } else {
          setTypeLoading('blank');
        } setBtnDisabled(false);
      })
    } else {
      setBtnDisabled(true);
    }
  }, [projectName, databaseRegisterId]);

  const handlePick = async (e, value) => {
    setDatabaseRegisterId(value.id)
  }
  const handleSubmit = () => {
    let registerInfo = {
      projectName, databaseRegisterId
    }
    registerMessagebox(registerInfo).then(() => {
      window.location.href = "/home";
    });
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Register Database Service</h2>
        <div className="input-group">
          <input
            maxLength={50}
            onChange={handleNameChange}
            type="text"
            placeholder="Your Project Name"
            value={projectName}
          />
          <ReactLoading type={typeLoading} color={'green'} height={'5%'} width={'5%'} />

        </div>
        <div className="input-group">
          <Autocomplete
            options={ezyfoxDatabaseServer}
            style={{ width: "100%" }}
            getOptionLabel={(option) => option.title || ""}
            defaultValue={[ezyfoxDatabaseServer[0]]}
            onChange={handlePick}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Label"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default RegisterForm;
