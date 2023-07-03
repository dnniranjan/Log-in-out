import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <Login />
          <Logout />
        </div>
      </div>
    )
  }
}

export default Home
