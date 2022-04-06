import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSearchParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import MessageBoxContext from "../context/MessageBoxContext";
import { toast } from 'wc-toast'
export default function ProjectDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get("key");
  const [projectDetail, setProjectDetail] = React.useState({});;
  const { getProjectByKey } = React.useContext(MessageBoxContext);
  React.useEffect(() => {
    getProjectByKey(key).then((data) => {
      setProjectDetail(data);
    }).catch((err) => {
      window.location.href = "/home"
    })
  }, [searchParams]);

  return (
    <div>
      <Accordion >
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>{projectDetail.projectName}</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={true}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Project Infomation</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div>
            <Typography style={{ width: '100%' }}>
              <InputLabel style={{ width: '25%', float: 'left' }} >Project Name: </InputLabel>
              <InputLabel style={{ width: '75%', float: 'left' }} >{projectDetail.projectName} </InputLabel>
            </Typography>
            <Typography style={{ width: '100%' }}>
              <InputLabel style={{ width: '25%', float: 'left' }} >Project Id: </InputLabel>
              <InputLabel style={{ width: '75%', float: 'left' }} >{projectDetail.projectName}{projectDetail.projectNumber}  </InputLabel>
            </Typography>
            <Typography style={{ width: '100%' }}>
              <InputLabel style={{ width: '25%', float: 'left' }} >Project Number: </InputLabel>
              <InputLabel style={{ width: '75%', float: 'left' }} >{projectDetail.projectNumber} </InputLabel>
            </Typography>
            <Typography style={{ width: '100%' }}>
              <InputLabel style={{ width: '25%', float: 'left' }} >Project Key (ServerKey): </InputLabel>
              <InputLabel style={{ width: '75%', float: 'left' }} >{projectDetail.key} <ContentPasteIcon titleAccess='Coppy Server Key'
                onClick={() => {
                  navigator.clipboard.writeText(projectDetail.key).then(function () {
                    toast.success(' Copying Server Key to clipboard was successful!');
                  }, (err) => {
                    toast.error('Async: Could not copy text: ' + err, { duration: 1000 });
                  });
                }} /></InputLabel>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How to Use</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Something to setting with EZY Message Cloud
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );

}
