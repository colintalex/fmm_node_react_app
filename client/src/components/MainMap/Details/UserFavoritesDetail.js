import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TileGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    width: 100%;
    background: red;
`

const StyledTile = styled.div`
    display: inline-block;
    width: 25%;
`

const UserFavoritesDetail = (({ currentUser, handleUserFavorites, handleMarketGoTo }) => {
    const [favTiles, setFavTiles] = useState([]);


    useEffect(() => {
        const favTiles = currentUser.user.favorites.map(fav => {
            console.log(fav)
            return (
                <div>
                    <StyledTile id={fav.fmid} key={fav.fmid}>
                        <h5>{fav.marketname}</h5>
                        <p>{fav.city}</p>
                        <button onClick={() => handleUserFavorites({action: 'remove',market: fav, user: currentUser})}>Un-Fav</button>
                        <button onClick={() => handleMarketGoTo({market: fav})}>Go to me!</button>
                    </StyledTile>
                </div>
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