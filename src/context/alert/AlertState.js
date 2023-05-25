import React,{useReducer} from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types"
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

const AlertState = props => {
    const initialState = {
        alerts:null,
        type: null,

    }

    const [state, dispatch] = useReducer(alertReducer, initialState);
    //SET ALERT
    const setAlert = (msg, type) => {
        dispatch({type: SET_ALERT, payload: {msg, type}});
        setTimeout(() => removeAlert(), 5000);
    }
    // REMOVE ALERT
    const removeAlert = () => {
        dispatch({type: REMOVE_ALERT});
    }

    return <AlertContext.Provider value={{
        alerts: state.alerts,
        setAlert,
        removeAlert
    }}>
        {props.children}
    </AlertContext.Provider>
}
export default AlertState