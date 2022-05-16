import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent,  DialogTitle, TextField} from "@mui/material";
import { nanoid } from 'nanoid';
const BidForm = ({open, setOpen, projectid}) => {
    const [bidPrice, setBidPrice] =useState(0);
    const handleSubmit = () => {

        fetch('http://localhost:5000/bids/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id:nanoid(), projectid:projectid, bidPrice:bidPrice, bidderid:1})
        }).then(() => {
            setOpen(false);
        })
    }
    return (
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Bid Price"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>setBidPrice(+e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
                <Button onClick={()=>handleSubmit()}>Create Bid</Button>
            </DialogActions>
        </Dialog>
    );
};

export default BidForm;
