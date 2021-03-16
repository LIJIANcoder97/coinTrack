
import React, { useContext, useEffect, useState } from 'react';
import coinGecko from "../apis/coinGecko"
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';
const CoinList = () =>{
    const [coins,setCoins] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const {watchList,deleteCoin} = useContext(WatchListContext);
    useEffect(() => {
        //React Hooks 机制
        console.log("coinlist-getdta");
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coinGecko.get("/coins/markets",{
                params:{
                    vs_currency: "cny",
                    ids: watchList.join(","),

                },
            });
            setCoins(response.data);
            setIsLoading(false);
        };
        if(watchList.length > 0) fetchData();
        else setCoins([]);
        
    },[watchList]);

    const renderCoins = () => {
        if (isLoading) {
            return <div>加载中...</div>
        }
        return (
            <ul className="coinlist list-group mt-2">
                {coins.map((coin) => {
                   return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>
                })}
            </ul>
        )
    }
    return (
        <div>
           {renderCoins()}
        </div>
    )
}

export default CoinList