import { Grid } from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const HelpAccordion = () => {
    return (
        <div>
            <Grid container sx={{padding: '10px', background: '#262626'}}>
                { Array.from(Array(6)).map(data=>(
                <Grid item xs={12} sx={{padding: '10px'}}>
                    <Accordion sx={{background: '#262626', color: 'white', border: '1px solid white'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                ))
                }

            </Grid>
        </div>
    );
};

export default HelpAccordion;