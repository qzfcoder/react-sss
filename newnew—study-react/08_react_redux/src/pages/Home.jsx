import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/home/actionCreator'
export class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().home.counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        counter: state.home.counter
      })
    })
  }

  addNumber(e) {
    store.dispatch(addNumberAction(e))
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>Home counter : {counter}</h2>
        <div>
          <button onClick={e => this.addNumber(1)}>+1</button>
          <button onClick={e => this.addNumber(3)}>+3</button>
          <button onClick={e => this.addNumber(5)}>+5</button>
        </div>
      </div>
    )
  }
}

export default Home
