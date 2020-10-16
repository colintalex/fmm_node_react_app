import React from 'react'
import axios from 'axios'
import FavoriteComponent from './FavoriteComponent'
import styled from 'styled-components'

const StyledDetailPane = styled.div`
    height: auto;
    margin: 15px;
    background: rgb(56,163,165);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
    padding: 0 10px;
    border: 1px solid #888;
    border-radius: 20px;
    box-shadow: -2px 4px 10px #333;
    width: 40vw;
    margin-left: auto;
    `

const MarketDetailPane = ((props) => {
    let { currentMarket, handleUser, currentUser } = props;

    const handleFavUpdate = ((data) => {
       
    })

    if(currentMarket){
    return (
        <StyledDetailPane>
            <h3>{currentMarket.marketname}</h3>
            <h4>{currentMarket.street}<br/>{currentMarket.city}, {currentMarket.state}</h4>
            <h5>{currentMarket.seasonDates}</h5>
            <a href=''>Website</a>
            <button onClick={() => handleUser(props)} value={props}>Fav</button>
        </StyledDetailPane>
    )} else {
        return (
        <StyledDetailPane>
            <h3>Select a Market To See More Info</h3>
            <h4>You can find address, products-sold, or visit their website!</h4>
            <h4>You can even check scheduled open dates!</h4>
        </StyledDetailPane>
        )
    }
});

export default MarketDetailPane;