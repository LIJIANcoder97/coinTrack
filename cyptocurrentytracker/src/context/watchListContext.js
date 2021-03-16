import { createContext, useEffect, useState } from "react";



export const WatchListContext = createContext();

export const WatchListContextProvider = props =>{
    var defoutCoins;
    if(localStorage.getItem("watchList")){
         defoutCoins = localStorage.getItem("watchList").split(",");
    }else defoutCoins = ["bitcoin","algorand","dogecoin"];
    
    const [watchList,setWatchList] = useState(defoutCoins);
    
    useEffect(()=>{
        localStorage.setItem("watchList",watchList);
    },[watchList]);
    
    const deleteCoin = (coin) => {
        setWatchList(watchList.filter(element => {
            return element !== coin;
        }))
    };
    const addCoin = (coin) =>{
        if(watchList.indexOf(coin) == -1){
            setWatchList([...watchList,coin]);
        }
        else alert(coin+"已经被添加");
    }

    return(
        <WatchListContext.Provider value={{watchList,deleteCoin,addCoin}}>
            {props.children}
        </WatchListContext.Provider>
    );
}