import React, { useState, useEffect, useContext } from "react";
import Card from "../shared/Card";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function ProjectInfo() {
  const [key, setKey] = useState("");
  return (
    <Card>
        <label> Project Key:  {cookies.get("key")}</label>
    </Card>
  );
}

export default ProjectInfo;
