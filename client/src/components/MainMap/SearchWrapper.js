import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import Geocode from 'react-geocode'


Geocode.setApiKey(process.env.GOOGLE_API_KEY)

const SearchBar = styled.div`
    position: fixed;
    display: block;
    width: 30%;
    height: 30px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    margin: 15px auto;
    align-content: center;
`

const StyledInput = styled.input`
    width: 80%;
    font-size: 20px;
    opacity: 95%;
    height: 25px;
    background-color: #38A3A5 !important;
    border-radius: 20px;
    color: #fff;
    outline: none !important;
    padding-left: 15px;

`

const StyledSubmit = styled.button`
    display: inline-block;
    position: fixed;
    width: 75px;
    height: 30px;
    opacity: 95%;
    font-size: 18px;
    background-color: #ef8275;
    border: 3px solid #38A3A5;
    border-radius: 20px;
    margin-left: 5px;
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
                    placeholder='Search by City, State' 
                    ref={register}
                    name='location'   
                ></StyledInput>
                <StyledSubmit type='submit'>Search</StyledSubmit>
            </form>
        </SearchBar>
    )
});

export default SearchWrapper;