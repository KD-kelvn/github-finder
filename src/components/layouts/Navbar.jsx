import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const  Navbar = ({icon, title})=> {
    return (
      <nav className='bg-red-500 fixed top-0 left-0 right-0 py-4 px-10 flex justify-between'>
        <h1 className='text-white text-xl justify-start'><i className={icon}></i>{title}</h1>

        <ul className='flex justify-end w-[30%] space-x-10 text-white'>
          <li>
            <Link to='/' className='text-base'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='text-base'>About</Link>
          </li>
        </ul>
      </nav>
    )
  }


export default Navbar

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}