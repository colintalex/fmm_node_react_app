import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


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
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    border: 3px solid #38A3A5;
    border-radius: 20px;
    margin-left: 5px;
`

const StyledLogger = styled.button`
    position: fixed;
    top: 15px;
    left: 30px;
    z-index: 2;
    width: 70px;
    height: 30px;
    opacity: 95%;
    font-size: 14px;
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    border: 3px solid #38A3A5;
    border-radius: 20px;
`

const SearchWrapper = (({ currentUser, handleUserLogging, handleSearch }) => {
    const { register, handleSubmit, errors} = useForm();
    const history = useHistory();
    const [search, setSearch] = useState('')

    return(
        <div>
                {currentUser.user && <StyledLogger onClick={() => handleUserLogging({action: 'logout'})}>Log Out</StyledLogger>}
                {!currentUser.user && <StyledLogger onClick={() => history.push('/login')}>Log In</StyledLogger>}
            <SearchBar>
                <form onSubmit={handleSubmit(handleSearch)}>
                    <StyledInput type='text' 
                        placeholder='Search by City, State' 
                        ref={register}
                        name='location'   
                    ></StyledInput>
                    <StyledSubmit type='submit'>Search</StyledSubmit>
                </form>
            </SearchBar>
        </div>
    )
});

export default SearchWrapper;