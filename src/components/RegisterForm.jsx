import React, { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

function RegisterForm() {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
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
