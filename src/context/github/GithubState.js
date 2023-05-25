import react , {useReducer} from "react";
import axios from "axios";
import GithubContext from './githubContext.js'
import GithubReducer from './githubReducer.js'
import {
    SEARCH_USERS,
    SET_LOADING,
    SET_SHOW_CLEAR,
    CLEAR_USER,
    GET_USER,
    GET_REPOS

} from '../types.js'

const GIthubState = props =>{
    const initialState = {
        users:[],
        user: {},
        repos: [],
        loading: false,
        showClear: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    // SEARCH USERS
    const searchUsers = async (text) => {
        setLoading();
        setShowClear();
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({type: SEARCH_USERS, payload: res.data.items})
      };
    
    // GET USER
    const getUser = async (username) => {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({type: GET_USER, payload: res.data});
    };
    // GET REPO
    const getUserRepos = async (username) => {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({type: GET_REPOS, payload: res.data});
    };
    // CLEAR USERS
    const clearUsers = async () => {
      setLoading();
      dispatch({type: CLEAR_USER}); 
    };
    // SET LOADING
    const setLoading = ()=> {
        dispatch({type: SET_LOADING});
    }
    // SET SHOW CLEAR
    const setShowClear = ()=> {
      dispatch({type: SET_SHOW_CLEAR});
    }

    return <GithubContext.Provider
    value={{
        users:state.users,
        user:state.user,
        repos: state.repos,
        loading: state.loading,
        showClear: state.showClear,
        getUser,
        searchUsers,
        getUserRepos,
        clearUsers,
        setShowClear
    }}>
      {props.children}
    </GithubContext.Provider>
}

export default GIthubState