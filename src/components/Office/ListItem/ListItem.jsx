import React, {useEffect, useState} from 'react';
import './listitem.css';

const ListItem = ({room, handleTimeSelector,roomsSchedule}) => {
    const arr = [
        {val:8, display: "8:00AM"},
        {val:9, display: "9:00AM"},
        {val:10, display: "10:00AM"},
        {val:11, display: "11:00AM"},
        {val:12, display: "12:00PM"},
        {val:13, display: "1:00PM"},
        {val:14, display: "2:00PM"},
        {val:15, display: "3:00PM"},
        {val:16, display: "4:00PM"},
        {val:17, display: "5:00PM"},
        {val:18, display: "6:00PM"},
        {val:19, display: "7:00PM"},
        {val:20, display: "8:00PM"},
    ];
    const [busyHours, setBusyHours] = useState([]);

    useEffect(() => {
        let hrs =  roomsSchedule?.filter(el=>el.roomId===room.id)[0].hours;
       setBusyHours(hrs);
    }, [roomsSchedule]);

const handleSchedulerButtonClick=(timeVal, room)=>{
    handleTimeSelector(timeVal,room);
}



    return (
        <div className="officeListItemContainer">
            <div className="officeListItemInfo">
                <div className="officeListItem">
                    {room.buildingName}
                </div>
                <div className="officeListItem">
                    Floor: {room.floorId}
                </div>
                <div className="officeListItem">
                    {room.roomName}
                </div>
            </div>
            <div className="officeSchedulerItemsContainer">
                {arr.map((t, idx) => {
                    return (
                        <button
                            key={idx}
                            id={idx}
                            type="button"
                            className={`scheduler-button ${busyHours.includes(t.val)? 'busy':''}`}
                            disabled={busyHours.includes(t.val)}
                            onClick={() => handleSchedulerButtonClick(t.val, room.id)}
                        >
                            {t.display}
                        </button>
                    );
                })}
            </div>

        </div>
    );
};

export default ListItem;
