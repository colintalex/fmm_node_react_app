import { useState, useEffect } from 'react'
import axios from 'axios'

export const getNearbyMarkets = params => {
    const [markets, setMarkets] = useState();

    useEffect(() => {
        axios.post("http://localhost:5000/", {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        query: `query($lat: Float!, $lng: Float!, $radius: Int!, $products: [String!] $date: String!){ marketsByCoords(lat: $lat, lng: $lng, radius: $radius, products: $products, date: $date ) { 
                location 
                markets {
                fmid 
                marketname
                latitude
                longitude
                website
                distance
                seasonDates
                street
                city
                state
                zip
                products {
                    name
                }
                }
            }
        }`,
        variables: {
            lat: params.lat,
            lng: params.lng,
            radius: (params.zoom < 8 ? 300 : 150),
            products: [],
            date: ""
        }
        })
        .then(resp => {
            setMarkets(resp.data.data.marketsByCoords.markets);
            // setLocation(resp.data.data.marketsByCoords.location);
        })
        .catch(err => console.log(err))
    }, [markets])

    return markets;

};
