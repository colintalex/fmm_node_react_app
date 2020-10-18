import React, { useEffect, useState } from 'react'
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
    text-align: center;
    `

const StyledMarketButton = styled.button`
    width: auto;
    height: 30px;
    opacity: 95%;
    font-size: 14px;
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    border: 3px solid #38A3A5;
    border-radius: 20px;
`

const MarketDetailPane = (({ currentMarket, currentUser, handleUserFavorites }) => {
    const [favoriteDisplay, setFavoriteDisplay] = useState(true);


    useEffect(() => {
        if(currentUser.user && currentMarket){
            let fav = currentUser.user.favorites.find(fav => parseInt(fav.fmid) === currentMarket.market.fmid)
            if(fav === undefined) {
                setFavoriteDisplay(true)
            }else{
                setFavoriteDisplay(false)
            }
        }
    }, [currentMarket, currentUser])

    if(currentMarket){
    return (
        <StyledDetailPane>
            <h3>{currentMarket.market.marketname} / {currentMarket.market.city}, {currentMarket.market.state}</h3>
            <h4>{currentMarket.market.street}</h4>
            <h5>{currentMarket.market.seasonDates}</h5>
            <StyledMarketButton href=''>Website</StyledMarketButton>
            { currentUser.user && favoriteDisplay && <StyledMarketButton onClick={() => handleUserFavorites({action: 'add',market: currentMarket.market, user: currentUser})}>Favorite</StyledMarketButton>}
            { currentUser.user && !favoriteDisplay && <StyledMarketButton onClick={() => handleUserFavorites({action: 'remove',market: currentMarket.market, user: currentUser})}>Un-Favorite</StyledMarketButton>}
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