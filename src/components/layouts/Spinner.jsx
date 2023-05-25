import React, {Fragment} from 'react'
import { GridLoader } from 'react-spinners'

const Spinner = () =>{
    return(
       <Fragment>
        <GridLoader color="#d60808" width={500} cssOverride={{margin: "20% auto", display: "block", width: "500px"}} loading={true}/>
       </Fragment>
    )
}

export default Spinner

