import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/homeScreen/HomeScreen';
import DetailsScreen from './screens/detailsScreen/DetailsScreen';
import data from './utils/data';
import { useState } from 'react';
import WarehouseDataContext from './context/warehouseDataContext';

function App() {

  const [warehouseData, setWarehouseData] = useState(data)

  return (
    <div className="container">
      <WarehouseDataContext.Provider value={{warehouseData,setWarehouseData}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<HomeScreen/>}/>
            <Route path='/details/:id' element = {<DetailsScreen/>} />
          </Routes>
        </BrowserRouter>
      </WarehouseDataContext.Provider>
    </div>
  );
}

export default App;
