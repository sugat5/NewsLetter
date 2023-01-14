import axios from "axios"

export const SUBSCRIBE= "SUBSCRIBE"
export const SUBSCRIBE_SUCCESS="SUBSCRIBE_SUCCESS"
export const SUBSCRIBE_FAILED=" SUBSCRIBE_FAILED"

export const subscribe=(data)=>{
    return async (dispatch)=>{
        dispatch({type:SUBSCRIBE})

        try {
            const response=await axios.post("/subscribe",data);
            dispatch({type:SUBSCRIBE_SUCCESS,payload:response.data})
        } catch (error) {
            dispatch({type:SUBSCRIBE_FAILED,payload:error})
        }
       
        
    }
}