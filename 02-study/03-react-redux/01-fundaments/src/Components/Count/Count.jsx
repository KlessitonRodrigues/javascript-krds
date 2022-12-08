import React from "react"

class Count extends React.Component {

  state = {
    count: 0,
    interval: 1
  }

  setIntervalCount = e => {
    this.setState({
      interval: e.target.value
    })
  }

  incrementCount = e => {
    this.setState({
      count: this.state.count + Number(this.state.interval)
    })
  }

  decrementCount = e => {
    this.setState({
      count: this.state.count - Number(this.state.interval)
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
          value={this.state.interval}
          onChange={this.setIntervalCount}
        />
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    )
  }
}

export default Count
