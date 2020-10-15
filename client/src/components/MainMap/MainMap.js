import React, { useEffect, useState } from 'react';
import GoogleMap from 'google-map-react'
import Sidebar from 'react-sidebar';
import axios from 'axios'
import styled from 'styled-components'

const MapWrapper = styled.div`
    height: 80vh;
    width: 100%;
`

const Marker = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: -40px;
    left: -15px;

`



const MainMap = () => {
    const [center, setCenter] = useState({lat: 39.741667, lng: -104.978649});
    const [lat, setLat] = useState(39.741667);
    const [lng, setLng] = useState(-104.978649);
    const [markets, setMarkets] = useState([]);
    const [zoom, setZoom] = useState(11);
    const [marks, setMarks] = useState([]);

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
            lat: lat,
            lng: lng,
            radius: (200),
            products: [],
            date: ""
        }
        })
        .then(resp => {
            setMarkets(resp.data.data.marketsByCoords.markets);
            // setLocation(resp.data.data.marketsByCoords.location);
        })
        .catch(err => console.log(err))

    }, [center, lat, lng, zoom]);

    useEffect(() => {
        setMarks(markets.map((market) => {
            const { latitude, longitude, fmid } = market;

            return (
                <Marker key={fmid} lat={latitude} lng={longitude}>
                    <img height='40px' src='https://raw.githubusercontent.com/tylerpporter/find_my_market_fe/master/assets/FMM_icon_no_border.png'/>
                </Marker>
            )
        }))
    }, [center, markets])


    const _onChange = ((data) => {
        console.log(data.center);
        setCenter(data.center);
        setLat(data.center.lat);
        setLng(data.center.lng);
        setZoom(data.zoom)
    });

    const _onChildMouseEnter = ((data) => {
        console.log('enter')
        console.log(data)
    })

    const _onChildMouseLeave = ((data) => {
        console.log('leave')
        console.log(data)
    })

    return (
        <div>
            <Sidebar
                sidebar={<b>Login to view favorites</b>}
                docked={true}
                styles={{ sidebar: { background: "white" } }}
                children=''
            />
            <MapWrapper>
                <GoogleMap
                bootstrapURLKeys={{ key: 'AIzaSyC9D6rE1m0f2aAKVCYWfWoIuHNNRcr-dvE'}}
                center={center}
                zoom={zoom}
                onChange={_onChange}
                onChildMouseEnter={_onChildMouseEnter}
                onChildMouseLeave={_onChildMouseLeave}
                >
                    {marks}
                </GoogleMap>
            </MapWrapper>
        </div>    
    );
}

export default MainMap;