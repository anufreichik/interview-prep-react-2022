import React, {useEffect, useState} from 'react';
import './Seats.css'
const Seats = () => {
    const [seats,setSeats] =useState([]);
    let rows = 5;
    let cols = 8;

    useEffect(() => {

        let initialSeats=[];
        let id=1;
        for(let i=1;i<=rows;i++){
            for(let j=1;j<=cols;j++){
                let seat = {id:id, row:i, col:j,status:1 }
                initialSeats.push(seat);
                id++;
            }
        }
        setSeats(initialSeats);
    }, []);

    const handleSeatClick=(id)=>{
        let updateState = false;
        const updatedSeats=seats.map(el=>{
            if(el.id===id && el.status!==3) {
                updateState=true;
                return {...el, status: el.status===1?2:1}
            }
            else return el;
        })
        if(updateState) setSeats(updatedSeats);

    }
    return (
        <div>
            {
                Array(rows).fill(null).map((row,index)=>{
                   return(
                        <div className='row' key={index}>
                            {seats.filter(s=>s.row===index+1).map((el,i)=>{
                                return(
                                    <div className={`seat ${el.status===1?'':el.status===2?'selected':'occupied'}`} key={el.id}
                                         onClick={()=>handleSeatClick(el.id)}></div>
                                )
                            })}
                        </div>
                   )
                })
            }

            <p className="text">
                You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
            </p>
        </div>
    );
};

export default Seats;
