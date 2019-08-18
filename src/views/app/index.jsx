import * as React from 'react';
import { LogoutButton } from './index.style';
import { deleteCustomToken } from '../../Storage/localStorage';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    e.stopPropagation();
    deleteCustomToken();
    this.props.history.push('/login');
  }
  render() {
    return (
      <div>
        <h1>Login Successfull</h1>
        <LogoutButton onClick={this.handleLogout}>Logout</LogoutButton>
      </div>
    );
  }
}
