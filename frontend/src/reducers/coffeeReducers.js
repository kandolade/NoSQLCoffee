import { ERROR, FETCH_COFFEE, FETCH_COFFEE_SUCCESS } from "../actions/types";


const coffeeReducer=(state={data:[],loading:true},action)=>{
     switch (action.type) {
         case FETCH_COFFEE:
             return {loading:true,data:action.payload}
         case FETCH_COFFEE_SUCCESS:
             return{loading:false,data:action.payload}
         case ERROR:
             return {loading:false,error:action.payload,data:[]}         
         default:
             return state
     }
}

export default coffeeReducer