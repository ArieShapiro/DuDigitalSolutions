import React, {Component} from 'react'
import AppLogo from './AppLogo';
import Tasks from './Tasks/Tasks';

class App extends Component {
  static propTypes = {
    children: node,
  }

  handleClick = e => {
    e.preventDefault()
    e.target.classList.add('spinner')
    Router.push(e.target.href)
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="header">
          <div className="brand-box">
            <AppLogo />

            <div className="brand-box-title">
              <a href="mailto:jobs@du-agentur.at">
                Join us @ DU Digital Solutions
              </a>
            </div>
          </div>
        </div>
        <div className="content-container">
          <main className="content-area">
            <Tasks />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
