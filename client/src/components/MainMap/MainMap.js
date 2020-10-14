import React, { useEffect, useState } from 'react';
import GoogleMap from 'google-map-react'
import Sidebar from 'react-sidebar';
import axios from 'axios'
import styled from 'styled-components'
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Redirect } from 'react-router-dom';

const MapWrapper = styled.div`
    height: 80vh;
    width: 100%;
`

const Marker = styled.div`
    position: 'absolute',
    width: 20px;
    height: 20px;
    top: 20px;
    left: 20px;

    border: '5px solid #f44336';
    borderRadius: 1px;
    backgroundColor: 'white';
    textAlign: 'center';
    color: '#3f51b5';
    fontSize: 16;
    fontWeight: 'bold';
    padding: 4;
`
const MyGreatPlace = (props) => {
    return (
        <Marker>
            
        </Marker>
    );
}


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
            radius: 50,
            products: [],
            date: ""
        }
        })
        .then(resp => {
            setMarkets(resp.data.data.marketsByCoords.markets);
            // setLocation(resp.data.data.marketsByCoords.location);
        })
        .catch(err => console.log(err))
    }, [lat, lng]);

    useEffect(() => {
        setMarks(markets.map((market) => {
            const { latitude, longitude, fmid } = market;

            return (
                <div key={fmid} lat={latitude} lng={longitude} style={{color: 'red', height: '20px', backgroundColor: 'red', width: '20px',}}/>
            )
        }))
    }, [markets]);

    const _onChange = ((data) => {
        setCenter(data.center);
        setLat(data.center.lat);
        setLng(data.center.lng);
    });

    return (
        <div>
            <Sidebar
                sidebar={<b>Login to view favorites</b>}
                docked='true'
                styles={{ sidebar: { background: "white" } }}
            />
            <MapWrapper>
                <GoogleMap
                bootstrapURLKeys={{ key: 'AIzaSyC9D6rE1m0f2aAKVCYWfWoIuHNNRcr-dvE'}}
                center={center}
                defaultZoom={zoom}
                onChange={_onChange}
                >
                    {marks}
                </GoogleMap>
            </MapWrapper>
        </div>    
    );
}

export default MainMap;