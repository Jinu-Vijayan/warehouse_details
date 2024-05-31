import React, { useContext, useEffect, useRef, useState } from 'react';
import './homeScreen.css';
import data from '../../utils/data'
import Card from '../../components/card/Card';
import { useSelector } from 'react-redux';

function HomeScreen() {

  const warehouseData = useSelector(state => state.warehouseData);

  const [filteredWarehouseData, setFilteredWareHouseData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const selectRef = useRef();

  function inputChangeHandler(e){
    setSearchQuery(e.target.value);
  }

  useEffect(()=>{
    let filteredData = []
    
    if(selectRef.current.value === 'space_available'){
      filteredData = warehouseData.filter((elem)=> elem.space_available >= searchQuery);
    } else {
      filteredData = warehouseData.filter((elem) => elem[selectRef.current.value].toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setFilteredWareHouseData(filteredData);
  },[searchQuery])

  return (
    <div className='homepage_container'>
      <h1>Warehouse Details</h1>
      <div className='filter_container'>
        <div>
          <select ref={selectRef} onChange={()=> setSearchQuery("")}>
            <option value={"name"}>Name</option>
            <option value={"cluster"}>Cluster</option>
            <option value={"city"}>City</option>
            <option value={"space_available"}>Space available</option>
          </select>
          <input type='text' value={searchQuery} onChange={inputChangeHandler} placeholder='Enter serch term'/>
        </div>
      </div>
      <div className='card_container'>
        {
          filteredWarehouseData.length > 0 ? (
            filteredWarehouseData.map(elem => {
              return <Card info = {elem} key={elem.id} />
            })
          ) : (
            <p>No Matching Data Found</p>
          )
        }
      </div>
    </div>
  )

}

export default HomeScreen