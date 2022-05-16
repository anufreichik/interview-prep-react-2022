export const officeBuildings=[
    {buildingId:1, name:"East Campus", floors:[2,3],},
    {buildingId:2, name:"West Campus", floors:[1]},
    {buildingId:3, name:"Main Campus", floors:[2,3,5]},
]

export const officeRooms=[
    {id: 1, buildingId:1, buildingName:'East Campus', floorId:2, roomName: 'Sunset'},
    {id: 2, buildingId:1, buildingName:'East Campus', floorId:2, roomName: 'Big Table'},
    {id: 3, buildingId:1, buildingName:'East Campus', floorId:3, roomName: 'California'},
    {id: 4, buildingId:2, buildingName:'West Campus', floorId:1, roomName: 'Blue Ocean'},
    {id: 5, buildingId:3, buildingName:'Main Campus', floorId:2, roomName: 'Blue Room'},
    {id: 6, buildingId:3, buildingName:'Main Campus', floorId:3, roomName: 'Green Room'},
    {id: 7, buildingId:3, buildingName:'Main Campus', floorId:5, roomName: 'Purple Room'},
]

export const scheduled=[
    {roomId:1, hours:[8,10,12,14]},
    {roomId:2, hours:[]},
    {roomId:3, hours:[]},
    {roomId:4, hours:[]},
    {roomId:5, hours:[8,9,10,12,16,17,18]},
    {roomId:6, hours:[11,14,15]},
    {roomId:7, hours:[]},
]
