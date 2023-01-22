import React from "react"
import Display from "./Display"
import InputInterval from "./InputInterval"
import Buttons from "./Buttons"

class Count extends React.Component {

    state = {
        count: 0,
        interval: 1
    }

    setIntervalCount = value => {
        this.setState({
            interval: value
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
                <Display
                    value={this.state.count}
                />
                <InputInterval
                    countInterval={this.setIntervalCount}
                />
                <Buttons
                    inc={this.incrementCount}
                    dec={this.decrementCount}
                />
            </div>
        )
    }
}

export default Count
