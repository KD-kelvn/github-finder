import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
  return (
    <div className='px-3 py-2 border-2 border-slate-300 rounded-md mb-2'>
      <h3 className='text-lg'>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}

export default RepoItem

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}