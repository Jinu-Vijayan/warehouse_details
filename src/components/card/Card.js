import React, { memo } from 'react';
import './card.css';
import warehouseImage from '../../assets/images/warehouse_image.jpg'
import { useNavigate } from 'react-router-dom';

const Card = ({info}) => {

    const navigate = useNavigate();

  return (
    <div className='card' onClick={()=> navigate(`/details/${info.id}`)}>
        <div className='card_image_container'>
            <img alt='image of warehouse' src={warehouseImage}/>
        </div>
        <div className='card_info_container'>
            <p>{info.name}</p>
            <p className='location_container'><span className='location_icon'><svg xmlns="http://www.w3.org/2000/svg" height={"20px"} width={"20px"} viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
</span><span>{info.city}</span></p>
        </div>
    </div>
  )
}

export default Card