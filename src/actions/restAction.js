import axios from "axios";
import { FAIL, SUCCESS } from "../constant/restConstant";



//logic to update store data
//api call-dispatcheble function
export const getResaturants=async(dispatch)=>{
  try{
    const {data}= await axios.get('/restaurants.json')
  console.log(data.restaurants);
  //dispatch the expected output data to reducer
  dispatch(
    {
        payload:data.restaurants,
        type:SUCCESS
    }
  )
  }
  catch(er){
dispatch(
    {
        payload:er,
        type:FAIL
    }
)
  }
}
