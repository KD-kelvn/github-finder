import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: {html_url,avatar_url, login}})=> {
    return (
      <div className='flex flex-col rounded-[4px] items-center py-2 space-y-2 bg-slate-100' >
           <img src={avatar_url} alt="x" className='min-w-[60px] max-w-[60px] rounded-full object-contain '/>
           <h3 className='text-black text-lg'>{login}</h3>
           <button className='bg-black w-24 my-4 py-2'><Link to={`/user/${login}`} className='bg-transparent text-white'>See more</Link> </button>
      </div>
    )
  }

export default UserItem

UserItem.propTypes = {
 user: PropTypes.object.isRequired
}