import React, { PureComponent } from 'react'
import store from '../store'
export class Profile extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        counter: state.counter
      })
    })
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <div>
          <h2>Profile counter : {counter}</h2>
          <div>
            <button>-1</button>
            <button>-3</button>
            <button>-5</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
