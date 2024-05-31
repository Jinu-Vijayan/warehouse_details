import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/homeScreen/HomeScreen';
import DetailsScreen from './screens/detailsScreen/DetailsScreen';
import data from './utils/data';
import { useState } from 'react';
import WarehouseDataContext from './context/warehouseDataContext';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const [warehouseData, setWarehouseData] = useState(data)

  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<HomeScreen/>}/>
            <Route path='/details/:id' element = {<DetailsScreen/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
