import React from 'react'
import styled from 'styled-components'
import UserDetailPane from './UserDetailPane';


const StyledDetailPane = styled.div`
    height: auto;
    margin: 15px;
    background-color: #38A3A5;
    padding: 0 10px;
    border: 1px solid #888;
    border-radius: 20px;
    box-shadow: -2px 4px 10px #333;
    width: 40vw;
    margin-left: auto;
    `
    // #38A3A5
    // darker ^ #2c8385

    // magenta shade EF8275
    const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 22%;
    background: rgb(161,89,81);
    background: linear-gradient(0deg, rgba(161,89,81,1) 0%, rgba(239,130,117,1) 100%);

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