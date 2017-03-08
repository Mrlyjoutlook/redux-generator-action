import React, { Component, PropTypes } from 'react'

class App extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props

    return (
      <div>

      </div>
    )
  }
}

export default App
