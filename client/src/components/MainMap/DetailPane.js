import React from 'react'
import styled from 'styled-components'

const StyledDetailPane = styled.div`
    padding-left: 15px;
`

const DetailPane = ((params) => {
    console.log(params)
    if(params.currentMarket){
        return (
            <StyledDetailPane>
                <h3>{params.currentMarket.marketname}</h3>
                <h4>{params.currentMarket.street}<br/>{params.currentMarket.city}, {params.currentMarket.state}</h4>
                <h5>{params.currentMarket.seasonDates}</h5>
                <a href={params.currentMarket.website}>Website</a>
            </StyledDetailPane>
        )
    }else {
        return (
            <div>

            </div>
        )
    }

    
})

export default DetailPane;