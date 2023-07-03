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
    const {Isloggedout} = this.state;
    
    return (
        {Isloggedout? ( <Message1/> <div>
        <button onClick={this.onLogout}>Logout</button>
      </div>):(<Message/>
            <Login/>)}
      
    )
  }
}

export default Logout
