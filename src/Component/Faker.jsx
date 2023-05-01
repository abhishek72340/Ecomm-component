import './Faker.css'
import {useFaker} from '../Context/faker-context';
import React from "react";



export default function Faker() {

    const {dispatch,searchHandler,sortedProducts,state,checkBoxHandler,filterdProducts}=useFaker();

    
  return (
    <>
    {/* **Search** */}
    <div id='search'>
    <input type='search' placeholder='search by name' id='input' onChange={(e)=>dispatch({type:'INPUT_CHANGE',payload:e.target.value})}/>
    <button id='button' onClick={searchHandler}>Search</button>
    </div>
    {/* **Radio** */}
    <div id='radio-parent'>
    <div id='radio'>
      <p id='sort'>Sort By</p>
      <input type='radio' name='radio' onChange={()=>dispatch({type:'HIGH_TO_LOW',payload:'HIGH_TO_LOW'})}/>Price-High to Low ||
      <input type='radio' name='radio'  onChange={()=>dispatch({type:'LOW_TO_HIGH',payload:'LOW_TO_HIGH'})}/>Price-Low to High
    </div>
    </div>

    {/* ***CheckBox* */}
    <div id='radio-parent'>
    <div id='radio'>
      <p id='sort'>Filters</p>
      <input type='checkbox'  value='inStock' onChange={checkBoxHandler} /> Include Out of Stock || 
      <input type='checkbox'  value='fastDelivery' onChange={checkBoxHandler}/>Fast Delivery
    </div>
    </div>
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        {filterdProducts?.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => (
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem"
              }}
            >
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock && <div> In Stock </div>}
              {!inStock && <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
