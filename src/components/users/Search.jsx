import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ()=> {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const {searchUsers, clearUsers, showClear} = githubContext;
  const {setAlert} = alertContext;
 const [text, setText] = useState('');
   const handleSubmit = (e)=>{
        e.preventDefault();
        if(text === ""){
          setAlert("Can`t search for empty data, please type something", "light");
        }
        else{
        searchUsers(text);
        setText('');
        }
       
    }
    const handleValue = (e)=>{
      setText(e.target.value);
    }
 
    return (
      <>
        <form className='md:w-[88] md:mb-[3%] md:mt-[2%] flex md:space-x-1' onSubmit={handleSubmit}>
            <input className='transition-all delay-150 ease-in-out duration-500 w-[40%] rounded-md border-2 px-8 focus:outline-none focus:shadow-xl focus:w-[88%] focus:py-2 border-rose-200' type="text" name='text' placeholder='search users here...' value={text} onChange={(e)=>handleValue(e)}/>
            <input className='w-[10%] hover:shadow-2xl bg-slate-100' type="submit" value="Search" />
            {showClear && <button className='bg-red-300 rounded-md w-[10%]' onClick={clearUsers}>Clear</button>}
        </form>
      </>
    )
  
}
export default Search

