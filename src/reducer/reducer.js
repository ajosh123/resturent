import { FAIL, SUCCESS } from "../constant/restConstant"



//create reducer function
//define state,define action
export const restReducer=(state={restLis:[]},action)=>{
switch(action.type){
    case SUCCESS:
        return{
            restLis:action.payload
        }
        case FAIL:
            return{
                restLis:action.payload
            }
            default:
                return state
}
}