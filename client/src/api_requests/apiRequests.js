import axios from 'axios'

const useMarketsByCoords = ((lat, lng, searchProducts, searchDate) => {
    axios.post("https://find-my-market-cta.herokuapp.com/", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            query: `query($lat: Float!, $lng: Float!, $radius: Int!, $products: [String!] $date: String!){ marketsByCoords(lat: $lat, lng: $lng, radius: $radius, products: $products, date: $date ) { 
                    location 
                    markets {
                    id
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
                lat: lat,
                lng: lng,
                radius: (200),
                products: searchProducts,
                date: searchDate
            }
            })
            
})

export default useMarketsByCoords