/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { SET_ALERT, REMOVE_ALERT } from "../types"
export default (state, action)=> {
    switch(action.type){
       case SET_ALERT:
            return{
                ...state,
                alerts: action.payload.msg,
                type: action.payload.type
            };
        case REMOVE_ALERT:
            return{
                ...state,
                alerts: null,
                type: null
            }
    
    }
}