import React, {Fragment} from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <Fragment>
        
        <div className="block my-0 mx-auto error-wrapper">
            <i class="fa-sharp fa-regular fa-file-circle-info mb-1 text-black text-base"></i>
            <h1 className='text-2xl'>Oops ! Page not found</h1>
            <p className='text-base'>Thank you for visiting us, 404 that is all we know</p>
            <p className='text-base'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </Fragment>
  )
}

export default ErrorPage