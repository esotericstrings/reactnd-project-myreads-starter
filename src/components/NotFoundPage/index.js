import React from 'react'
import Header from '../Header/'
import './index.css'

class NotFoundPage extends React.Component {

  render() {
    return (
         <div className="not-found page">      
      		<Header/>
			<h2>404</h2>
      		<p>Page Not Found</p>
      	</div>
    )
  }
}


export default NotFoundPage
