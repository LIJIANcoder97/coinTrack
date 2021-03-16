import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({coin,deleteCoin}) =>{
    return (
        <Link to={"/coins/"+coin.id} className="text-decoration-none my-1 coin">
           <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
               <img className="coinlist-image" src={coin.image}></img>
               <span className="text-decoration-none">CNY {coin.current_price.toFixed(3)}</span>
               <span className= {coin.price_change_percentage_24h <0 ? "text-success mr-2" : "text-danger mr-2"}>
                   {coin.price_change_percentage_24h.toFixed(2)}%
               </span>
               <span onClick={(e)=> {
                   e.preventDefault();
                   deleteCoin(coin.id);
               }} className="delete-icon  text-danger ">Del</span>
           </li>
        </Link>
    )
}

export default Coin