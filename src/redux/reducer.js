import data from "../utils/data";

function warehouseReducer(state = data,action){
    switch(action.type){
        case "EDIT" : {
            const data = action.payload;
            return data;
        }
        default : {
            return state;
        }
    }
}

export default warehouseReducer;