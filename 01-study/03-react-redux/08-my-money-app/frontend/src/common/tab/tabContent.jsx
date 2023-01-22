import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class TabContent extends Component {
    render() {
        const isSelected =
            this.props.currentTab === this.props.id ? "active" : ""

        return (
            <div
                id={this.props.id}
                className={`tab-pane ${isSelected}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
    hiddenTabs: state.tabs.hidden
})

export default connect(mapStateToProps)(TabContent)