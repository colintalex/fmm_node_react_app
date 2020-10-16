import React from 'react'
import styled from 'styled-components'
import UserDetailPane from './UserDetailPane';


const StyledDetailPane = styled.div`
    height: auto%;
    margin: 10px;
    background-color: #38A3A5;
    padding: 0 10px;
    border-radius: 20px;
    box-shadow: -1px 4px 8px black;
    `
    // #38A3A5
    // darker ^ #2c8385

    // magenta shade EF8275
    const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 22%;
    background-color: #ef8275;

    h3, h4, h5{
        margin: 8px;
    }
`

const DetailPane = ((params) => {
    if(params.currentMarket){
        return (
            <DetailWrapper>
                <StyledDetailPane>
                    <h3>{params.currentMarket.marketname}</h3>
                    <h4>{params.currentMarket.street}<br/>{params.currentMarket.city}, {params.currentMarket.state}</h4>
                    <h5>{params.currentMarket.seasonDates}</h5>
                    <a href={params.currentMarket.website}>Website</a>
                    <p>Placeholder for More Info Modal</p>
                </StyledDetailPane>
                <UserDetailPane 
                    currentUser={params.currentUser}
                />
            </DetailWrapper>
        )
    }else {
        return (
            <DetailWrapper>
                <StyledDetailPane>
                    <h3>marketname</h3>
                    <h4>Market address</h4>
                    <h5>Season Dates</h5>
                </StyledDetailPane>
                <UserDetailPane 
                    currentUser={params.currentUser}
                />
            </DetailWrapper>
        )
    }

    
})

export default DetailPane;