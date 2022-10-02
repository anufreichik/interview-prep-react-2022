import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AutocompleteFromAPI = () => {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        async function LoadUsers() {
            const response = await axios.get('https://reqres.in/api/users');
            console.log(response.data.data)
            setUsers(response.data.data);
        }

        LoadUsers();

    }, []);

    const debounce=(fn, delay)=>{
        let timer=null;
        return function(...args){
            if(timer)clearTimeout(timer);
            timer = setTimeout(()=>{
                fn(...args);
            },delay)
        }
    }

    const changeWithDebounce = debounce((e)=> {
        handleOnChange(e.target.value)
    },500)

    const handleOnChange = (val) => {
        let matches = []
        if (val.length > 0) {
            matches = users.filter(el => {
                const regex = new RegExp(`${text}`, "gi");
                return el.email.match(regex);
                //return el.email.toLowerCase().indexOf(val)>=0
            })
        }
        setSuggestions(matches);
        setText(val);
    }




    const suggestOnClick = (text) => {
        setText(text);
        setSuggestions([]);
    }
    const handleInputBlur = () => {
        setTimeout(() => {
            setSuggestions([])
        }, 200)
    }
    return (
        <div>
            <input type="text"
                   onChange={changeWithDebounce}
                   value={text}
                   onBlur={handleInputBlur}
            />
            <div>
                {suggestions && suggestions.map((el, ind) => <div key={ind}
                                                                  onClick={() => suggestOnClick(el.email)}>{el.email}</div>)}
            </div>
        </div>
    )
}
export default AutocompleteFromAPI;
