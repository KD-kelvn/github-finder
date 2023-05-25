import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext';

const ALerts = () => {
  const alertContext = useContext(AlertContext);
  const {alerts} = alertContext;
  return (
    alerts !==null &&<div className='bg-gray-100 px-5 py-6 w-[50%] mt-[3%] text-black'><i className="fas fa-info-circle pl-[3px] mr-5 text-base"/>{alerts} </div>
  )
}

export default ALerts