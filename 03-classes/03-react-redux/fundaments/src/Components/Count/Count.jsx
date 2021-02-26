import React from "react"


class Count extends React.Component {

  state = {
      count: 0,
  }

  incrementCount = (e) => {
    this.setState({
      count: this.state.count + 1

    })
  }

  decrementCount = (e) => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="flex-items">
        <span>
          <b>{this.state.count}</b>
        </span>
        <input
          type="number"
          value="1"
          />
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    )
  }
}

export default Count
