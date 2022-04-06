import React from "react";
import { Card, CardHeader, CardContent } from '@mui/material';
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import Button from "../shared/Button";


function ProjectAdd() {
    return (
        <Card sx={{ mx: "10px", my: "10px" }} style={{ maxWidth: "200px", minWidth: "200px" }}>
            <CardHeader title="Add Project" />
            <CardContent>
                <Link to={"/register-message-box"} style={{ color: "wheat", width: "100%", height: "100%" }} >
                    <Button style={{ width: "100%", height: "70px" }}>
                        <Add fontWeight={"15em"} />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
export default ProjectAdd;