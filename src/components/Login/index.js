import './index.css'
import {Component} from 'react'
import Message from './components/Message'
import Logout from "./components/Logout"

class Login extends Component {
  state = {IsloggedIn: true}

  onLogin = () => {
    this.setState(prevState =>
      prevState.IsloggedIn ? {IsloggedIn: false} : {IsloggedIn: true},
    )
  }
  render() {
    const {IsloggedIn} = this.state
    
    return (
        {IsloggedIn? <Message/>:(<Message1/>
            <Logout/>)}
      <div>
        <button onClick={this.onLogin}>Login</button>
      </div>
    )
  }
}

export default Login
