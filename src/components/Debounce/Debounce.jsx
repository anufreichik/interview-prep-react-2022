import React, {useState} from 'react';

const DebounceInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputValueNoDebounce, setInputValueNoDebounce] = useState('');
    const debounce = (callback, delay) => {
        let timer;
        return function (...args) {
            //check if we set timer already, clear it
            if (timer) clearTimeout(timer);
            //reset timer
            timer = setTimeout(() => {
                callback(...args);
            }, delay)

        }
    }

    const handleChangeDebounce = debounce((e) => {
        setInputValue(e.target.value)
    }, 1000)

    const handleOnchangeNoDebounce = (e) => {
        setInputValueNoDebounce(e.target.value)
    }

    return (
        <div>
            <div>
                With debounce <input onChange={handleChangeDebounce}/>
                <div>{inputValue}</div>
            </div>
            <div>
                No debounce <input onChange={handleOnchangeNoDebounce} value={inputValueNoDebounce}/>
                <div>{inputValueNoDebounce}</div>
            </div>

        </div>
    );

};

export default DebounceInput;
