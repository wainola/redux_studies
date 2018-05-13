import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Signin extends Component {
  render() {
    return (
      <div>
        Signin
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Signin
