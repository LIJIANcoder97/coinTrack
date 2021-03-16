import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
 import CoinDetailPage from "./pages/CoinDetailPage"
import CoinSummaryPage from "./pages/CoinSummaryPage"
import Header from "./components/Header"
import "./App.css"
import { WatchListContextProvider } from './context/watchListContext';


const App = () =>{
    console.log("start");
    return (
        <div className="container">
            <WatchListContextProvider>
            <Header/>
            <BrowserRouter>
                <Route exact path="/" component={CoinSummaryPage}/>
                <Route path="/coins/:id" component={CoinDetailPage} />
            </BrowserRouter>
            </WatchListContextProvider>
        </div>
    )
}

export default App