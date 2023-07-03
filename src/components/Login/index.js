import './index.css'
import {Component} from 'react'
import Message from './components/Message'
import Logout from "./components/Logout"

class Login extends Component {
  state = {isloggedIn: true}

  onLogin = () => {
    this.setState(prevState =>
      prevState.isloggedIn ? {isloggedIn: false} : {isloggedIn: true},
    )
  }
  render() {
    const {isloggedIn} = this.state
    
    return (
        {isloggedIn ? (<Message/> <div>
        <button onClick={this.onLogin}>Login</button>
      </div>):(<Message1/>
            <Logout/>)}
      
    )
  }
}

export default Login
