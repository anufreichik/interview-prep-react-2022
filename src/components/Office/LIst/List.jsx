import React,{useEffect, useState} from 'react';
import './list.css';
import ListItem from "../ListItem/ListItem";
import {officeBuildings, officeRooms, scheduled}  from './rooms';

const List = () => {

    const [filteredRooms, setFilteredRooms] = useState(officeRooms);
    const [buildings, setBuildings]=useState([]);
    const [floors, setFloors]=useState([]);
    const [rooms, setRooms]=useState([]);
    const [roomsSchedule, setRoomsSchedule] =useState(scheduled);

    const [selected, setSelected]=useState({
        buildingId:'',
        floorId:'',
        roomId:''
    });

    useEffect(() => {
        let buildingsList = officeBuildings.map(el=> {
            return {buildingId: el.buildingId, name:el.name}
        })
       setBuildings(buildingsList);
    }, []);

    const clearSelection = ()=>{
        setSelected({
            buildingId:'',
            floorId:'',
            roomId:''
        })
    }
    // const isSubmitButtonDisabled=()=>{
    //     return selected?.buildingId === '' || selected?.floorId === '' || selected?.roomId === '';
    // }
    const handleSelectBuilding=(e)=>{
        clearSelection();
        let selectedBuildingId = e.target.value;
       if(selectedBuildingId){
           setSelected({...selected, buildingId:selectedBuildingId});
           let floors = officeBuildings.filter(el=>el.buildingId==selectedBuildingId)[0]?.floors;
           setFloors(floors);
       }

    }
    const handleFloorSelect=(e)=>{
        let selectedFloor = e.target.value;
        if(selectedFloor){
            setSelected({...selected, floorId:selectedFloor});
            let rooms = officeRooms.filter(el=>el.buildingId==selected.buildingId && el.floorId==selectedFloor);
            setRooms(rooms);
        }

    }
    const handleRoomSelect=(e)=>{
        let selectedRoom = e.target.value;
        if(selectedRoom){
            setSelected({...selected, roomId: selectedRoom});
        }
    }

    const searchAvailableRooms=()=>{
        let filtered=[];
        if(selected.buildingId){
            filtered = officeRooms.filter(el=>el.buildingId==selected.buildingId);
        }
         if(selected.floorId){
            filtered = filtered.filter(el=>el.floorId==selected.floorId);
        }
         if(selected.roomId){
             filtered=filtered.filter(el=>el.id==selected.roomId);
         }
        if(filtered.length) setFilteredRooms(filtered);
        else setFilteredRooms(officeRooms);

    }
    const handleTimeSelector=(time, roomId)=>{
        let newRoomSchedule = roomsSchedule.map(el=>{
            if(el.roomId===roomId) {
                el.hours.includes(time)?el.hours.splice(el.hours.indexOf(time),1):el.hours.push(time);
            }
             return el;
        })
        setRoomsSchedule(newRoomSchedule);
    }
    return (
        <div className="listContainer">
            <div className="listWrapper">
                <div className="SearchContainer">
                    <div className="searchItem">
                        <label>Select Building</label>
                       <select  onChange={(event) => handleSelectBuilding(event)} value={selected.buildingId}>
                           <option value="">Select Building</option>
                           {
                               buildings.map(el=><option key={`b-${el.buildingId}`} value={el.buildingId}>{el.name}</option>)
                           }
                       </select>
                    </div>
                    <div className="searchItem">
                        <label>Select Floor</label>
                        <select  onChange={(event) => handleFloorSelect(event)} value={selected.floorId}
                                 disabled={selected.buildingId===''}>
                            <option value="">Select Floor</option>
                            {
                                floors.map(el=> <option  key={`f-${el}`} value={el}>{`Floor - ${el}`}</option>)
                            }
                        </select>
                    </div>
                    <div className="searchItem">
                        <label>Select Room</label>
                        <select onChange={(event)=>handleRoomSelect(event)} value={selected.roomId}
                        disabled={selected.buildingId==='' || selected.floorId===''}>
                            <option value="">Select Room</option>
                            {
                                rooms.map(el=> <option  key={`r-${el.id}`} value={el.id}>{el.roomName}</option>)
                            }
                        </select>
                    </div>
                    <div className="searchItem">
                        <button onClick={searchAvailableRooms}>Submit</button>
                    </div>

                </div>
                <div className="listResult">
                    {filteredRooms.map(el=> <ListItem room={el} key={el.id} roomsSchedule={roomsSchedule} handleTimeSelector={handleTimeSelector}/>)}

                </div>
            </div>
        </div>
    );
};

export default List;
