import React, { useEffect } from 'react'
import styled from 'styled-components'

const TileGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: auto;
    width: 100%;
    background: red;
`

const StyledTile = styled.div`
    display: inline-block;
    width: 25%;
`

const UserFavoritesDetail = ((props) => {
    const { user } = props;
    const favTiles = user.favorites.map(fav => {
            return (
            <StyledTile id={fav.market_fmid} key={fav.market_fmid}>{fav.market_fmid}</StyledTile>
            )
        })

    return (
        <TileGridWrapper>
            {favTiles}
        </TileGridWrapper>
    )
});

export default UserFavoritesDetail;