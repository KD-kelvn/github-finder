import React, { Fragment, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {PropTypes} from 'prop-types';
import GithubContext from '../../context/github/githubContext.js';
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos';

const User = () => {
 const githubContext = useContext(GithubContext);
 const { loading,user, getUser, getUserRepos } = githubContext;
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    // eslint-disable-next-line
  }, []);

  const { name, company, location, bio, blog, avatar_url, followers, following, public_repos, html_url, public_gists, hireable } = user;

  if(loading){
    return <Spinner/>
  }else{
    return (
      <Fragment>
        <div className="flex flex-col px-[2rem] mt-[10%] md:w-[100%] md:px-[4rem] transition-all delay-150 ease-in-out duration-500 ">
          <div className='grid grid-cols-2 gap-4 content-center w-[30%]'>
            <Link to='/' className=' py-2 px-2 bg-slate-300 text-black text-center'>Back to search</Link>
            <p className=' self-center'>Hirable {' '} {hireable? <i className='fas fa-check text-green-800'></i>:<i className='fas fa-times-circle text-red-800'></i>}</p>
          </div>

          <div className="card flex flex-col md:flex-row mt-3 py-3 px-2 w-[80%] border-2 border-slate-300">
              <div className="grid justify-items-center  w-1/2 ">
                <div> <img src={avatar_url} alt="" className='min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] rounded-full  '/></div>
                  <div><h3>{name}</h3></div>
                  <div><p >{location}</p></div>    
              </div>

              <div className="bio-right">
                {bio && <Fragment>
                  <h3 className='mb-2'>Bio</h3>
                  <p className='mb-4'>{bio}</p>
                  </Fragment>}
                  <a href={html_url} className=' py-2 px-2 bg-slate-300 text-black text-center'>Visit github profile</a>

                  <ul className='mt-4'>
                    {login && <li>username: <strong>{login}</strong> </li>}
                    {company && <li>company: <strong>{company}</strong> </li>}
                    {blog && <li>website: <strong>{blog}</strong> </li>}
                  </ul>
              </div>

            
          </div>

          <div className='mt-2 grid grid-cols-2 md:grid-cols-4 justify-items-center gap-1 w-[60%]'>
             {followers && <p className='bg-red-500 text-white py-2 px-3 rounded-md'>followers: {followers}</p>}
             {following && <p className='bg-slate-300 text-black py-2 px-3 rounded-md'>following: {following}</p>}
             {public_gists && <p className='bg-green-500 text-black py-2 px-3 rounded-md'>public gist: {public_gists}</p>}
             {public_repos && <p className='bg-slate-500 text-white py-2 px-3 rounded-md'>public gist: {public_repos}</p>}
          </div>

          <Repos/>
           
        </div>
      </Fragment>
    );
  }

};

export default User;
