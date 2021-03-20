import React from "react"
import "./clock.css"

class Clock extends React.Component {

    state = {
        clock: new Date()
    }

    clockID = setInterval(() => {
        this.setState({ clock: new Date() })
    }, 1000)

    componentWillUnmount = () => {
        clearInterval(this.clockID)
    }

    render() {
        return (
            <div className="clock">
                <span className="hour">
                    {this.state.clock.getHours()}
                    :
                </span>
                <span className="minute">
                    {this.state.clock.getMinutes()}
                </span>
                <span className='second'>
                    {this.state.clock.getSeconds()}
                </span>
            </div>
        )
    }
}

export default Clock