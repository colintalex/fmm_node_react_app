import React, { useState } from 'react'
import styled from 'styled-components'

const SearchBar = styled.div`
    position: fixed;
    display: block;
    width: 40%;
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

const SearchWrapper = (() => {
    const [search, setSearch] = useState('')

    return(
        <SearchBar>
            <form>
                <StyledInput type='text' 
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder='Search by City or State'    
                ></StyledInput>
                <StyledSubmit type='submit'>Search</StyledSubmit>
            </form>
        </SearchBar>
    )
});

export default SearchWrapper;