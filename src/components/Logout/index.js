import './index.css'
import {Component} from 'react'
import Message1 from './components/Message'
import Login from "./components/Login"

class Logout extends Component {
  state = {Isloggedout: true}

  onLogout = () => {
    this.setState(prevState =>
      prevState.Isloggedout ? {Isloggedout: false} : {Isloggedout: true},
    )
  }
  render() {
    const {IsloggedIn} = this.state
    return (
        
        {Isloggedout? <Message/>:(<Message1/>
            <Logout/>)}
      <div>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    )
  }
}

export default Logout
