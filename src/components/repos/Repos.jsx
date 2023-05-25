import React, {useContext} from 'react'
import RepoItem from './RepoItem'
import GitHubContext from '../../context/github/githubContext'
const Repos = () => {
  const githubContext = useContext(GitHubContext);
  const {repos} = githubContext;
  return (
    <div className='mt-3 md:w-[60%]'>
        {repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)}
    </div>
  )
}


export default Repos