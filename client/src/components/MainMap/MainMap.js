import React, { useEffect, useState } from 'react';
import GoogleMap from 'google-map-react'
import axios from 'axios'
import styled from 'styled-components'
import Marker from './Marker'
import DetailPane from './Details/DetailPane'
import SearchWrapper from './SearchWrapper'
import { useLocation, useHistory } from 'react-router-dom'
import Geocode from 'react-geocode'
const greenMarker = require('../MainMap/FMM_icon_no_border.png')
const redMarker = require('../MainMap/FMM_icon_no_border_favorites.png')

require('dotenv/config');
Geocode.setApiKey('AIzaSyC9D6rE1m0f2aAKVCYWfWoIuHNNRcr-dvE')

const MapWrapper = styled.div`
    height: 75vh;
    width: 100%;
    border: 1px solid black;
`

const WindowWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: #fff;
`

const MainMap = ({ currentUser, handleUserFavorites, handleUserLogging }) => {
    const [center, setCenter] = useState({lat: 39.741667, lng: -104.978649});
    const [lat, setLat] = useState(39.741667);
    const [lng, setLng] = useState(-104.978649);
    const [markets, setMarkets] = useState([]);
    const [zoom, setZoom] = useState(11);
    const [marks, setMarks] = useState([]);
    const [favMarks, setFavMarks] = useState([]);
    const [currentMarker, setCurrentMarkerId] = useState();
    const [currentMarket, setCurrentMarket] = useState();
    const [searchDate, setSearchDate] = useState('');
    const [searchProducts, setSearchProducts] = useState([]);


    useEffect(() => {
        axios.post("http://localhost:4000/", {
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
        .then(resp => {
            setMarkets(resp.data.data.marketsByCoords.markets);
        })
        .catch(err => console.log(err))

    }, [lat, lng]);

    useEffect(() => {
        const newMarks = markets.map((market) => {
            const { latitude, longitude, fmid, id } = market;
            return (
                <Marker 
                    key={fmid}
                    id={id}
                    lat={latitude}
                    lng={longitude}
                    zIndex={1}
                    img={greenMarker}
                    onClick={() => {
                        handleMarkerClick(id)
                    }}
                />
            )
        });
        setMarks(newMarks);
    }, [markets]);


    useEffect(() => {
        axios.post("http://localhost:4000/", {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        query: `query Market($id: Int!) { 
                market(id: $id) {
                    fmid 
                    marketname
                    latitude
                    longitude
                    website
                    seasonDates
                    street
                    city
                    state
                    zip
                    products {
                        name
                    }
                }
        }`,
        variables: {
            id: parseInt(currentMarker)
        }
        })
        .then(resp => {
            const market = resp.data.data
            if(market) setCurrentMarket(market)
        })
        .catch(err => console.log(err))
    }, [currentMarker]);

    const handleMarkerClick = ((data) => {
        setCurrentMarkerId(data)
    })

    const handleFavMarkerClick = ((data) => {
        setCurrentMarkerId(data)
    })

    const _onChange = ((data) => {
        setCenter(data.center);
        setLat(data.center.lat);
        setLng(data.center.lng);
        setZoom(data.zoom)
    });

    const _onChildClick = ((key, childProps) => {
        childProps.onClick()
    })

    const MAP_OPTIONS = {
        minZoom: 10,
        maxZoom: 17,
    }

    const handleSearch = (data) => {
        Geocode.fromAddress(data.location)
        .then(resp => {
            setCenter(resp.results[0].geometry.location)
            setZoom(11);
        })
        .catch(err => console.log('err', err))
    }


    const handleMarketGoTo = (data) => {
        setCenter({lat: parseFloat(data.latitude), lng: parseFloat(data.longitude)})
        setZoom(14)
    }

    return (
        <WindowWrapper>
            <MapWrapper>
                <SearchWrapper 
                    handleSearch={handleSearch}
                    currentUser={currentUser}
                    handleUserLogging={handleUserLogging}
                />
                <GoogleMap
                bootstrapURLKeys={{ key: 'AIzaSyC9D6rE1m0f2aAKVCYWfWoIuHNNRcr-dvE'}}
                center={center}
                zoom={zoom}
                options={MAP_OPTIONS}
                yesIWantToUseGoogleMapApiInternals
                onChange={_onChange}
                onChildClick={_onChildClick}
                >
                    {favMarks}
                    {marks}
                </GoogleMap>
            </MapWrapper>
            <DetailPane 
                currentMarket={currentMarket}
                currentUser={currentUser}
                handleUserFavorites={handleUserFavorites}
                handleMarketGoTo={handleMarketGoTo}
            />
        </WindowWrapper>    
    );
}

export default MainMap;