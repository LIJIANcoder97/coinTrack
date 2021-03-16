import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CoinData from '../components/CoinData';
import HistoryChart from '../components/HistoryChart';
import coinGecko from "../apis/coinGecko"
const CoinDetailPage = () =>{
    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(false);
    const [coinData,setCoinData] = useState([]);

    const formatData = (data)=>{
        return data.map((el)=>{
            return {
                t:el[0],
                y:el[1].toFixed(4),
            }
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [day,week,year,detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart/`,{
                    params:{
                        vs_currency: "cny",
                        days: "1"
    
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`,{
                    params:{
                        vs_currency: "cny",
                        days: "7"
    
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`,{
                    params:{
                        vs_currency: "cny",
                        days: "365"
    
                    },
                }),
                coinGecko.get("/coins/markets",{
                    params:{
                        vs_currency: "cny",
                        ids: id   
                    },
                })
            ]);
            setCoinData({
                day:formatData(day.data.prices),
                week:formatData(week.data.prices),
                year:formatData(year.data.prices),
                detail:detail.data[0],
            });
            
        }
        fetchData();
        setIsLoading(false);
    });
    if(isLoading) return <div>加载中...</div>
    else return (
        <div className="coinList">
           <HistoryChart data={coinData}/>
           <CoinData data={coinData.detail}/>
        </div>
       )
}

export default CoinDetailPage