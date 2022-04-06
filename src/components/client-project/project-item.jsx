import React, { useContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Card, CardContent, CardActionArea, CardActions, CardHeader } from '@mui/material';
import {
    Link,
} from "react-router-dom";
import MessageBoxContext from "../context/MessageBoxContext";
const cookies = new Cookies();

function ProjectItem({ project }) {
    const accessToken = cookies.get("accessToken");
    const { checkAuthentication } = useContext(MessageBoxContext);
    const [projectInfo, setProjectInfo] = useState({});
    useEffect(() => {
        setProjectInfo(project);
    }, [checkAuthentication]);
    checkAuthentication(accessToken);
    return (
        <Card sx={{ mx: "10px", my: "10px" }} style={{ maxWidth: "200px", minWidth: "200px" }}>
            <Link to={{ pathname: `/detail?key=${projectInfo.key}` }} style={{ textDecoration: 'none', color: '#000', textTransform: 'uppercase' }}>
                <CardHeader title={projectInfo.projectName ? projectInfo.projectName.slice(0, 7) + "..." : "asd"} />
            </Link>
            <CardContent>
                <h2> Server Key : {projectInfo.key}</h2>
                <CardActions>
                    <CardActionArea>Coppy Project Key</CardActionArea>
                    <CardActionArea>
                        <Link to={{ pathname: `/detail?key=${projectInfo.key}` }} style={{ textDecoration: 'none', color: '#000', textTransform: 'uppercase' }}>
                            Show Detail
                        </Link>
                    </CardActionArea>
                </CardActions>
            </CardContent>
        </Card>
    );
}
export default ProjectItem;