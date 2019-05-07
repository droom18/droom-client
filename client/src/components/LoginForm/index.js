import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <form>
          Username:
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value="Password Input"
          />
        </form>

        <button>Login </button>
        <button>Add new user button</button>
      </div>
    )
  }
}

export default LoginForm
