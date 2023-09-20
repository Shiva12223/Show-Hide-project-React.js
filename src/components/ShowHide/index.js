// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showName: false, hideName: false}

  showFirstName = () => {
    this.setState(prevState => ({
      showName: !prevState.showName,
      hideName: prevState.hideName,
    }))
  }

  showLastName = () => {
    this.setState(prevState => ({
      showName: prevState.showName,
      hideName: !prevState.hideName,
    }))
  }

  render() {
    const {showName, hideName} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="card">
              <button
                type="button"
                className="btn"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>
              <div>
                {showName ? (
                  <div className="name">
                    <p>Joe</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="card">
              <button type="button" className="btn" onClick={this.showLastName}>
                Show/Hide Lastname
              </button>
              <div>
                {hideName ? (
                  <div className="name">
                    <p>Jonas</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
