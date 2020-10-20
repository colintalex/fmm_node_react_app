import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Select from 'react-select'

const SearchBar = styled.div`
    position: fixed;
    display: block;
    width: 80%;
    height: 30px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    margin: 15px auto;
    align-content: center;

    .basic-multi-select {
        display: inline-block;
        width: 30%;
        padding-left: 5px;
        height: 25px;
    }

    .select__control {
        background-color: hsl(181deg 49% 47%);
        font-size: 20px;
        opacity: 95%;
        background-color: #38A3A5 !important;
        border-radius: 20px;
        color: #fff;
        outline: none !important;
    }
`

const StyledInput = styled.input`
    display: inline-block;
    width: 30%;
    font-size: 21px;
    opacity: 95%;
    height: 36px;
    background-color: #38A3A5 !important;
    border-radius: 20px;
    color: #fff;
    outline: none !important;
    padding: 0 0 0 15px;
    border: 1px solid #38A3A5;
    border-color: hsl(0,0%,80%);
`

const StyledSelect = styled.select`
    display: inline-block;
    width: 20%;
    font-size: 20px;
    opacity: 95%;
    height: 36px;
    background-color: #38A3A5 !important;
    border-radius: 20px;
    color: #fff;
    outline: none !important;
    padding-left: 15px;
    margin-left: 5px;
    border: 1px solid #38A3A5;
    border-color: hsl(0,0%,80%);
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

const StyledTopWrapper = styled.div`
    text-align: center;
`


const SearchWrapper = (({ currentUser, handleUserLogging, handleSearch, setSearchProducts, location }) => {
    const { register, handleSubmit} = useForm();
    const history = useHistory();


    const testProducts = [{value: 'organic', label: 'organic', name: 'organic'},{value: 'bakedgoods', label: 'bakedgoods'},{value: 'cheese', label: 'cheese'},{value: 'crafts', label: 'crafts'},{value: 'flowers', label: 'flowers'},{value: 'eggs', label: 'eggs'},{value: 'seafood', label: 'seafood'},{value: 'herbs', label: 'herbs'},{value: 'vegetables', label: 'vegetables'},{value: 'honey', label: 'honey'},{value: 'jams', label: 'jams'},{value: 'maple', label: 'maple'},{value: 'meat', label: 'meat'},{value: 'nursery', label: 'nursery'},{value: 'nuts', label: 'nuts'},{value: 'plants', label: 'plants'},{value: 'poultry', label: 'poultry'},{value: 'prepared', label: 'prepared'},{value: 'soap', label: 'soap'},{value: 'trees', label: 'trees'},{value: 'wine', label: 'wine'},{value: 'coffee', label: 'coffee'},{value: 'beans', label: 'beans'},{value: 'fruits', label: 'fruits'},{value: 'grains', label: 'grains'},{value: 'juices', label: 'juices'},{value: 'mushrooms', label: 'mushrooms'},{value: 'petFood', label: 'petFood'},{value: 'tofu', label: 'tofu'},{value: 'wildHarvested', label: 'wildHarvested'}]
    const testDates = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const testProductNames = testProducts.map(product => {
        return product.name
    })
    const productsMenu = testProducts.map(product => {
        return (
            <option>{product.name}</option>
        )
    })
    const datesMenu = testDates.map(date => {
        return (
            <option >{date}</option>
        )
    })

    const _setSearchProducts = (data) => {
        if(data) setSearchProducts(data.map(x => {return x.label}))
    }

    return(
        <StyledTopWrapper>
                {currentUser.user && <StyledLogger onClick={() => handleUserLogging({action: 'logout'})}>Log Out</StyledLogger>}
                {!currentUser.user && <StyledLogger onClick={() => history.push('/')}>Home</StyledLogger>}
            <SearchBar>
                <form onSubmit={handleSubmit(handleSearch)}>
                    <StyledInput type='text' 
                        placeholder={location}
                        ref={register}
                        name='location'   
                    ></StyledInput>
                    <StyledSubmit type='submit'>Go!</StyledSubmit>
                </form>
                    <Select
                        options={testProducts}
                        placeholder='Select Products to Live-Filter Results'
                        isMulti
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(e) => _setSearchProducts(e) }
                    />  
            </SearchBar>
        </StyledTopWrapper>
    )
});

export default SearchWrapper;