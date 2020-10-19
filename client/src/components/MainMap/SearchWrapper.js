import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


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
`

const StyledInput = styled.input`
    display: inline-block;
    width: 20%;
    font-size: 20px;
    opacity: 95%;
    height: 25px;
    background-color: #38A3A5 !important;
    border-radius: 20px;
    color: #fff;
    outline: none !important;
    padding-left: 15px;

`

const StyledSelect = styled.select`
    display: inline-block;
    width: 20%;
    font-size: 20px;
    opacity: 95%;
    height: 30px;
    background-color: #38A3A5 !important;
    border-radius: 20px;
    color: #fff;
    outline: none !important;
    padding-left: 15px;
    margin-left: 5px;
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

const SearchWrapper = (({ currentUser, handleUserLogging, handleSearch }) => {
    const { register, handleSubmit} = useForm();
    const history = useHistory();


    const testProducts = [{name: ''},{name: 'Organic'},{name: 'Bakedgoods'},{name: 'Cheese'},{name: 'Crafts'},{name: 'Flowers'},{name: 'Eggs'},{name: 'Seafood'},{name: 'Herbs'},{name: 'Vegetables'},{name: 'Honey'},{name: 'Jams'},{name: 'Maple'},{name: 'Meat'},{name: 'Nursery'},{name: 'Nuts'},{name: 'Plants'},{name: 'Poultry'},{name: 'Prepared'},{name: 'Soap'},{name: 'Trees'},{name: 'Wine'},{name: 'Coffee'},{name: 'Beans'},{name: 'Fruits'},{name: 'Grains'},{name: 'Juices'},{name: 'Mushrooms'},{name: 'PetFood'},{name: 'Tofu'},{name: 'WildHarvested'}]
    const testDates = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const productsMenu = testProducts.map(product => {
        return (
            <option type='radio'>{product.name}</option>
        )
    })
    const datesMenu = testDates.map(date => {
        return (
            <option >{date}</option>
        )
    })
    return(
        <StyledTopWrapper>
                {currentUser.user && <StyledLogger onClick={() => handleUserLogging({action: 'logout'})}>Log Out</StyledLogger>}
                {!currentUser.user && <StyledLogger onClick={() => history.push('/')}>Home</StyledLogger>}
            <SearchBar>
                <form onSubmit={handleSubmit(handleSearch)}>
                    <StyledInput type='text' 
                        placeholder='Search by City, State' 
                        ref={register}
                        name='location'   
                    ></StyledInput>
                    <StyledSelect
                        placeholder='Products'
                        name='products' 
                        ref={register}
                    >
                        {productsMenu}
                    </StyledSelect>
                    <StyledSelect
                        placeholder='Start Date'
                        name='start-date' 
                        ref={register}
                    >
                        {datesMenu}
                    </StyledSelect>
                    <StyledSelect
                        placeholder={'End Date'}
                        name='end-date' 
                        ref={register}
                    >
                        {datesMenu}
                    </StyledSelect>
                    <StyledSubmit type='submit'>Search</StyledSubmit>
                </form>
            </SearchBar>
        </StyledTopWrapper>
    )
});

export default SearchWrapper;