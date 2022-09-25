import React, { PureComponent } from 'react'
// import store from '../store'
import { connect } from 'react-redux'

export class About extends PureComponent {

  render() {
    const { counter } = this.props
    return (
      <div>
        About:{counter}
      </div>
    )
  }
}

function map(state) {
  return {
    counter: state.counter,
    // banner: state.banner
  }

}

export default connect(map)(About)
