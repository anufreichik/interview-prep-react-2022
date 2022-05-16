import React, {useState} from 'react';
import {Button,  TableCell, TableRow, Typography} from "@mui/material";
import moment from "moment";
import BidForm from "./CreateBidForm";

const Project = ({project}) => {
    const [open, setOpen] =useState(false);
    const toggleModal=()=>{
        setOpen(!open);
    }
    function isBidEnded(date){
        let a = moment(date);//end bid date
        let b = moment();//now
        return b.diff(a) <0;
    }
    return (

                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell>{project.title}</TableCell>
                            <TableCell>{project.description}</TableCell>
                            <TableCell>
                                <Typography variant="body2" component="div">
                                   <> {moment(project.lastBidDate).format('MM-DD-YYYY h:mm:ss a')}</>
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" component="div">
                                   Bill Smith
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    onClick={()=>toggleModal()}
                                    disabled={isBidEnded(project.lastBidDate)}
                                    size="small"
                                    variant={'outlined'}
                                    sx={{
                                        borderRadius: 0,
                                    }}
                                >Bid</Button>
                                <BidForm open={open} setOpen={setOpen} projectid={project.id}/>
                            </TableCell>
                        </TableRow>



    );
};

export default Project;
