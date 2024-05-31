import React, { useContext, useState } from "react";
import "./detailsScreen.css";
import { json, useParams } from "react-router-dom";
import WarehouseDataContext from "../../context/warehouseDataContext";
import warehouseImage from "../../assets/images/warehouse_image.jpg";
import { useDispatch, useSelector } from "react-redux";

const DetailsScreen = () => {
  const { id } = useParams();

  const warehouseData = useSelector(state => state.warehouseData);
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false);
  const [warehouseName, setWarehouseName] = useState(
    warehouseData[id - 1].name
  );
  const [warehouseCluster, setWarehouseCluster] = useState(
    warehouseData[id - 1].cluster
  );
  const [warehouseCity, setWarehouseCity] = useState(
    warehouseData[id - 1].city
  );
  const [warehouseIsLive, setWarehouseIsLive] = useState(
    warehouseData[id - 1].is_live
  );
  const [warehouseSpace, setWarehouseSpace] = useState(
    warehouseData[id - 1].space_available
  );

  function changeHandler(e, type) {
    const data = JSON.parse(JSON.stringify([...warehouseData]));
    const updatedData = data.map((elem) => {
      if (elem.id - 1 === id - 1) {
        elem[type] = e.target.value;
      }
      return elem;
    });

    dispatch({
      type : "EDIT",
      payload : updatedData
    });
  }

  return (
    <div className="details_screen_container">
        <div className="details_image_container">
            <img alt="warehouse image" src={warehouseImage} />
        </div>
        <div className="details_info_container">
            <div className="input_fields">
                <div>
                    <label>Name : </label>
                    <input
                        type="text"
                        readOnly={!isEditing}
                        value={warehouseName}
                        onChange={(e) => {
                        setWarehouseName(e.target.value);
                        changeHandler(e, "name");
                        }}
                    />
                </div>
                <div>
                    <label>City : </label>
                    <input
                        type="text"
                        readOnly={!isEditing}
                        value={warehouseCity}
                        onChange={(e) => {
                        setWarehouseCity(e.target.value);
                        changeHandler(e, "city");
                        }}
                    />
                </div>
                <div>
                    <label>Cluster : </label>
                    <input
                        type="text"
                        readOnly={!isEditing}
                        value={warehouseCluster}
                        onChange={(e) => {
                        setWarehouseCluster(e.target.value);
                        changeHandler(e, "cluster");
                        }}
                    />
                </div>
                <div>
                    <label>Is live : </label>
                    <select
                        onChange={(e) => {
                        setWarehouseIsLive(Boolean(e.target.value));
                        changeHandler(e, "is_live");
                        }}
                        defaultValue={warehouseIsLive}
                        disabled={!isEditing}
                    >
                        <option value={false}>false</option>
                        <option value={true}>true</option>
                    </select>
                </div>
                <div>
                    <label>Space Available : </label>
                    <input
                        type="number"
                        readOnly={!isEditing}
                        value={warehouseSpace}
                        onChange={(e) => {
                        setWarehouseSpace(Number(e.target.value));
                        changeHandler(e, "space_available");
                        }}
                    />
                </div>
            </div>
            <div>
                <button onClick={() => setIsEditing((prev) => !prev)}>
                    {isEditing === false ? "Edit" : "Stop Editing"}
                </button>
            </div>
        </div>
    </div>
  );
};

export default DetailsScreen;
