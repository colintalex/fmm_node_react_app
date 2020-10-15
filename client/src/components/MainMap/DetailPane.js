import React from 'react'

const DetailPane = ((params) => {
    if(params.currentMarket){
        return (
            <div>
                {params.currentMarket.marketname}<br/>
                {params.currentMarket.city}<br/>
                {params.currentMarket.state}<br/>
                <a href={params.currentMarket.website}>Website</a>
            </div>
        )
    }else {
        return (
            <div>

            </div>
        )
    }

    
})

export default DetailPane;