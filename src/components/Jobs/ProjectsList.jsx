import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Project from "./Project";
import './style.css';
import {
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

//You are building a Market Place for Self-Employed.
// You have two actors: Seller: Posts a project with details requirements.
// The post also includes the last day and time for accepting bids.
// Buyer (Self-Employed): Bids for work on a fixed price or hourly basis.
// High Level Requirements: Assume all projects can be done remotely/online.
// You do not need to worry about matching by location.
// The Buyer with the lowest bid automatically wins the bid when the deadline is reached.
// Lowest bid is displayed on the project page. We have 50K registered Buyers.
// On average, 100 projects are posted every day. On average, each project receives 50 bids.
// On the homepage, we need to show 100 most recent projects. You are welcome to assume unspecified requirements to make it better for the customers.

//npx json-server --watch data/db.json --port 5000
const ProjectsList = () => {

    const [projects, setProjects] = useState([]);
//const date = moment('2018-10-03T05:00:00.000+0000');
//
// console.log(date.format('MMM-DD-YYYY'));

    useEffect(() => {
        async function getProjects() {
            fetch('http://localhost:5000/projects')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setProjects(data)
                })
        }

        getProjects();
    }, [])
    return (
        <Container maxWidth="lg">
            <Grid container >
                <Grid item xs={12}>
                    <Typography variant={"h3"}>Header</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper} sx={{marginTop:2}}>
                        <Table sx={{ minWidth: 700}} aria-label="contacts table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>End Bid Date</TableCell>
                                    <TableCell>Project Owner</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <>{projects.map(el => <Project key={el.id} project={el}/>)}</>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProjectsList;
