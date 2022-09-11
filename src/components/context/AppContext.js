import React,{useState, createContext} from 'react';

export const AppContext = createContext(null)


const AppContextProvider=({children})=>{
    const [userInfo, setUserInfo]=useState(null);
    const [isAuth, setIsAuth] = useState(false);


    const login=()=>{
        //call api maybe here
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then((json) => {
                setUserInfo(json);
                console.log(json)
                setIsAuth(true)
            })

    }

    const logout=()=>{
        setUserInfo(null);
        setIsAuth(false)
    }

    const value={
        userInfo,
        isAuth,
        setUserInfo,
        setIsAuth,
        login,
        logout
    }


    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}
export default AppContextProvider;
