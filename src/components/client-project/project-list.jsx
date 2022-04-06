import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import ProjectAdd from "./project-add";
import ProjectItem from "./project-item";
import ReactPaginate from 'react-paginate';
import PaginatedItems from "../test/pagination";

function ProjectList({ listProject }) {
    const [listProjectRs, setListProjectRs] = useState([]);
    useEffect(() => {
        listProject.then(data => { setListProjectRs(data) })
    }, []);

    return (<>
        <Grid container>
            <ProjectAdd />
            {/* {listProjectRs.map(item => <ProjectItem project={item} key={item.id} />)} */}
            <PaginatedItems itemsPerPage={5} itemss={listProjectRs} />

        </Grid>
    </>

    )

}

export default ProjectList;

