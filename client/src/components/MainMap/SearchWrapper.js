import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import Geocode from 'react-geocode'


Geocode.setApiKey('AIzaSyC9D6rE1m0f2aAKVCYWfWoIuHNNRcr-dvE')

const SearchBar = styled.div`
    position: fixed;
    display: block;
    width: 40%;
    height: 30px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    margin-top: 15px;
    margin-left: 20px;
    align-content: center;
`

const StyledInput = styled.input`
    width: 80%;
    font-size: 20px;
    opacity: 80%;
    height: 25px;
`

const StyledSubmit = styled.button`
    display: block;
    width: 15%;
    height: 20px;
    opacity: 85%;
`

const SearchWrapper = (({onSearchChange}) => {
    const { register, handleSubmit, errors} = useForm();
    const [search, setSearch] = useState('')


    const _onSubmit = (e) => {
        Geocode.fromAddress(e.location)
        .then(resp => {
            onSearchChange(resp.results[0].geometry.location)
        })
        .catch(err => console.log('err', err))
    }

    return(
        <SearchBar>
            <form onSubmit={handleSubmit(_onSubmit)}>
                <StyledInput type='text' 
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder='Search by City or State' 
                    ref={register}
                    name='location'   
                ></StyledInput>
                <StyledSubmit type='submit'>Search</StyledSubmit>
            </form>
        </SearchBar>
    )
});

export default SearchWrapper;