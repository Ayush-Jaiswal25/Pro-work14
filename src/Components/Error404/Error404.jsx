import React from 'react'
import './Error404.css'
import { Helmet } from 'react-helmet'
function Error404() {
  return (
    <div id="Error404">
      <Helmet><title>Pro Work - 404 Error</title></Helmet>
        <div className="er404heading"><h3>This page is not available for service, sorry for the inconvience</h3></div>
 
        <div className="er404">
            <h1 className='e404 e4 e41'>4</h1>
            <h1 className='e404 e0'>0</h1>
            <h1 className='e404 e4 e42'>4</h1>
        </div>
        <div className="pagenotfound"><h1 className='pnf'>Page not found !!!</h1></div>
        
        <div className="pagenotfound"><h3>Click Here to go back to Home Page</h3><a href="http://localhost:5000/prowork"><button className='home404'>HOME</button></a></div>

    </div>
  )
}

export default Error404