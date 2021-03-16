import React, { useContext } from 'react';
import { WatchListContext } from '../context/watchListContext';
const AddCoin = () => {
    const {watchList,deleteCoin,addCoin} = useContext(WatchListContext);
    const Addcoin = (e)=>{
        if(e.keyCode == 13) {
            addCoin(e.target.value);
        }
    }
    return (
        <div className="input-group flex-nowrap">
            <input type="text" className="form-control" onKeyUp={Addcoin} placeholder="输入加密货币名，例如 bitcoin ripple litecoin" aria-label="id" aria-describedby="addon-wrapping"></input>
        </div>                      
    )
}

export default AddCoin