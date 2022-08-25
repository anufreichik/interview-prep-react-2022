import React, {useEffect, useState} from 'react';
const FormattedDate=({inputDate,format})=>{
    const [formattedDate, setFormattedDate] = useState('');
    function formatFromDate(){
        let d = inputDate.getDate();
        let m = inputDate.getMonth()+1;
        let y = inputDate.getFullYear();

        switch(format){
            case 'MM-DD-YYYY':
                return `${m<10?'0'+m:m}-${d<10?'0'+d:d}-${y}`;
            case 'DD-MM-YYYY':
                return `${d<10?'0'+d:d}-${m<10?'0'+m:m}-${y}`;
            default:
                return `${m<10?'0'+m:m}-${d<10?'0'+d:d}-${y}`;
        }
    }
    useEffect(()=>{
            const newDate = formatFromDate()
            setFormattedDate(newDate);
    },[inputDate,format])

    return(
        <span>
            {formattedDate}
        </span>
    )

}
export default FormattedDate;
