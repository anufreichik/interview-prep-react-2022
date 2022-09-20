import React, {useEffect, useState} from 'react';
import {addressesData} from "./addressesData";
import AddressTableRow from "./AddressTableRow";
import './addressbook.css';

function AddressBook(){
    const [addresses, setAddresses] = useState([]);
    const [paged, setPaged] = useState([])
    const [page,setPage]=useState(1);

    const PAGE_SIZE = 5;
    const addressApiService =()=>{
        return new Promise((resolve,reject)=>{
            resolve(addressesData);
        });
    }

    const handlePrev=()=>{
        setPage(prev=>prev-1);
    }
    const handleNext=()=>{
        setPage(prev=>prev+1);
    }
    useEffect(()=>{
        addressApiService().then(data=> {
            setAddresses(data);
        });
    },[])

    useEffect(()=>{
        //0-4, 5-9
        let start = (page-1)*PAGE_SIZE;
        let end = start+PAGE_SIZE;
        let pagedAddr = addresses.slice(start, end);

        setPaged(pagedAddr);
    },[page, addresses])

  return(
      <div className='container'>
          <h3>Address Book</h3>
          <table>
              <thead>
              <tr>
                  <th>id</th>
                  <th>Address</th>
                  <th>Zip</th>
                  <th>Contact</th>
                  <th>Customer Email</th>
              </tr>

              </thead>
              <tbody>
              {
                  paged.map(el=><AddressTableRow rowData={el} key={el.id}/>)
              }
              </tbody>
          </table>
          <div className='pagination'>
              <button onClick={handlePrev} disabled={page===1}>Prev</button>
              <span>{`Current Page: ${page}`}</span>
              <button onClick={handleNext} disabled={page===addresses.length/PAGE_SIZE -1}>Next</button>
          </div>
      </div>
  )
}
export default AddressBook;
