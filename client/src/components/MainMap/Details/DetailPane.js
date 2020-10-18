import axios from 'axios';
import { debug } from 'dotenv/lib/env-options';
import React from 'react'
import styled from 'styled-components'
import UserDetailPane from './UserDetailPane';
import MarketDetailPane from './MarketDetailPane'



    // #38A3A5
    // darker ^ #2c8385

    // magenta shade EF8275
    const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 20vh;
    padding-bottom: 50px;
    background: rgb(203,104,93);
    background: linear-gradient(177deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);

    h3, h4, h5{
        margin: 8px;
    }
`

const FavDiv = styled.div`
    width: 10px;
    height: 10px;
    background: red;
`
// NOTE-- Add custom icons for types of products

const DetailPane = (({ currentMarket, currentUser, handleUserFavorites, handleUser }) => {
    const detailUser = currentUser
    const _onSubmit = ((data) => {
      
    })

    return (
        <DetailWrapper>
            <MarketDetailPane
                currentMarket={currentMarket}
                currentUser={currentUser}
                handleUserFavorites={handleUserFavorites}
            />
            <UserDetailPane 
                currentUser={currentUser}
                handleUser={handleUser}
            />
        </DetailWrapper>
    )
});

export default DetailPane;