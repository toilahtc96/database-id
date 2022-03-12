import React, { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

function RegisterForm() {
  const top100Films = [
    { title: "MySQL Server", id: 1 },
    { title: "MongoDB", id: 2 },
    
  ];
  const handlePick = (e, values) => {
    setDatabaseName(values.year);
  };
  const handleNameChange = (e) => {
    setProjectName(e.target.value);
  };
  const [projectName, setProjectName] = useState("");
  const [databaseName, setDatabaseName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  return (
    <Card>
      <form>
        <h2>Register Database Service</h2>
        <div className="input-group">
          <input
            onChange={handleNameChange}
            type="text"
            placeholder="Your Project Name"
            value={projectName}
          />
        </div>
        <div className="input-group">
          <Autocomplete
            options={top100Films}
            style={{ width:"100%"}}
            getOptionLabel={(option) => option.title || ""}
            defaultValue={[top100Films[13]]}
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
        <div style={{textAlign:"center",marginTop:10}}>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default RegisterForm;
