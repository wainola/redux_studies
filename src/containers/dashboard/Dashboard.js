import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component{
  render(){
    return(
      <div>
        Dashboard
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Dashboard