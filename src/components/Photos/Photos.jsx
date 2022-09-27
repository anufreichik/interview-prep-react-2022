import React , {useState, useEffect} from 'react';
import './photos.css'
import Photo from "./Photo";
//Api
// allImagesApi - [
//     {link : imageURl1, id:1, title: image1 tags:[nature, bird]},
//     {link : imageURl2, id:2, title: image12, tags:[nature], }],
// ]
// ImageByIdAPI = {id:1, title: image1,toTake: "Date format" content: blabla, }
// display all images in UI that could filter based on tags (which are again dynamic in nature ).
// And on click on any image model should display image title and image and date in MM/DD/YY format.
const Photos = () => {
    const allPhotos=[
        {id:1, link:'https://source.unsplash.com/random/300×300?fruit', title:'image 1', tags:['food', 'fruit']},
        {id:2,link:'https://source.unsplash.com/random/300×300?car', title:'image 2', tags:['cars', 'transportation']},
        {id:3,link:'https://source.unsplash.com/random/300×300?fruit', title:'image 3', tags:['food']},
        {id:4,link:'https://source.unsplash.com/random/300×300?city', title:'image 4', tags:['city']},
        {id:5,link:'https://source.unsplash.com/random/300×300?car', title:'image 5', tags:['cars']},
        {id:6,link:'https://source.unsplash.com/random/300×300?dog', title:'image 5', tags:['animal', 'dog']},
        {id:7,link:'https://source.unsplash.com/random/300×300?animal', title:'image 5', tags:['animal']},
        {id:8,link:'https://source.unsplash.com/random/300×300?car', title:'image 5', tags:['cars']},
    ]

    const photosDetail=[
        {id:1, title: 'image1',toTake: "2011-04-23T18:25:43.511Z", content: 'blabla', },
        {id:2, title: 'image2',toTake: "2012-04-23T18:25:43.511Z", content: 'blabla', },
        {id:3, title: 'image3',toTake: "2013-04-23T18:25:43.511Z", content: 'blabla', },
        {id:4, title: 'image4',toTake: "2014-04-23T18:25:43.511Z", content: 'blabla', },
        {id:5, title: 'image5',toTake: "2015-04-23T18:25:43.511Z", content: 'blabla', },
        {id:6, title: 'image6',toTake: "2016-04-23T18:25:43.511Z", content: 'blabla', },
        {id:7, title: 'image7',toTake: "2017-04-23T18:25:43.511Z", content: 'blabla', },
        {id:8, title: 'image8',toTake: "2018-04-23T18:25:43.511Z", content: 'blabla', },

    ]


    const [photos, setPhotos]  = useState([]);
    const [filtered, setFiltered]  = useState([]);
    const [tags, setTags] = useState('');


    const allImagesAPI=()=>{
        return new Promise((resolve, reject)=>{
            resolve(allPhotos);
        })
    }

    const getPhotoByIdAPI=(id)=>{
        return new Promise((resolve, reject)=>{
            resolve( photosDetail.filter(el=>el.id===id)[0]);
        })
    }

    const filterByTag=()=>{
        let arrTags = tags.split(',').map(el=>el.trim())

        if(arrTags)
        {
            const newPhotos = photos.filter(el=>{
                const b =  el.tags.some(tag=> {
                    return arrTags.includes(tag)
                });
                return b;
            })

            setFiltered(newPhotos);
        }

    }


    useEffect( ()=>{
        async function fetchData() {
            // You can await here
            const response = await allImagesAPI();
            setPhotos(response);
            setFiltered(response);
        }
        fetchData();
    },[])


    return (
        <div className='container'>

                <div className='search-container'>
                    <input type='text' value={tags} onChange={(e)=>setTags(e.target.value)}/>
                    <button onClick={filterByTag}>Submit</button>
                </div>


            <div className='photos-grid'>
                {filtered.map(el=><Photo data={el} key={el.id} getPhotoDetails={getPhotoByIdAPI}/>)}
            </div>

        </div>
    );
};

export default Photos;
