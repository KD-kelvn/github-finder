/* eslint-disable import/no-anonymous-default-export */
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS,
    SET_SHOW_CLEAR
} from '../types.js'

export default (state, action)=> {
   switch(action.type){
    case SET_LOADING:
        return {
            ...state,
            loading: true,
        };
    case SET_SHOW_CLEAR:
        return {
            ...state,
            showClear: true,
        }
    case SEARCH_USERS:
        return {
            ...state,
            users: action.payload,
            loading:false
        };
    case GET_USER:
        return {
            ...state,
            user: action.payload,
            loading: false,
            showClear: false
        };
    case GET_REPOS:
        return {
            ...state,
            repos: action.payload,
            loading: false,
            showClear: false
        }
    case CLEAR_USER:
        return{
            ...state,
            loading:false,
            showClear: false,
            users:[]
        }
    default:
        return state;
   }
}