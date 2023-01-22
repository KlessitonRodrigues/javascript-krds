import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { selectTab } from "./tabAction.js"

class tabHeader extends Component {
    render() {
        const { currentTab, hiddenTabs, target } = this.props
        if (hiddenTabs[target]) return false

        return (
            <li className={currentTab === target ? "active" : ""}>
                <a href="javascript:;"
                    data-toggle="tab"
                    data-target={target}
                    onClick={() =>
                        this.props.selectTab(target)}>
                    <i className={`fa fa-${this.props.icon}`} />
                    {" " + this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
    hiddenTabs: state.tabs.hidden
})

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(tabHeader)