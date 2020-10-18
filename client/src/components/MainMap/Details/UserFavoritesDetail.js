import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TileGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    width: 100%;
    background: red;
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

const StyledTile = styled.div`
    display: inline-block;
    width: 100%;
    height: 125px;
    justify-content: center;
`

const UserFavoritesDetail = (({ currentUser, handleUserFavorites, handleMarketGoTo }) => {
    const [favTiles, setFavTiles] = useState([]);


    useEffect(() => {
        const favTiles = currentUser.user.favorites.map(fav => {
            console.log(fav)
            return (
                    <StyledTile id={fav.fmid} key={fav.fmid}>
                        <h5>{fav.marketname}</h5>
                        <p>{fav.city}</p>
                        <StyledMarketButton onClick={() => handleUserFavorites({action: 'remove',market: fav, user: currentUser})}>Un-Fav</StyledMarketButton>
                        <StyledMarketButton onClick={() => handleMarketGoTo({market: fav})}>Go to me!</StyledMarketButton>
                    </StyledTile>
            )
        })
        setFavTiles(favTiles)
    }, [currentUser])
    return (
        <TileGridWrapper>
            {favTiles}
        </TileGridWrapper>
    )
});

export default UserFavoritesDetail;