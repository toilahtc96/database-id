import React, { useState, useContext } from "react";
import Cookies from "universal-cookie";
import MessageBoxContext from "../context/MessageBoxContext";
import ProjectList from "../client-project/project-list";
const cookies = new Cookies();

function Home() {
  const accessToken = cookies.get("accessToken");
  const { checkAuthentication, getListProjectByUserId } = useContext(MessageBoxContext);
  checkAuthentication(accessToken);
  const [listProject, setListProject] = useState(getListProjectByUserId(0,10));
  return (
    <ProjectList listProject={listProject} />
  );
}
export default Home;
